using AlumniOrtServer.Data.DTO;
using AlumniOrtServer.DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AlumniOrtServer.Services
{
    public interface IJobOfferService
    {
        public Task<ResponseDTO> Add(JobOfferDTO jobOffer);

        public Task<List<JobOfferDTO>> GetAll();

        public Task<List<JobOfferDTO>> GetJobs(int id);
        public Task<JobOfferDTO> GetSingleJob(int id);

        public Task<ResponseDTO> Update(int id, JobOfferDTO jobOffer);

        public Task<ResponseDTO> Delete(int id);
    }
}
