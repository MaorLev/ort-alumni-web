using AlumniOrtServer.Data.DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AlumniOrtServer.Services
{
    public interface IAuthService
    {

        public Task<JwtResultDTO> Authentication(AuthUserDTO authUserDTO);

        public Task<bool> Validation(string emai);
    }
}
