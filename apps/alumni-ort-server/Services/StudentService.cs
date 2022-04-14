using AlumniOrtServer.Context;
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
               , student.LastName, MD5Service.Encrypt(student.Password), student.Phone, student.City.Id, student.CollegeId
               , student.StudyProgramId, student.CardId,student.DateOfBirth, student.StudyStartYear, RolesId.Student);

                await m_db.Students.AddAsync(StudentFromDB);

                int c = await m_db.SaveChangesAsync();

            ResponseDTO response = new ResponseDTO();
            if (c > 0)
            {
                bool Affected = await claim.PersistClaimsForUser(StudentFromDB);
                if (Affected)
                {
                    response.Status = StatusCode.Success;
                    return response;
                }
                response.Status = StatusCode.Warning;
                response.StatusText = "student adedd BUT presist Not Apply";
                return response;
            }
            response.Status = StatusCode.Faild;
            return response;

        }

/*        private bool PersistClaimsForStudent(Student persistStudent)
        {
            Claim name = new Claim//מייל נראה הגיוני יותר  אבל למה שם דווקא ?
            {
                Type = "Name",
                Value = persistStudent.FirstName,
                UserId = persistStudent.Id
            };

            Claim role = new Claim
            {
                Type = "Role",
                //Value = persistAdmin.RoleId.ToString(),
                Value = persistStudent.Role.Name,//probably better true
                UserId = persistStudent.Id
            };

            m_db.Claim.Add(name);//למה להשתמש בשניים ?
            m_db.Claim.Add(role);

            int c = m_db.SaveChanges();
            return c > 1;
        }*/

        public async Task<List<StudentDTO>> GetAll()
        {


            try
            {
                var students = await m_db.Students.Select(s => new StudentDTO()
                {
                    CardId = s.CardId,
                    City = s.City,
                    CollegeName = s.College.Name,
                    DateOfBirth = s.DateOfBirth,
                    FirstName = s.FirstName,
                    LastName = s.LastName,
                    Id = s.Id,
                    Mail = s.Mail,
                    Password = s.Password,
                    Phone = s.Phone,
                    StudyProgramName = s.StudyProgram.Name,
                    StudyStartYear = s.StudyStartYear,
                    CollegeId = s.CollegeId,
                    StudyProgramId = s.StudyProgramId

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

            /*            Student res = from s1 in m_db.Student
                                  join u2 in m_db.User
                                      on s1.UserId equals u2.Id
                                  select new
                                  {
                                      Emp_IdCard = u2.Id,
                                      Emp_Salary = u2.Mail
                                  };*/


            //return m_db.Students.Where(i => i.Id == id).FirstOrDefault();
            try
            {
                StudentDTO student = await m_db.Students.Select(s => new StudentDTO()
                {
                    CardId = s.CardId,
                    City = s.City,
                    CollegeId = s.CollegeId,
                    CollegeName = s.College.Name,
                    DateOfBirth = s.DateOfBirth,
                    FirstName = s.FirstName,
                    Id = s.Id,
                    LastName = s.LastName,
                    Mail = s.Mail,
                    Password = MD5Service.Decrypt(s.Password),
                    Phone = s.Phone,
                    StudyProgramId = s.StudyProgramId,
                    StudyProgramName = s.StudyProgram.Name,
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
                        Status = StatusCode.Error,
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
                StudentFromDB.CollegeId = Convert.ToInt32(student.CollegeId.ToString() ?? originalStudent.CollegeId.ToString());
                StudentFromDB.StudyProgramId = Convert.ToInt32(student.StudyProgramId.ToString() ?? originalStudent.StudyProgramId.ToString());
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
                    response.Status = StatusCode.Success;
                }
                else
                {
                    response.Status = StatusCode.Faild;
                    response.StatusText = "faild no Student affacted";
                }
                return response;
            }
            catch 
            {

                return new ResponseDTO()
                {
                    Status = StatusCode.Error,
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
                    return new ResponseDTO() { StatusText = "this object not exists", Status = StatusCode.Faild };
                }

                m_db.Students.Remove(new Student { Id = student.Id });
                int c = await m_db.SaveChangesAsync();
                ResponseDTO response = new ResponseDTO();
                if (c > 0)
                {
                    response.StatusText = "Successfully object deleted";
                    response.Status = StatusCode.Success;
                }
                else
                {
                    response.Status = StatusCode.Error;
                }
                return response;
            }
            catch 
            {

                return new ResponseDTO()
                {
                    Status = StatusCode.Error,
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
