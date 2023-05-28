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
using OrtAlumniWeb.AlumniOrtServer.Data.DTO;
using AlumniOrtServer.Extensions;

namespace AlumniOrtServer.Services
{
  public class TeacherService : ITeacherService
  {
    private readonly AlumniDBContext m_db;

    public TeacherService(AlumniDBContext db)
    {
      m_db = db;
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
    public async Task<ResponseDTO> DeleteLogo(int alumnusId)
    {
      try
      {
        TeacherDTO teacher = await Get(alumnusId);
        if (teacher == null)
        {
          return new ResponseDTO()
          {
            StatusText = "this object not exists",
            Status = StatusCODE.Faild
          };
        }

        var existingLogo = teacher.Logo;
        if (existingLogo != null)
        {
          m_db.Entry(existingLogo).State = EntityState.Detached;
          m_db.TeacherLogo.Remove(new TeacherLogo { Id = teacher.Logo.Id, TeacherId = teacher.Id });
        }

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
      catch (Exception e)
      {
        return new ResponseDTO()
        {
          Status = StatusCODE.Error,
          StatusText = $"Erorrs in service"
        };
      }

    }

    public async Task<ResponseDTO> AddLogo(IFormFileCollection logoFiles, int alumnusId)
    {


      TeacherLogo logo = new TeacherLogo();
      int c = 0;
      if (logoFiles.Count > 0)
      {
        var file = logoFiles.First();

        if (file.Length > 0)
        {
          TeacherDTO teacher = await Get(alumnusId);
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
                TeacherId = teacher.Id,
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
      if (c > 0)
      {
        return new ResponseDTO() { Status = StatusCODE.Success, body = logo };
      }
      return new ResponseDTO() { Status = StatusCODE.Faild };


    }
    public async Task<ResponseDTO> Add(TeacherDTO teacher)
    {
      Teacher TeacherFromDB =
          new Teacher(0,
              teacher.MailForStudy,
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
      bool objectsCreated = false;
      if (teacher.Languages != null)
      {
        objectsCreated =
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
      if (!objectsCreated && teacher.Courses.Length > 0)
      {
        //await Delete(TeacherFromDB.Id);
        response.Status = StatusCODE.Warning;
        response.StatusText += "\nCourses in Teacher NO Adedd";
        //return response;
      }

      if (response.StatusText == "") response.Status = StatusCODE.Success;

      return response;
    }

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

    public async Task<List<TeacherDTO>> GetTeachersByCourse(int Course_StudyProgramId, int pageIndex, int pageSize)
    {
      try
      {
        var teachers = await m_db.Teachers
            .Where(t => t.TeacherCourses.Any(tc => tc.Course_StudyProgramId == Course_StudyProgramId))
            .OrderByDescending(t => t.Id)
            .Skip((pageIndex - 1) * pageSize)
            .Take(pageSize)
            .Select(t => new TeacherDTO()
            {
              Id = t.Id,
              MailForStudy = t.MailForStudy,
              Logo = t.Logo,
              Rate = t.Rate,
              Description = t.Description,
              AlumnusId = t.AlumnusId,
              Languages = t.TeacherLanguages.Select(tl => new LanguageDTO { Id = tl.Language.Id, Name = tl.Language.Name }).ToArray(),
              Cities = t.ModeStudy_Cities.Select(msc => new CityDTO
              {
                Id = msc.City.Id,
                Name = msc.City.Name
              }).ToArray(),
              Courses = t.TeacherCourses
                                .Select(cs => new Course_StudyProgramDTO
                                {
                                  Id = cs.Course_StudyProgram.Id,
                                  StudyProgramId = cs.Course_StudyProgram.StudyProgramId,
                                  Name = cs.Course_StudyProgram.Name
                                })
                                .ToArray(),
              ModeStudyIDs = t.ModeStudy_Cities.Select(msc => msc.ModeStudyId).ToArray(),

              Alumanus = new AlumnusDTO
              {
                //Id = t.Alumanus.Id,
                //Mail = t.Alumanus.Mail,
                FirstName = t.Alumanus.FirstName,
                LastName = t.Alumanus.LastName,
                //Password = MD5Service.Decrypt(t.Alumanus.Password),
                Phone = t.Alumanus.Phone,
                //CardId = t.Alumanus.CardId,
                //DateOfBirth = t.Alumanus.DateOfBirth,
                //StudyFinishYear = t.Alumanus.StudyFinishYear,
                //StudyStartYear = t.Alumanus.StudyStartYear,
                College = new CollegeDTO
                {
                  Id = t.Alumanus.College.Id,
                  Name = t.Alumanus.College.Name
                },
                StudyProgram = new StudyProgramDTO
                {
                  Id = t.Alumanus.StudyProgram.Id,
                  Name = t.Alumanus.StudyProgram.Name
                },
                City = new CityDTO
                {
                  Id = t.Alumanus.City.Id,
                  Name = t.Alumanus.City.Name
                },
                //Linkedin = t.Alumanus.Linkedin,
                //WorkPlace = t.Alumanus.WorkPlace,
                //TeacherId = t.Alumanus.Id,


              }
            }).ToListAsync();

        return teachers;
      }
      catch
      {
        throw;
      }
    }
    public async Task<List<TeacherDTO>> GetTeachersByStudyprogram(int studyProgramId, int pageIndex, int pageSize)
    {
      try
      {
        var teachers = await m_db.Teachers
            .Where(t => t.TeacherCourses.Any(tc => tc.Course_StudyProgram.StudyProgramId == studyProgramId))
            .OrderByDescending(t => t.Id)
            .Skip((pageIndex - 1) * pageSize)
            .Take(pageSize)
            .Select(t => new TeacherDTO()
            {
              Id = t.Id,
              MailForStudy = t.MailForStudy,
              Logo = t.Logo,
              Rate = t.Rate,
              Description = t.Description,
              AlumnusId = t.AlumnusId,
              Languages = t.TeacherLanguages.Select(tl => new LanguageDTO { Id = tl.Language.Id, Name = tl.Language.Name }).ToArray(),
              Cities = t.ModeStudy_Cities.Select(msc => new CityDTO
              {
                Id = msc.City.Id,
                Name = msc.City.Name
              }).ToArray(),
              Courses = t.TeacherCourses
                                .Select(cs => new Course_StudyProgramDTO
                                {
                                  Id = cs.Course_StudyProgram.Id,
                                  StudyProgramId = cs.Course_StudyProgram.StudyProgramId,
                                  Name = cs.Course_StudyProgram.Name
                                })
                                .ToArray(),
              ModeStudyIDs = t.ModeStudy_Cities.Select(msc => msc.ModeStudyId).ToArray(),

              Alumanus = new AlumnusDTO
              {
                //Id = t.Alumanus.Id,
                //Mail = t.Alumanus.Mail,
                FirstName = t.Alumanus.FirstName,
                LastName = t.Alumanus.LastName,
                //Password = MD5Service.Decrypt(t.Alumanus.Password),
                Phone = t.Alumanus.Phone,
                //CardId = t.Alumanus.CardId,
                //DateOfBirth = t.Alumanus.DateOfBirth,
                //StudyFinishYear = t.Alumanus.StudyFinishYear,
                //StudyStartYear = t.Alumanus.StudyStartYear,
                College = new CollegeDTO
                {
                  Id = t.Alumanus.College.Id,
                  Name = t.Alumanus.College.Name
                },
                StudyProgram = new StudyProgramDTO
                {
                  Id = t.Alumanus.StudyProgram.Id,
                  Name = t.Alumanus.StudyProgram.Name
                },
                City = new CityDTO
                {
                  Id = t.Alumanus.City.Id,
                  Name = t.Alumanus.City.Name
                },
                //Linkedin = t.Alumanus.Linkedin,
                //WorkPlace = t.Alumanus.WorkPlace,
                //TeacherId = t.Alumanus.Id,


              }
            }).ToListAsync();

        return teachers;
      }
      catch
      {
        throw;
      }
    }

    public async Task<List<TeacherDTO>> SearchTeachers(SearchRequestDTO searchRequest)
    {
      try
      {
        var query = m_db.Teachers.AsQueryable();

        if (searchRequest.StudyProgram != null)
        {
          query = query.Where(t => t.Alumanus.StudyProgramId == searchRequest.StudyProgram.Id);
        }

        if (searchRequest.Courses != null && searchRequest.Courses.Length > 0)
        {
          query = query.Where(t => t.TeacherCourses.Any(tc => searchRequest.Courses.Select(c => c.Id).Contains(tc.Course_StudyProgramId)));
        }


        // Considering the logic of Modestudyids and Cities
        if (searchRequest.ModeStudyIds != null && searchRequest.ModeStudyIds.Length > 0)
        {
          // If "Frontally" is received, we should also check cities
          if (searchRequest.ModeStudyIds.Contains(ModeStudiesId.Frontally))
          {
            query = query.Where(t => t.ModeStudy_Cities.Any(mc => searchRequest.ModeStudyIds.Contains(mc.ModeStudyId)));
            if (searchRequest.Cities != null && searchRequest.Cities.Length > 0)
              query = query.Where(t => t.ModeStudy_Cities.Any(mc => searchRequest.Cities.Select(c => c.Id).Contains(mc.CityId)));
          }
          // If only "Online" is received, then cities are not checked
          else if (searchRequest.ModeStudyIds.Contains(ModeStudiesId.Online))
          {
            query = query.Where(t => t.ModeStudy_Cities.Any(mc => mc.ModeStudyId == ModeStudiesId.Online));
          }
        }


        // Apply pagination
        var teachers = await query
             .Where(t => t != null)
            .OrderByDescending(t => t.Id)
            .Skip((searchRequest.PageIndex - 1) * searchRequest.PageSize)
            .Take(searchRequest.PageSize)
            .Select(t => new TeacherDTO()
            {
              Id = t.Id,
              MailForStudy = t.MailForStudy,
              Logo = t.Logo,
              Rate = t.Rate,
              Description = t.Description,
              AlumnusId = t.AlumnusId,
              Languages = t.TeacherLanguages.Select(tl => new LanguageDTO { Id = tl.Language.Id, Name = tl.Language.Name }).ToArray(),
              Cities = t.ModeStudy_Cities.Select(msc => new CityDTO
              {
                Id = msc.City.Id,
                Name = msc.City.Name
              }).ToArray(),
              Courses = t.TeacherCourses
                                .Select(cs => new Course_StudyProgramDTO
                                {
                                  Id = cs.Course_StudyProgram.Id,
                                  StudyProgramId = cs.Course_StudyProgram.StudyProgramId,
                                  Name = cs.Course_StudyProgram.Name
                                })
                                .ToArray(),
              ModeStudyIDs = t.ModeStudy_Cities.Select(msc => msc.ModeStudyId).ToArray(),

              Alumanus = new AlumnusDTO
              {
                FirstName = t.Alumanus.FirstName,
                LastName = t.Alumanus.LastName,
                Phone = t.Alumanus.Phone,
                College = new CollegeDTO
                {
                  Id = t.Alumanus.College.Id,
                  Name = t.Alumanus.College.Name
                },
                StudyProgram = new StudyProgramDTO
                {
                  Id = t.Alumanus.StudyProgram.Id,
                  Name = t.Alumanus.StudyProgram.Name
                },
                City = new CityDTO
                {
                  Id = t.Alumanus.City.Id,
                  Name = t.Alumanus.City.Name
                },
              }
            })
            .ToListAsync();

        if (teachers != null && teachers.Count() > 0)
        {
          foreach (var teacher in teachers)
          {
            if (teacher.ModeStudyIDs != null && teacher.ModeStudyIDs.Length > 1)
            {
              teacher.ModeStudyIDs = teacher.ModeStudyIDs.Distinct().ToArray();
            }
          }
        }

        return teachers;
      }
      catch
      {
        throw;
      }
    }
    public async Task<List<TeacherDTO>> GetLastTeachers(PaginationFilterDTO paginationRequest)
    {
      try
      {
        // Apply pagination
        var teachers = await m_db.Teachers
             .Where(t => t != null)
            .OrderByDescending(t => t.Id)
            .Skip((paginationRequest.PageIndex - 1) * paginationRequest.PageSize)
            .Take(paginationRequest.PageSize)
            .Select(t => new TeacherDTO()
            {
              Id = t.Id,
              MailForStudy = t.MailForStudy,
              Logo = t.Logo,
              Rate = t.Rate,
              Description = t.Description,
              AlumnusId = t.AlumnusId,
              Languages = t.TeacherLanguages.Select(tl => new LanguageDTO { Id = tl.Language.Id, Name = tl.Language.Name }).ToArray(),
              Cities = t.ModeStudy_Cities.Select(msc => new CityDTO
              {
                Id = msc.City.Id,
                Name = msc.City.Name
              }).ToArray(),
              Courses = t.TeacherCourses
                                .Select(cs => new Course_StudyProgramDTO
                                {
                                  Id = cs.Course_StudyProgram.Id,
                                  StudyProgramId = cs.Course_StudyProgram.StudyProgramId,
                                  Name = cs.Course_StudyProgram.Name
                                })
                                .ToArray(),
              ModeStudyIDs = t.ModeStudy_Cities.Select(msc => msc.ModeStudyId).ToArray(),

              Alumanus = new AlumnusDTO
              {
                FirstName = t.Alumanus.FirstName,
                LastName = t.Alumanus.LastName,
                Phone = t.Alumanus.Phone,
                College = new CollegeDTO
                {
                  Id = t.Alumanus.College.Id,
                  Name = t.Alumanus.College.Name
                },
                StudyProgram = new StudyProgramDTO
                {
                  Id = t.Alumanus.StudyProgram.Id,
                  Name = t.Alumanus.StudyProgram.Name
                },
                City = new CityDTO
                {
                  Id = t.Alumanus.City.Id,
                  Name = t.Alumanus.City.Name
                },
              }
            })
            .ToListAsync();

        if (teachers != null && teachers.Count() > 0)
        {
          foreach (var teacher in teachers)
          {
            if (teacher.ModeStudyIDs != null && teacher.ModeStudyIDs.Length > 1)
            {
              teacher.ModeStudyIDs = teacher.ModeStudyIDs.Distinct().ToArray();
            }
          }
        }

        return teachers;
      }
      catch
      {
        throw;
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
                    Logo = t.Logo,
                    MailForStudy = t.MailForStudy,
                    Id = t.Id
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
                      Courses =
                            t
                                .TeacherCourses
                                .Select(cs => new Course_StudyProgramDTO
                                {
                                  Id = cs.Course_StudyProgram.Id,
                                  StudyProgramId = cs.Course_StudyProgram.StudyProgramId,
                                  Name = cs.Course_StudyProgram.Name
                                })
                                .ToArray()
                    })
                .FirstOrDefaultAsync(i => i.AlumnusId == id);
        result.Courses = teacher1.Courses;

        TeacherDTO teacher2 =
            await m_db
                .Teachers
                .Select(t =>
                    new TeacherDTO()
                    {
                      AlumnusId = t.AlumnusId,
                      Languages =
                            t
                                .TeacherLanguages.Select(tl => new LanguageDTO { Id = tl.Language.Id, Name = tl.Language.Name }).ToArray()
                    })
                .FirstOrDefaultAsync(i => i.AlumnusId == id);

        result.Languages = teacher2.Languages;


        //for mode Study field
        TeacherDTO teacherEntity = await m_db.Teachers
            .Where(t => t.AlumnusId == id)
            .Select(t => new TeacherDTO
            {
              AlumnusId = t.AlumnusId,
              ModeStudyIDs = t.ModeStudy_Cities.Select(msc => msc.ModeStudyId).ToArray(),
              Cities = t.ModeStudy_Cities.Where(ms => ms.ModeStudyId == 1).Select(msc => new CityDTO
              {
                Id = msc.City.Id,
                Name = msc.City.Name
              }).ToArray(),
            })
            .FirstOrDefaultAsync();
        result.ModeStudyIDs = teacherEntity.ModeStudyIDs.Distinct().ToArray();
        result.Cities = teacherEntity.Cities;


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
                    Logo = t.Logo,
                    MailForStudy = t.MailForStudy,
                    Id = t.Id
                  })
              .ToListAsync();

      List<TeacherDTO> Cteacher = await GetAllCourses();

      List<TeacherDTO> Lteacher = await GetAllLanguages();

      List<TeacherDTO> Mteacher = await GetAllModesWithCity();

      for (int i = 0; i < teacher.Count; i++)
      {
        if (
            teacher[i].Id == Cteacher[i].Id &&
            teacher[i].Id == Lteacher[i].Id &&
            teacher[i].Id == Mteacher[i].Id
        )
        {
          teacher[i].Courses = Cteacher[i].Courses;
          teacher[i].Languages = Lteacher[i].Languages;
          teacher[i].ModeStudyIDs = Mteacher[i].ModeStudyIDs;
          teacher[i].Cities = Mteacher[i].Cities;
        }
      }
      return teacher;
    }

    public async Task<List<TeacherDTO>> GetAllCourses()
    {
      List<TeacherDTO> teacher =
          await m_db
              .Teachers
              .Select(t =>
                  new TeacherDTO()
                  {
                    AlumnusId = t.AlumnusId,
                    Id = t.Id,
                    Courses =
                            t
                                .TeacherCourses
                                .Select(cs => new Course_StudyProgramDTO
                                {
                                  Id = cs.Course_StudyProgram.Id,
                                  StudyProgramId = cs.Course_StudyProgram.StudyProgramId,
                                  Name = cs.Course_StudyProgram.Name
                                })
                                .ToArray()
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
                          t.TeacherLanguages.Select(tl => new LanguageDTO { Id = tl.Language.Id, Name = tl.Language.Name }).ToArray()
                  })
              .ToListAsync();

      return teacher;
    }

    public async Task<List<TeacherDTO>> GetAllModesWithCity()
    {
      var teacherEntities = await m_db.Teachers
          .Include(t => t.ModeStudy_Cities)
          .ThenInclude(ms => ms.City)
          .ToListAsync();

      var teachers = teacherEntities.Select(t => new TeacherDTO
      {
        AlumnusId = t.AlumnusId,
        Id = t.Id,
        Cities = t.ModeStudy_Cities.Where(ms => ms.ModeStudyId == 1).Select(msc => new CityDTO
        {
          Id = msc.City.Id,
          Name = msc.City.Name
        }).ToArray(),
        ModeStudyIDs = t.ModeStudy_Cities.Select(ms => ms.ModeStudyId).Distinct().ToArray(),
      }).ToList();

      return teachers;
    }




    public async Task<ResponseDTO> Update(int id, TeacherDTO teacher)
    {
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

    }

    private async Task
    Update_ManyToMany_ModeStudy(TeacherDTO teacher, TeacherDTO existsT)
    {
      foreach (var modeFront in existsT.ModeStudyIDs)
      {
        if (modeFront == ModeStudiesId.Online)
        {
          var modeOnlineToRemove = m_db.ModeStudy_Cities.SingleOrDefault(m => m.ModeStudyId == ModeStudiesId.Online && m.CityId == 1 && m.TeacherId == existsT.Id);

          if (modeOnlineToRemove != null)
          {
            m_db.ModeStudy_Cities.Remove(modeOnlineToRemove);
          }
        }
        else if (
            modeFront == ModeStudiesId.Frontally &&
            existsT.Cities.Length > 0
        )
        {
          foreach (var cityId in existsT.Cities)
          {
            if (cityId.Id != 1)
            {
              var cityToRemove = m_db.ModeStudy_Cities.SingleOrDefault(m => m.ModeStudyId == modeFront && m.CityId == cityId.Id && m.TeacherId == existsT.Id);

              if (cityToRemove != null)
              {
                m_db.ModeStudy_Cities.Remove(cityToRemove);
              }
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
        m_db.TeacherLanguages.Remove(languageToRemove);
      }
      await m_db.SaveChangesAsync();
      await Add_ManyToMany_Language(teacher, existsT.Id);
    }

    private async Task
    Update_ManyToMany_TeacherCourses(TeacherDTO teacher, TeacherDTO existsT)
    {
      foreach (var course in existsT.Courses)
      {
        var CourseToRemove = new TeacherCourse(existsT.Id, course.Id);
        m_db.TeacherCourses.Remove(CourseToRemove);
      }
      await m_db.SaveChangesAsync();
      await Add_ManyToMany_TeacherCourses(teacher, existsT.Id);
    }

    private async Task<bool>
    Add_ManyToMany_TeacherCourses(TeacherDTO teacher, int id)
    {
      foreach (var course in teacher.Courses)
      {
        var teacherCourses = new TeacherCourse(id, course.Id);
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
      for (int i = 0; i < modeStudyIDs.Length; i++)
      {
        if (modeStudyIDs[i] == ModeStudiesId.Online)
        {
          var modeStudy_City =
              new ModeStudy_City(1, ModeStudiesId.Online, id);
          await m_db.ModeStudy_Cities.AddAsync(modeStudy_City);
        }
        else if (
            (modeStudyIDs[i] == ModeStudiesId.Frontally) && teacher.Cities != null &&
            teacher.Cities.Length > 0
        )
        {
          foreach (CityDTO cityId in teacher.Cities)
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