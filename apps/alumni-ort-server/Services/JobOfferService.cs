using AlumniOrtServer.Context;
using AlumniOrtServer.Data.DTO;
using AlumniOrtServer.Data.Entities;
using AlumniOrtServer.DTO;
using AlumniOrtServer.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AlumniOrtServer.Services
{
    public class JobOfferService : IJobOfferService
    {
        private readonly AlumniDBContext m_db;
        public JobOfferService(AlumniDBContext MDB)
        {
            m_db = MDB;
        }

        public async Task<ResponseDTO> Add(JobOfferDTO jobOffer)
        {
            try
            {
                JobOffer JobOfferToDB = new JobOffer(0, jobOffer.TitleJob, jobOffer.MailCV, jobOffer.JobDescription, jobOffer.JobRequirements
                    , jobOffer.Publish, jobOffer.Phone,jobOffer.Logo, jobOffer.EmployerId);

                await m_db.JobOffers.AddAsync(JobOfferToDB);

                int c = await m_db.SaveChangesAsync();
                ResponseDTO response = new ResponseDTO();
                if (c == 0)
                {
                    response.Status = StatusCODE.Faild;
                    response.StatusText = "Teacher Not Created";
                    return response;
                }
                if (jobOffer.CityIDs.Length != 0 || jobOffer.StudyProgramIDs.Length != 0)
                {
                    bool objectsCreated = await Add_ManyToMany_Properties(jobOffer, JobOfferToDB.Id);
                    if (!objectsCreated)
                    {
                        response.Status = StatusCODE.Warning;
                        response.StatusText = "City or StudyProgram or Both Not Affacted";
                        return response;
                    }
                }


                response.Status = StatusCODE.Success;

                return response;
            }
            catch (Exception)
            {
                throw;
            }
        }

        public async Task<ResponseDTO> Delete(int id)
        {
            try
            {
                JobOfferDTO jobOffer = await GetSingleJob(id);

                if (jobOffer == null)
                {
                    return new ResponseDTO() { StatusText = "this object not exists", Status = StatusCODE.Faild };
                }

                m_db.JobOffers.Remove(new JobOffer { Id = jobOffer.Id });
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

        public async Task<JobOfferDTO> GetSingleJob(int id)
        {
            try
            {
                var jobOffer = await m_db.JobOffers.Select(j => new JobOfferDTO()
                {
                    Id = j.Id,
                    MailCV = j.MailCV,
                    Phone = j.Phone,
                    JobDescription = j.JobDescription,
                    JobRequirements = j.JobRequirements,
                    TitleJob = j.TitleJob,
                    Publish = j.Publish,
                    CityIDs = j.JobOffer_Cities.Select(c => c.City.Id).ToArray(),
                    CityNames = j.JobOffer_Cities.Select(c => c.City.Name).ToList(),
                    Logo = j.Logo,
                    StudyProgramIDs = j.JobOffer_StudyPrograms.Select(sp => sp.StudyProgram.Id).ToArray(),
                    StudyProgramNames = j.JobOffer_StudyPrograms.Select(sp => sp.StudyProgram.Name).ToList(),
                    EmployerId = j.EmployerId
                }).FirstOrDefaultAsync(i => i.Id == id);
                return jobOffer;
            }
            catch
            {

                throw;
            }
        }

        public async Task<List<JobOfferDTO>> GetJobsByEmployer(int employerId)
        {
            //try
            //{
            var jobOffer = await m_db.JobOffers.Where(i => i.EmployerId == employerId).Select(j => new JobOfferDTO()
            {
                Id = j.Id,
                MailCV = j.MailCV,
                Phone = j.Phone,
                JobDescription = j.JobDescription,
                JobRequirements = j.JobRequirements,
                TitleJob = j.TitleJob,
                Publish = j.Publish,
                EmployerId = j.EmployerId,
                Logo = j.Logo,
                CityIDs = j.JobOffer_Cities.Select(c => c.City.Id).ToArray(),
                CityNames = j.JobOffer_Cities.Select(c => c.City.Name).ToList(),
                StudyProgramIDs = j.JobOffer_StudyPrograms.Select(sp => sp.StudyProgram.Id).ToArray(),
                StudyProgramNames = j.JobOffer_StudyPrograms.Select(sp => sp.StudyProgram.Name).ToList()
            }).ToListAsync();
            return jobOffer;
            //}
            //catch
            //{

            //    throw;
            //}
        }

        public async Task<List<JobOfferDTO>> GetAll()
        {
            //try
            //{
                var jobOffer = await m_db.JobOffers.Select(j => new JobOfferDTO()
                {
                    Id = j.Id,
                    MailCV = j.MailCV,
                    Phone = j.Phone,
                    JobDescription = j.JobDescription,
                    JobRequirements = j.JobRequirements,
                    TitleJob = j.TitleJob,
                    Publish = j.Publish,
                    EmployerId = j.EmployerId,
                    Logo = j.Logo,
                    CityIDs = j.JobOffer_Cities.Select(c => c.City.Id).ToArray(),
                    CityNames = j.JobOffer_Cities.Select(c => c.City.Name).ToList(),
                    StudyProgramIDs = j.JobOffer_StudyPrograms.Select(sp => sp.StudyProgram.Id).ToArray(),
                    StudyProgramNames = j.JobOffer_StudyPrograms.Select(sp => sp.StudyProgram.Name).ToList()
                }).ToListAsync();
                return jobOffer;
            //}
            //catch
            //{

            //    throw;
            //}
        }

        public async Task<ResponseDTO> Update(int id, JobOfferDTO jobOffer)
        {
            try
            {
                JobOfferDTO existsJO = await GetSingleJob(id);
                JobOffer JobOfferToDB = new JobOffer();
                if (existsJO == null)
                {
                    return new ResponseDTO()
                    {
                        Status = StatusCODE.Error,
                        StatusText = $"Item with id {id} not found in DB"
                    };
                }
                JobOfferToDB.Id = Convert.ToInt32(jobOffer.Id.ToString() ?? existsJO.Id.ToString());
                JobOfferToDB.MailCV = jobOffer.MailCV ?? existsJO.MailCV;
                JobOfferToDB.TitleJob = jobOffer.TitleJob ?? existsJO.TitleJob;
                JobOfferToDB.JobDescription = jobOffer.JobDescription ?? existsJO.JobDescription;
                JobOfferToDB.JobRequirements = jobOffer.JobRequirements ?? existsJO.JobRequirements;
                JobOfferToDB.Logo = jobOffer.Logo ?? existsJO.Logo;
                JobOfferToDB.EmployerId = existsJO.EmployerId;
                JobOfferToDB.Phone = jobOffer.Phone ?? existsJO.Phone;
                JobOfferToDB.Publish = Convert.ToBoolean(jobOffer.Publish.ToString() ?? existsJO.Publish.ToString());//CHECK if its working



                m_db.Entry(JobOfferToDB).State = EntityState.Modified;

                int c = await m_db.SaveChangesAsync();

                await Update_ManyToMany_Properties(existsJO, jobOffer);

                ResponseDTO response = new ResponseDTO();
                if (c > 0)
                {
                    response.StatusText = c + " JobOffers affected";
                    response.Status = StatusCODE.Success;
                }
                else
                {
                    response.Status = StatusCODE.Faild;
                    response.StatusText = "faild no JobOffers affacted";
                }
                return response;
            }
            catch
            {

                return new ResponseDTO()
                {
                    Status = StatusCODE.Error,
                    StatusText = $"Erorrs in service: One or More details not Updated"
                };
            }
        }


        private async Task<bool>Add_ManyToMany_Properties(JobOfferDTO jobOffer, int id)
        {
            try
            {
                //init empty object to the max size of the biggest obj
                int biggestLenObj = Math.Max(jobOffer.CityIDs.Count(), jobOffer.StudyProgramIDs.Count());
                if (jobOffer.CityIDs.Length == 0)
                {
                    jobOffer.CityIDs = new int[biggestLenObj];
                }
                if (jobOffer.StudyProgramIDs.Length == 0)
                {
                    jobOffer.StudyProgramIDs = new int[biggestLenObj];
                }


                int retMessege = 0;
                for (int i = 0; i < biggestLenObj; i++)
                {
                    if (i < jobOffer.CityIDs.Length && jobOffer.CityIDs[i] != 0)
                    {

                        var jobOffer_City = new JobOffer_City(id, jobOffer.CityIDs[i]);

                        await m_db.JobOffer_Cities.AddAsync(jobOffer_City);
                    }
                    if (i < jobOffer.StudyProgramIDs.Length && jobOffer.StudyProgramIDs[i] != 0)
                    {

                        var jobOffer_StudyProgram = new JobOffer_StudyProgram(id, jobOffer.StudyProgramIDs[i]);

                        await m_db.JobOffer_StudyPrograms.AddAsync(jobOffer_StudyProgram);
                    }
                    retMessege = await m_db.SaveChangesAsync();
                }
                return retMessege != 0;
            }
            catch (Exception)
            {
                return false;
            }

        }

        private async Task Update_ManyToMany_Properties(JobOfferDTO existsJ, JobOfferDTO jobOffer)
        {
            //                               !!ATTENTION PLEASE!! 
            //while im working with angular, i need to send 'sign' something that said user want remove("DELETE" Method) all the Cities or StudyPrograms
            if (jobOffer.CityIDs.Length != 0)
            {
                foreach (var IdCity in existsJ.CityIDs)
                {
                    var jobOffer_city = new JobOffer_City()
                    {

                        CityId = IdCity,
                        JobOfferId = existsJ.Id
                    };
                    m_db.JobOffer_Cities.Remove(jobOffer_city);
                    int d = await m_db.SaveChangesAsync();//remember defined this 'd' by future
                }
                //need treat in case null of teacher.LanguageIDs!!
                foreach (var IdCity in jobOffer.CityIDs)
                {
                    var jobOffer_city = new JobOffer_City()
                    {

                        CityId = IdCity,
                        JobOfferId = existsJ.Id
                    };
                    await m_db.JobOffer_Cities.AddAsync(jobOffer_city);
                    int d = await m_db.SaveChangesAsync();
                }
            }

            if (jobOffer.StudyProgramIDs.Length != 0)
            {
                foreach (var IdStudPro in existsJ.StudyProgramIDs)
                {
                    var jobOffer_studyProgram = new JobOffer_StudyProgram()
                    {

                        StudyProgramId = IdStudPro,
                        JobOfferId = existsJ.Id
                    };
                    m_db.JobOffer_StudyPrograms.Remove(jobOffer_studyProgram);
                    int d = await m_db.SaveChangesAsync();
                }
                //need treat in case null of teacher.LanguageIDs!!
                foreach (var IdStudPro in jobOffer.StudyProgramIDs)
                {
                    var jobOffer_studyProgram = new JobOffer_StudyProgram()
                    {

                        StudyProgramId = IdStudPro,
                        JobOfferId = existsJ.Id
                    };
                    await m_db.JobOffer_StudyPrograms.AddAsync(jobOffer_studyProgram);
                    int d = await m_db.SaveChangesAsync();
                }
            }
        }


    }
}
