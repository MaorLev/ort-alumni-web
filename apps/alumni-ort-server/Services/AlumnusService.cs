using AlumniOrtServer.Context;
using AlumniOrtServer.Data.DTO;
using AlumniOrtServer.Data.Entities;
using AlumniOrtServer.DTO;
using AlumniOrtServer.Extensions;
using AlumniOrtServer.Models;
using AlumniOrtServer.Models.AlumnusModel;
using Microsoft.EntityFrameworkCore;
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
        public async Task<ResponseDTO> Add(AlumnusDTO alumnus)
        {
            Role role = await m_db.Role.Where(x => x.Id == RolesId.Alumnus).FirstOrDefaultAsync();

            Alumnus AlumnusFromDB = new Alumnus(0, alumnus.Mail, alumnus.FirstName
               , alumnus.LastName, MD5Service.Encrypt(alumnus.Password), alumnus.Phone, alumnus.City.Id, alumnus.College.Id
               , alumnus.StudyProgram.Id, alumnus.CardId, alumnus.StudyFinishYear,alumnus.Linkedin, alumnus.WorkPlace, RolesId.Alumnus,alumnus.StudyStartYear, alumnus.DateOfBirth);

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
                    City = a.City,
                    College = a.College,
                    DateOfBirth = a.DateOfBirth,
                    FirstName = a.FirstName,
                    Id = a.Id,
                    LastName = a.LastName,
                    Mail = a.Mail,
                    Password = MD5Service.Decrypt(a.Password),
                    Phone = a.Phone,
                    StudyProgram = a.StudyProgram,
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
        //for create alumnus
       

        public async Task<List<AlumnusDTO>> GetAll()
        {
            try
            {
                var alumnui = await m_db.Alumni.Select(a => new AlumnusDTO()
                {
                    CardId = a.CardId,
                    City = a.City,
                    College = a.College,
                    DateOfBirth = a.DateOfBirth,
                    FirstName = a.FirstName,
                    Id = a.Id,
                    LastName = a.LastName,
                    Mail = a.Mail,
                    Password = a.Password,
                    Phone = a.Phone,
                    StudyProgram = a.StudyProgram,
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
                }//checkkk it !!
                /*                else if (A.Password != MD5Service.Encrypt(alumnus.Password))
                                {
                                    return new ResponseDTO()
                                    {
                                        Status = StatusCode.Error,
                                        StatusText = $"Item {alumnus.FirstName} with SN {alumnus.Password} Not match to DB"
                                    };
                                }*/

                AlumnusFromDB.Mail = A.Mail;
                AlumnusFromDB.FirstName = alumnus.FirstName ?? A.FirstName;
                AlumnusFromDB.LastName = alumnus.LastName ?? A.LastName;
                AlumnusFromDB.Password = MD5Service.Encrypt(alumnus.Password) ?? A.Password;
                AlumnusFromDB.Phone = alumnus.Phone ?? A.Phone;
                AlumnusFromDB.CityId = Convert.ToInt32((alumnus.City.Id).ToString() ?? (A.City.Id).ToString());
                AlumnusFromDB.CollegeId = Convert.ToInt32(alumnus.College.Id.ToString() ?? A.College.Id.ToString());
                AlumnusFromDB.StudyProgramId = Convert.ToInt32(alumnus.StudyProgram.Id.ToString() ?? A.StudyProgram.Id.ToString());
                AlumnusFromDB.CardId = alumnus.CardId ?? A.CardId;
                AlumnusFromDB.StudyFinishYear = alumnus.StudyFinishYear ?? A.StudyFinishYear;
                AlumnusFromDB.Id = Convert.ToInt32(alumnus.Id.ToString() ?? A.Id.ToString());
                AlumnusFromDB.DateOfBirth =Convert.ToDateTime( alumnus.DateOfBirth.ToString() ?? A.DateOfBirth.ToString());
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
