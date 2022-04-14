using AlumniOrtServer.Data.Entities;
using AlumniOrtServer.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AlumniOrtServer.Services
{
    public interface IClaimService
    {
        public Task<Claim> GetClaim(int id);
        public Task<ICollection<Claim>> GetClaims();
        public Task<bool> PersistClaimsForUser(User persistUser);
    }
}
