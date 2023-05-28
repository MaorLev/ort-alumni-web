using AlumniOrtServer.Context;
using AlumniOrtServer.Data.DTO;
using AlumniOrtServer.Data.Entities;
using AlumniOrtServer.DTO;
using AlumniOrtServer.Extensions;
using AlumniOrtServer.Models;
using AlumniOrtServer.Models.AlumnusModel;
using Microsoft.EntityFrameworkCore;
using OrtAlumniWeb.AlumniOrtServer.Data.DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using static AlumniOrtServer.Extensions.Constants;

namespace AlumniOrtServer.Services
{
  public class AlumnusService : IAlumnusService
  {
    private readonly AlumniDBContext m_db;
    private readonly IClaimService claim;
    public AlumnusService(AlumniDBContext db, IClaimService claim)
    {
      m_db = db;
      this.claim = claim;
    }

    public async Task<List<AlumnusDTO>> GetLastTeachers(int pageIndex, int pageSize)
    {
      try
      {
        var teachers = await m_db.Alumni
            .Where(a => a.teacher != null)
            .OrderByDescending(a => a.teacher.Id)
            .Skip((pageIndex - 1) * pageSize)
            .Take(pageSize)
            .Select(a => new AlumnusDTO()
            {
              FirstName = a.FirstName,
              LastName = a.LastName,
              Phone = a.Phone,
              College = new CollegeDTO
              {
                Id = a.College.Id,
                Name = a.College.Name
              },
              StudyProgram = new StudyProgramDTO
              {
                Id = a.StudyProgram.Id,
                Name = a.StudyProgram.Name
              },
              City = new CityDTO
              {
                Id = a.City.Id,
                Name = a.City.Name
              },

              Teacher = new TeacherDTO
              {
                Id = a.teacher.Id,
                MailForStudy = a.teacher.MailForStudy,
                Logo = a.teacher.Logo,
                Rate = a.teacher.Rate,
                Description = a.teacher.Description,
                AlumnusId = a.teacher.AlumnusId,
                Languages = a.teacher.TeacherLanguages.Select(tl => new LanguageDTO { Id = tl.Language.Id, Name = tl.Language.Name }).ToArray(),
                Cities = a.teacher.ModeStudy_Cities.Select(msc => new CityDTO
                {
                  Id = msc.City.Id,
                  Name = msc.City.Name
                }).ToArray(),
                Courses = a.teacher.TeacherCourses
                                .Select(cs => new Course_StudyProgramDTO
                                {
                                  Id = cs.Course_StudyProgram.Id,
                                  StudyProgramId = cs.Course_StudyProgram.StudyProgramId,
                                  Name = cs.Course_StudyProgram.Name
                                })
                                .ToArray(),
                ModeStudyIDs = a.teacher.ModeStudy_Cities.Select(msc => msc.ModeStudyId).ToArray()
              }
            }).ToListAsync();

        return teachers;
      }
      catch
      {
        throw;
      }
    }


    public async Task<ResponseDTO> Add(AlumnusDTO alumnus)
    {
      Role role = await m_db.Role.Where(x => x.Id == RolesId.Alumnus).FirstOrDefaultAsync();

      Alumnus AlumnusFromDB = new Alumnus(0, alumnus.Mail, alumnus.FirstName
         , alumnus.LastName, MD5Service.Encrypt(alumnus.Password), alumnus.Phone, alumnus.City.Id, alumnus.College.Id
         , alumnus.StudyProgram.Id, alumnus.CardId, alumnus.StudyFinishYear, alumnus.Linkedin, alumnus.WorkPlace, RolesId.Alumnus, alumnus.StudyStartYear, alumnus.DateOfBirth);

      await m_db.Alumni.AddAsync(AlumnusFromDB);

      int c = await m_db.SaveChangesAsync();

      ResponseDTO response = new ResponseDTO();
      if (c > 0)
      {
        //idAlumnus for new teacher
        response.userId = AlumnusFromDB.Id;

        bool Affected = await claim.PersistClaimsForUser(AlumnusFromDB);
        if (Affected)
        {
          response.Status = StatusCODE.Success;
          return response;
        }
        response.Status = StatusCODE.Warning;
        response.StatusText = "Alumnus adedd BUT presist Not Apply";
        return response;
      }
      response.Status = StatusCODE.Faild;
      return response;

    }



    public async Task<AlumnusDTO> Get(int id)
    {
      try
      {
        AlumnusDTO alumnus = await m_db.Alumni.Select(a => new AlumnusDTO()
        {
          CardId = a.CardId,
          College = new CollegeDTO
          {
            Id = a.College.Id,
            Name = a.College.Name
          },
          StudyProgram = new StudyProgramDTO
          {
            Id = a.StudyProgram.Id,
            Name = a.StudyProgram.Name
          },
          City = new CityDTO
          {
            Id = a.City.Id,
            Name = a.City.Name
          },
          DateOfBirth = a.DateOfBirth,
          FirstName = a.FirstName,
          Id = a.Id,
          LastName = a.LastName,
          Mail = a.Mail,
          Password = MD5Service.Decrypt(a.Password),
          Phone = a.Phone,
          StudyFinishYear = a.StudyFinishYear,
          StudyStartYear = a.StudyStartYear,
          Linkedin = a.Linkedin,
          WorkPlace = a.WorkPlace,
          TeacherId = Convert.ToInt32((a.teacher.Id).ToString() ?? (0).ToString())

        }).FirstOrDefaultAsync(i => i.Id == id);
        return alumnus;
      }
      catch
      {

        throw;
      }
    }

