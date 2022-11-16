using System;
using System.Collections.Generic;
using System.Diagnostics.CodeAnalysis;
using System.Linq;
using System.Threading.Tasks;
using AlumniOrtServer.Context;
using AlumniOrtServer.DTO;
using AlumniOrtServer.Data.DTO;
using AlumniOrtServer.Data.Entities;
using AlumniOrtServer.Models;
using Microsoft.EntityFrameworkCore;

using static AlumniOrtServer.Extensions.Constants;
using Microsoft.AspNetCore.Http;
using OrtAlumniWeb.AlumniOrtServer.Data.Entities;
using System.IO;

namespace AlumniOrtServer.Services
{
    public class TeacherService : ITeacherService
    {
        private readonly AlumniDBContext m_db;

        //private readonly ImgService _Img;
        public TeacherService(AlumniDBContext db)
        {
            m_db = db;
            //_Img = img;
        }

        public async Task<bool> existAccount(int alumnusId)
        {
            bool c =
                await m_db
                    .Teachers
                    .Where(t => t.AlumnusId == alumnusId)
                    .FirstOrDefaultAsync() !=
                null;
            return c;
        }
        public async Task<ResponseDTO> AddLogo(IFormFileCollection logoFiles,int teacherId )
        {

 
            TeacherLogo logo = new TeacherLogo();
            int c = 0;
            if (logoFiles.Count > 0)
            {
              var file = logoFiles.First();

                if (file.Length > 0)
                {
                  using (var memoryStream = new MemoryStream())
                  {
                    await file.CopyToAsync(memoryStream);
                    // Upload the file if less than 2 MB
                    if (memoryStream.Length < 2097152)
                    {
                      var newLogo = new TeacherLogo()
                      {
                        Bytes = memoryStream.ToArray(),
                        Description = file.FileName,
                        FileExtension = Path.GetExtension(file.FileName),
                        Size = file.Length,
                        TeacherId = teacherId,
                      };
                    logo = newLogo;
                    }
                    else
                    {
                      return new ResponseDTO() { Status = StatusCODE.Faild, StatusText = "some Errors" };
                    }
                  }
                  await m_db.TeacherLogo.AddAsync(logo);
                  c = await m_db.SaveChangesAsync();
                }

              }
          return new ResponseDTO() { Status = c > 0 ? StatusCODE.Success : StatusCODE.Faild };
        }
      public async Task<ResponseDTO> Add(TeacherDTO teacher)
        {
            Teacher TeacherFromDB =
                new Teacher(0,
                    teacher.MailForStudy,
                    //teacher.Logo,
                    teacher.Rate,
                    teacher.Description,
                    teacher.AlumnusId);

            await m_db.Teachers.AddAsync(TeacherFromDB);

            int c = await m_db.SaveChangesAsync();
            ResponseDTO response = new ResponseDTO();
            response.StatusText = "";
            if (c == 0)
            {
                response.Status = StatusCODE.Faild;
                response.StatusText = "Teacher Not Created";
            }

            bool objectsCreated =
                await Add_ManyToMany_Language(teacher, TeacherFromDB.Id);
            if (
                !objectsCreated && teacher.Languages.Length > 0 //last condition for situation that front dont fill any language
            )
            {
                //ResponseDTO res = new ResponseDTO();
                //await Delete(TeacherFromDB.Id);
                response.Status = StatusCODE.Warning;
                response.StatusText +=
                    "\nOne or More Languages in Teacher NO Adedd";
                //return response;
            }

            objectsCreated =
                await Add_ManyToMany_ModeStudyCity(teacher, TeacherFromDB.Id);
            if (!objectsCreated && teacher.ModeStudyIDs.Length > 0)
            {
                //await Delete(TeacherFromDB.Id);
                response.Status = StatusCODE.Warning;
                response.StatusText +=
                    "\nOne or More ModeStudy or City in Teacher NO Adedd";
                //return response;
            }

            objectsCreated =
                await Add_ManyToMany_TeacherCourses(teacher, TeacherFromDB.Id);
            if (!objectsCreated && teacher.CourseIDs.Length > 0)
            {
                //await Delete(TeacherFromDB.Id);
                response.Status = StatusCODE.Warning;
                response.StatusText += "\nCourses in Teacher NO Adedd";
                //return response;
            }

            if (response.StatusText == "") response.Status = StatusCODE.Success;

            return response;
        }

