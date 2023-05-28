using AlumniOrtServer.Context;
using AlumniOrtServer.Data.DTO;
using AlumniOrtServer.Data.Entities;
using AlumniOrtServer.DTO;
using AlumniOrtServer.Extensions;
using AlumniOrtServer.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using static AlumniOrtServer.Extensions.Constants;

namespace AlumniOrtServer.Services
{
  public class StudentService : IStudentService
  {
    private readonly AlumniDBContext m_db;
    private readonly IClaimService claim;
    public StudentService(AlumniDBContext db, IClaimService claim)
    {
      m_db = db;
      this.claim = claim;
    }
    public async Task<ResponseDTO> Add(StudentDTO student)
    {
      Role role = await m_db.Role.Where(x => x.Id == RolesId.Student).FirstOrDefaultAsync();

      Student StudentFromDB = new Student(0, student.Mail, student.FirstName
               , student.LastName, MD5Service.Encrypt(student.Password), student.Phone, student.City.Id, student.College.Id
               , student.StudyProgram.Id, student.CardId, student.DateOfBirth, student.StudyStartYear, RolesId.Student);

      await m_db.Students.AddAsync(StudentFromDB);

      int c = await m_db.SaveChangesAsync();

      ResponseDTO response = new ResponseDTO();
      if (c > 0)
      {
        bool Affected = await claim.PersistClaimsForUser(StudentFromDB);
        if (Affected)
        {
          response.Status = StatusCODE.Success;
          return response;
        }
        response.Status = StatusCODE.Warning;
        response.StatusText = "student adedd BUT presist Not Apply";
        return response;
      }
      response.Status = StatusCODE.Faild;
      return response;

    }

    public async Task<List<StudentDTO>> GetAll()
    {


      try
      {
        var students = await m_db.Students.Select(s => new StudentDTO()
        {
          CardId = s.CardId,
          City = s.City,
          College = s.College,
          //CollegeId = s.CollegeId,
          //CollegeName = s.College.Name,
          DateOfBirth = s.DateOfBirth,
          FirstName = s.FirstName,
          Id = s.Id,
          LastName = s.LastName,
          Mail = s.Mail,
          Password = MD5Service.Decrypt(s.Password),
          Phone = s.Phone,
          StudyProgram = s.StudyProgram,
          //StudyProgramId = s.StudyProgramId,
          //StudyProgramName = s.StudyProgram.Name,
          StudyStartYear = s.StudyStartYear

        }).ToListAsync();
        return students;
      }
      catch
      {

        throw;
      }
      //return m_db.Students.Include(a => a.City).Include(c => c.College).Include(s => s.StudyProgram).ToList();

    }

    public async Task<StudentDTO> GetStudent(int id)
    {
      try
      {
        StudentDTO student = await m_db.Students.Select(s => new StudentDTO()
        {
          CardId = s.CardId,
          City = s.City,
          College = s.College,
          //CollegeId = s.CollegeId,
          //CollegeName = s.College.Name,
          DateOfBirth = s.DateOfBirth,
          FirstName = s.FirstName,
          Id = s.Id,
          LastName = s.LastName,
          Mail = s.Mail,
          Password = MD5Service.Decrypt(s.Password),
          Phone = s.Phone,
          StudyProgram = s.StudyProgram,
          //StudyProgramId = s.StudyProgramId,
          //StudyProgramName = s.StudyProgram.Name,
          StudyStartYear = s.StudyStartYear

        }).FirstOrDefaultAsync(i => i.Id == id);
        return student;
      }
      catch
      {

        throw;
      }

    }

    public async Task<ResponseDTO> Update(int id, StudentDTO student)
    {
      try
      {
        StudentDTO originalStudent = await GetStudent(id);
        Student StudentFromDB = new Student();
        if (StudentFromDB == null)
        {
          return new ResponseDTO()
          {
            Status = StatusCODE.Error,
            StatusText = $"Item with id {id} not found in DB"
          };
        }//checkkk it !!
        /*                else if (StudentFromDB.Password != MD5Service.Encrypt(student.Password))
                        {
                            return new ResponseDTO()
                            {
                                Status = StatusCode.Error,
                                StatusText = $"Item {student.FirstName} with SN {student.Password} Not match to DB"
                            };
                        }*/

        StudentFromDB.Mail = originalStudent.Mail;
        StudentFromDB.FirstName = student.FirstName ?? originalStudent.FirstName;
        StudentFromDB.LastName = student.LastName ?? originalStudent.LastName;
        StudentFromDB.Password = MD5Service.Encrypt(student.Password) ?? originalStudent.Password;
        StudentFromDB.Phone = student.Phone ?? originalStudent.Phone;
        StudentFromDB.CityId = Convert.ToInt32((student.City.Id).ToString() ?? (originalStudent.City.Id).ToString());
        StudentFromDB.CollegeId = Convert.ToInt32(student.College.Id.ToString() ?? originalStudent.College.Id.ToString());
        StudentFromDB.StudyProgramId = Convert.ToInt32(student.StudyProgram.Id.ToString() ?? originalStudent.StudyProgram.Id.ToString());
        StudentFromDB.CardId = student.CardId ?? originalStudent.CardId;
        StudentFromDB.StudyStartYear = student.StudyStartYear ?? originalStudent.StudyStartYear;
        StudentFromDB.Id = Convert.ToInt32(student.Id.ToString() ?? originalStudent.Id.ToString());
        StudentFromDB.DateOfBirth = Convert.ToDateTime(student.DateOfBirth.ToString() ?? originalStudent.DateOfBirth.ToString());
        StudentFromDB.RoleId = RolesId.Student;


        m_db.Entry(StudentFromDB).State = EntityState.Modified;

        int c = await m_db.SaveChangesAsync();
        ResponseDTO response = new ResponseDTO();
        if (c > 0)
        {
          response.StatusText = c + " Students affected";
          response.Status = StatusCODE.Success;
        }
        else
        {
          response.Status = StatusCODE.Faild;
          response.StatusText = "faild no Student affacted";
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

    public async Task<ResponseDTO> DeleteStudent(int id)
    {
      try
      {
        StudentDTO student = await GetStudent(id);

        if (student == null)
        {
          return new ResponseDTO() { StatusText = "this object not exists", Status = StatusCODE.Faild };
        }

        m_db.Students.Remove(new Student { Id = student.Id });
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
      if (await m_db.Students.Where(i => i.Mail == emai).FirstOrDefaultAsync() != null)
      {
        return true;
      }
      return false;
    }
  }
}