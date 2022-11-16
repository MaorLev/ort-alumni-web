using AlumniOrtServer.Data.DTO;
using AlumniOrtServer.DTO;
using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AlumniOrtServer.Services
{
    public interface ITeacherService
    {
        public Task<ResponseDTO> Add(TeacherDTO teacher);
        public Task<ResponseDTO> AddLogo(IFormFileCollection logoFiles, int teacherId);
        public Task<List<TeacherDTO>> GetAll();
        public Task<List<TeacherDTO>> GetAllCourses();
        public Task<List<TeacherDTO>> GetAllLanguages();
        public Task<List<TeacherDTO>> GetAllModesWithCity();

        public Task<TeacherDTO> Get(int id);

        public Task<ResponseDTO> Update(int id, TeacherDTO teacher);

        public Task<ResponseDTO> Delete(int id);
        public Task<bool> existAccount(int id);


    }
}