        //public async Task<bool> AddImageToFolder()
        //{
        //}
        public async Task<ResponseDTO> Delete(int id)
        {
            try
            {
                TeacherDTO teacher = await Get(id);

                if (teacher == null)
                {
                    return new ResponseDTO()
                    {
                        StatusText = "this object not exists",
                        Status = StatusCODE.Faild
                    };
                }

                m_db.Teachers.Remove(new Teacher { Id = teacher.Id });
                int c = await m_db.SaveChangesAsync();
                ResponseDTO response = new ResponseDTO();
                if (c > 0)
                {
                    response.StatusText = "Successfully object deleted";
                    response.Status = StatusCODE.Success;
                }
                else
                {
                    response.Status = StatusCODE.Error;
                }
                return response;
            }
            catch
            {
                return new ResponseDTO()
                {
                    Status = StatusCODE.Error,
                    StatusText = $"Erorrs in service"
                };
            }
        }

        public async Task<TeacherDTO> Get(int id)
        {
            TeacherDTO teacher =
                await m_db
                    .Teachers
                    .Select(t =>
                        new TeacherDTO()
                        {
                            AlumnusId = t.AlumnusId,
                            Description = t.Description,
                            Rate = t.Rate,
                            //Logo = t.Logo,
                            MailForStudy = t.MailForStudy,
                            Id = t.Id
                            //CourseIDs = t.TeacherCourses.Select(cs => cs.Course_StudyProgram.Id).ToArray(),
                            //CoursesNames = t.TeacherCourses.Select(cs => cs.Course_StudyProgram.Name).ToList(),

                            //ModeStudyIDs = t.ModeStudy_Cities.Select(ms => ms.ModeStudyId).ToArray(),
                            //Frontally_Names = t.ModeStudy_Cities.Where(ms => ms.ModeStudy.ModeStudyId == 1).Select(id => id.City.Name).ToList(),
                            //CityIDs = t.ModeStudy_Cities.Select(c => c.City.Id).ToArray(),
                            //Is_Online = t.ModeStudy_Cities.Where(ms => ms.ModeStudy.ModeStudyId == 2).Select(id => id.City).FirstOrDefault() != null,
                            //Is_Frontally = t.ModeStudy_Cities.Where(ms => ms.ModeStudy.ModeStudyId == 1).Select(id => id.City).FirstOrDefault() != null,
                        })
                    .FirstOrDefaultAsync(i => i.AlumnusId == id);
            if (teacher != null)
            {
                TeacherDTO result = new TeacherDTO();
                result.AlumnusId = teacher.AlumnusId;
                result.Description = teacher.Description;
                result.Rate = teacher.Rate;
                result.Logo = teacher.Logo;
                result.MailForStudy = teacher.MailForStudy;
                result.Id = teacher.Id;

                TeacherDTO teacher1 =
                    await m_db
                        .Teachers
                        .Select(t =>
                            new TeacherDTO()
                            {
                                AlumnusId = t.AlumnusId,
                                CourseIDs =
                                    t
                                        .TeacherCourses
                                        .Select(cs => cs.Course_StudyProgram.Id)
                                        .ToArray(),
                                CoursesNames =
                                    t
                                        .TeacherCourses
                                        .Select(cs =>
                                            cs.Course_StudyProgram.Name)
                                        .ToList()
                            })
                        .FirstOrDefaultAsync(i => i.AlumnusId == id);
                result.CourseIDs = teacher1.CourseIDs;
                result.CoursesNames = teacher1.CoursesNames;

                TeacherDTO teacher2 =
                    await m_db
                        .Teachers
                        .Select(t =>
                            new TeacherDTO()
                            {
                                AlumnusId = t.AlumnusId,
                                Languages =
                                    t
                                        .TeacherLanguages
                                        .Select(TLang => TLang.Language)
                                        .ToArray()
                            })
                        .FirstOrDefaultAsync(i => i.AlumnusId == id);

                result.Languages = teacher2.Languages;

                TeacherDTO teacher3 =
                    await m_db
                        .Teachers
                        .Select(t =>
                            new TeacherDTO()
                            {
                                AlumnusId = t.AlumnusId,
                                ModeStudyIDs =
                                    t
                                        .ModeStudy_Cities
                                        .Select(ms => ms.ModeStudyId)
                                        .ToArray(),
                                Frontally_Names =
                                    t
                                        .ModeStudy_Cities
                                        .Where(ms =>
                                            ms.ModeStudy.ModeStudyId == 1)
                                        .Select(id => id.City.Name)
                                        .ToList(),
                                Cities =
                                    t
                                        .ModeStudy_Cities
                                        .Where(ms => ms.ModeStudyId == 1)
                                        .Select(c => c.City)
                                        .ToArray(),
                                Is_Online =
                                    t
                                        .ModeStudy_Cities
                                        .Where(ms =>
                                            ms.ModeStudy.ModeStudyId == 2)
                                        .Select(id => id.City)
                                        .FirstOrDefault() !=
                                    null,
                                Is_Frontally =
                                    t
                                        .ModeStudy_Cities
                                        .Where(ms =>
                                            ms.ModeStudy.ModeStudyId == 1)
                                        .Select(id => id.City)
                                        .FirstOrDefault() !=
                                    null
                            })
                        .FirstOrDefaultAsync(i => i.AlumnusId == id);
                result.ModeStudyIDs = teacher3.ModeStudyIDs;
                result.Frontally_Names = teacher3.Frontally_Names;
                result.Cities = teacher3.Cities;
                result.Is_Online = teacher3.Is_Online;
                result.Is_Frontally = teacher3.Is_Frontally;
                return result;
            }

            return teacher;
        }

