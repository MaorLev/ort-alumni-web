using AlumniOrtServer.Data.DTO;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace AlumniOrtServer.Services
{
    public interface IAdminService
    {
        public Task<ResponseDTO> Add(AdminDTO admin);

        public Task<List<AdminDTO>> GetAll();

        public Task<AdminDTO> GetAdmin(int id);

        public Task<ResponseDTO> Update(int id, AdminDTO admin);

        public Task<ResponseDTO> DeleteAdmin(int id);
        public Task<bool> Validation(string emai);
    }
}