    public async Task<List<AlumnusDTO>> GetAll()
    {
      try
      {
        var alumnui = await m_db.Alumni.Select(a => new AlumnusDTO()
        {
          CardId = a.CardId,
          College = new CollegeDTO
          {
            Id = a.College.Id,
            Name = a.College.Name
          },
          StudyProgram = new StudyProgramDTO
          {
            Id = a.StudyProgram.Id,
            Name = a.StudyProgram.Name
          },
          City = new CityDTO
          {
            Id = a.City.Id,
            Name = a.City.Name
          },
          DateOfBirth = a.DateOfBirth,
          FirstName = a.FirstName,
          Id = a.Id,
          LastName = a.LastName,
          Mail = a.Mail,
          Password = a.Password,
          Phone = a.Phone,
          StudyFinishYear = a.StudyFinishYear,
          StudyStartYear = a.StudyStartYear,
          Linkedin = a.Linkedin,
          WorkPlace = a.WorkPlace,

          TeacherId = Convert.ToInt32((a.teacher.Id).ToString() ?? (0).ToString())

        }).ToListAsync();
        return alumnui;
      }
      catch
      {

        throw;
      }
    }

    public async Task<ResponseDTO> Update(int id, AlumnusDTO alumnus)
    {
      try
      {
        AlumnusDTO A = await Get(id);
        Alumnus AlumnusFromDB = new Alumnus();
        if (A == null)
        {
          return new ResponseDTO()
          {
            Status = StatusCODE.Error,
            StatusText = $"Item with id {id} not found in DB"
          };
        }

        AlumnusFromDB.Mail = A.Mail;
        AlumnusFromDB.FirstName = alumnus.FirstName ?? A.FirstName;
        AlumnusFromDB.LastName = alumnus.LastName ?? A.LastName;
        AlumnusFromDB.Password = MD5Service.Encrypt(alumnus.Password) ?? A.Password;
        AlumnusFromDB.Phone = alumnus.Phone ?? A.Phone;
        if (alumnus.City != null)
          AlumnusFromDB.CityId = Convert.ToInt32(alumnus.City.Id.ToString());
        else AlumnusFromDB.CityId = Convert.ToInt32((A.City.Id).ToString());

        if (alumnus.College != null)
          AlumnusFromDB.CollegeId = Convert.ToInt32(alumnus.College.Id.ToString());
        else AlumnusFromDB.CollegeId = Convert.ToInt32((A.College.Id).ToString());


        if (alumnus.StudyProgram != null)
          AlumnusFromDB.StudyProgramId = Convert.ToInt32(alumnus.StudyProgram.Id.ToString());
        else AlumnusFromDB.StudyProgramId = Convert.ToInt32((A.StudyProgram.Id).ToString());

        AlumnusFromDB.CardId = alumnus.CardId ?? A.CardId;
        AlumnusFromDB.StudyFinishYear = alumnus.StudyFinishYear ?? A.StudyFinishYear;
        AlumnusFromDB.Id = Convert.ToInt32(alumnus.Id.ToString() ?? A.Id.ToString());
        AlumnusFromDB.DateOfBirth = Convert.ToDateTime(alumnus.DateOfBirth.ToString() ?? A.DateOfBirth.ToString());
        AlumnusFromDB.WorkPlace = alumnus.WorkPlace ?? A.WorkPlace;
        AlumnusFromDB.Linkedin = alumnus.Linkedin ?? A.Linkedin;
        AlumnusFromDB.StudyStartYear = alumnus.StudyStartYear ?? A.StudyStartYear;
        AlumnusFromDB.RoleId = RolesId.Alumnus;

        m_db.Entry(AlumnusFromDB).State = EntityState.Modified;

        int c = await m_db.SaveChangesAsync();
        ResponseDTO response = new ResponseDTO();
        if (c > 0)
        {
          response.StatusText = c + " Alumni affected";
          response.Status = StatusCODE.Success;
        }
        else
        {
          response.Status = StatusCODE.Faild;
          response.StatusText = "faild no Alumni affacted";
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
    public async Task<ResponseDTO> Delete(int id)
    {
      try
      {
        AlumnusDTO alumnus = await Get(id);

        if (alumnus == null)
        {
          return new ResponseDTO() { StatusText = "this object not exists", Status = StatusCODE.Faild };
        }
        if (alumnus.TeacherId != 0)
        {
          m_db.Teachers.Remove(new Teacher { Id = alumnus.TeacherId });
        }
        m_db.Alumni.Remove(new Alumnus { Id = alumnus.Id });

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

    public async Task<bool> Validation(string emai)
    {
      if (await m_db.Alumni.Where(i => i.Mail == emai).FirstOrDefaultAsync() != null)
      {
        return true;
      }
      return false;
    }
  }
}