        public async Task<List<TeacherDTO>> GetAll()
        {
            List<TeacherDTO> teacher =
                await m_db
                    .Teachers
                    .Select(t =>
                        new TeacherDTO()
                        {
                            AlumnusId = t.AlumnusId,
                            Description = t.Description,
                            Rate = t.Rate,
                            //Logo = t.Logo,
                            MailForStudy = t.MailForStudy,
                            Id = t.Id
                        })
                    .ToListAsync();

            List<TeacherDTO> Cteacher = await GetAllCourses();

            //teacher.AddRange(Cteacher);
            List<TeacherDTO> Lteacher = await GetAllLanguages();

            //var result1 = Cteacher.Union(Lteacher, new StudentComparer());
            List<TeacherDTO> Mteacher = await GetAllModesWithCity();

            //var result2 = Mteacher.Union(result1, new StudentComparer());
            //var FinalResult = teacher.Union(result2, new StudentComparer());
            for (int i = 0; i < teacher.Count; i++)
            {
                if (
                    teacher[i].Id == Cteacher[i].Id &&
                    teacher[i].Id == Lteacher[i].Id &&
                    teacher[i].Id == Mteacher[i].Id
                )
                {
                    teacher[i].CourseIDs = Cteacher[i].CourseIDs;
                    teacher[i].CoursesNames = Cteacher[i].CoursesNames;
                    teacher[i].Languages = Lteacher[i].Languages;
                    teacher[i].ModeStudyIDs = Mteacher[i].ModeStudyIDs;
                    teacher[i].Frontally_Names = Mteacher[i].Frontally_Names;
                    teacher[i].Is_Frontally = Mteacher[i].Is_Frontally;
                    teacher[i].Is_Online = Mteacher[i].Is_Online;
                    teacher[i].Cities = Mteacher[i].Cities;
                }
            }
            return teacher;
        }

        public async Task<List<TeacherDTO>> GetAllCourses()
        {
            var teacher =
                await m_db
                    .Teachers
                    .Select(t =>
                        new TeacherDTO()
                        {
                            AlumnusId = t.AlumnusId,
                            Id = t.Id,
                            CourseIDs =
                                t
                                    .TeacherCourses
                                    .Select(cs => cs.Course_StudyProgramId)
                                    .ToArray(),
                            CoursesNames =
                                t
                                    .TeacherCourses
                                    .Select(cs => cs.Course_StudyProgram.Name)
                                    .ToList()
                        })
                    .ToListAsync();

            return teacher;
        }

