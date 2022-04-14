using AlumniOrtServer.Data.DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;

namespace AlumniOrtServer.Jwt.JwtManagers
{
    public interface IJwtManager
    {

        JwtResultDTO GenerateToken(Claim[] claims);

    }
}