        public async Task<List<TeacherDTO>> GetAllLanguages()
        {
            var teacher =
                await m_db
                    .Teachers
                    .Select(t =>
                        new TeacherDTO()
                        {
                            AlumnusId = t.AlumnusId,
                            Id = t.Id,
                            Languages =
                                t
                                    .TeacherLanguages
                                    .Select(lang => lang.Language)
                                    .ToArray()
                        })
                    .ToListAsync();

            return teacher;
        }

        public async Task<List<TeacherDTO>> GetAllModesWithCity()
        {
            var teacher =
                await m_db
                    .Teachers
                    .Select(t =>
                        new TeacherDTO()
                        {
                            AlumnusId = t.AlumnusId,
                            Id = t.Id,
                            //these are importent raws that have problam with -Time- Get All
                            Frontally_Names =
                                t
                                    .ModeStudy_Cities
                                    .Where(ms => ms.ModeStudyId == 1)
                                    .Select(id => id.City.Name)
                                    .ToList(),
                            Cities =
                                t
                                    .ModeStudy_Cities
                                    .Where(ms => ms.ModeStudyId == 1)
                                    .Select(c => c.City)
                                    .ToArray(),
                            ModeStudyIDs =
                                t
                                    .ModeStudy_Cities
                                    .Select(ms => ms.ModeStudyId)
                                    .ToArray(),
                            Is_Online =
                                t
                                    .ModeStudy_Cities
                                    .Where(ms => ms.ModeStudyId == 2)
                                    .Select(id => id.City)
                                    .FirstOrDefault() !=
                                null,
                            Is_Frontally =
                                t
                                    .ModeStudy_Cities
                                    .Where(ms => ms.ModeStudyId == 1)
                                    .Select(id => id.City)
                                    .FirstOrDefault() !=
                                null
                        })
                    .ToListAsync();

            return teacher;
        }

        public async Task<ResponseDTO> Update(int id, TeacherDTO teacher)
        {
            //try
            //{
            TeacherDTO existsT = await Get(id);
            Teacher TeacherFromDB = new Teacher();
            if (existsT == null)
            {
                return new ResponseDTO()
                {
                    Status = StatusCODE.Error,
                    StatusText = $"Item with id {id} not found in DB"
                };
            }
            TeacherFromDB.Id = Convert.ToInt32(existsT.Id.ToString());
            //TeacherFromDB.Logo = teacher.Logo ?? existsT.Logo;
            TeacherFromDB.MailForStudy =
                teacher.MailForStudy ?? existsT.MailForStudy;
            TeacherFromDB.Rate = teacher.Rate ?? existsT.Rate;
            TeacherFromDB.Description =
                teacher.Description ?? existsT.Description;
            TeacherFromDB.AlumnusId = existsT.AlumnusId;

            m_db.Entry(TeacherFromDB).State = EntityState.Modified;

            int c = await m_db.SaveChangesAsync();

            await Update_ManyToMany_TeacherCourses(teacher, existsT);
            await Update_ManyToMany_Languges(teacher, existsT);
            await Update_ManyToMany_ModeStudy(teacher, existsT);

            ResponseDTO response = new ResponseDTO();
            if (c > 0)
            {
                response.StatusText = c + " Teachers affected";
                response.Status = StatusCODE.Success;
            }
            else
            {
                response.Status = StatusCODE.Faild;
                response.StatusText = "faild no Teachers affacted";
            }
            return response;
            //}
            /*            catch
            {

                return new ResponseDTO()
                {
                    Status = StatusCode.Error,
                    StatusText = $"Erorrs in service: One or More details not Updated"
                };
            }*/
        }

        private async Task
        Update_ManyToMany_ModeStudy(TeacherDTO teacher, TeacherDTO existsT)
        {
            //DbContextOptionsBuilder.EnableSensitiveDataLogging
            if (existsT.Is_Online)
            {
                var modeOnlineToRemove =
                    new ModeStudy_City(1, ModeStudiesId.Online, existsT.Id);
                m_db.ModeStudy_Cities.Remove (modeOnlineToRemove);
            }
            bool enter = true; //enter to avoid duplicate removes cities for mode frontally
            foreach (var modeFront in existsT.ModeStudyIDs)
            {
                if (
                    modeFront == ModeStudiesId.Frontally &&
                    existsT.Cities.Length > 0 &&
                    enter
                )
                {
                    enter = false;
                    foreach (var cityId in existsT.Cities)
                    {
                        if (cityId.Id != 1)
                        {
                            var cityToRemove =
                                new ModeStudy_City(cityId.Id,
                                    modeFront,
                                    existsT.Id);
                            m_db.ModeStudy_Cities.Remove (cityToRemove);
                        }
                    }
                }
            }
            await m_db.SaveChangesAsync();

            await Add_ManyToMany_ModeStudyCity(teacher, existsT.Id);
        }

        private async Task
        Update_ManyToMany_Languges(TeacherDTO teacher, TeacherDTO existsT)
        {
            foreach (var language in existsT.Languages)
            {
                var languageToRemove = new TeacherLanguage(existsT.Id, language.Id);
                m_db.TeacherLanguages.Remove (languageToRemove);
            }
            await m_db.SaveChangesAsync();
            await Add_ManyToMany_Language(teacher, existsT.Id);
        }

        private async Task
        Update_ManyToMany_TeacherCourses(TeacherDTO teacher, TeacherDTO existsT)
        {
            foreach (var courseId in existsT.CourseIDs)
            {
                var CourseToRemove = new TeacherCourse(existsT.Id, courseId);
                m_db.TeacherCourses.Remove (CourseToRemove);
            }
            await m_db.SaveChangesAsync();
            await Add_ManyToMany_TeacherCourses(teacher, existsT.Id);
        }

        private async Task<bool>
        Add_ManyToMany_TeacherCourses(TeacherDTO teacher, int id)
        {
            foreach (var courseId in teacher.CourseIDs)
            {
                var teacherCourses = new TeacherCourse(id, courseId);
                await m_db.TeacherCourses.AddAsync(teacherCourses);
            }
            int changes = await m_db.SaveChangesAsync();
            return changes != 0;
        }

        private async Task<bool>
        Add_ManyToMany_ModeStudyCity(TeacherDTO teacher, int id)
        {
            int[] modeStudyIDs = teacher.ModeStudyIDs;
            int changes = 0;
            bool enter = true; //enter to avoid duplicate add for mode frontally
            for (int i = 0; i < modeStudyIDs.Length; i++)
            {
                if (modeStudyIDs[i] == ModeStudiesId.Online)
                {
                    var modeStudy_City =
                        new ModeStudy_City(1, ModeStudiesId.Online, id);
                    await m_db.ModeStudy_Cities.AddAsync(modeStudy_City);
                }
                if (
                    (modeStudyIDs[i] == ModeStudiesId.Frontally) && teacher.Cities != null &&
                    teacher.Cities.Length > 0 &&
                    enter
                )
                {
                    enter = false;

                    //if (teacher.CityIDs != null)
                    //{
                    foreach (City cityId in teacher.Cities)
                    {
                        if (cityId.Id != 1)
                        {
                            var modeStudy_City =
                                new ModeStudy_City(cityId.Id,
                                    ModeStudiesId.Frontally,
                                    id);
                            await m_db
                                .ModeStudy_Cities
                                .AddAsync(modeStudy_City);
                        }
                    }
                    //}
                }
            }
            changes = await m_db.SaveChangesAsync();
            return changes != 0;
        }

        private async Task<bool>
        Add_ManyToMany_Language(TeacherDTO teacher, int id)
        {
            foreach (var language in teacher.Languages)
            {
                var teacherLanguges = new TeacherLanguage(id, language.Id);
                await m_db.TeacherLanguages.AddAsync(teacherLanguges);
            }
            int change = await m_db.SaveChangesAsync();
            return change != 0;
        }
    }
}

/*public class StudentComparer : IEqualityComparer<TeacherDTO>
{
    public bool Equals([AllowNull] TeacherDTO x, [AllowNull] TeacherDTO y)
    {
        if (x.Id == y.Id || x.AlumnusId == y.AlumnusId)
            return true;

        return false;
    }

    public int GetHashCode([DisallowNull] TeacherDTO obj)
    {
        return obj.AlumnusId.GetHashCode();
    }
}*/
