using AlumniOrtServer.Context;
using AlumniOrtServer.Data.Entities;
using AlumniOrtServer.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AlumniOrtServer.Services
{
  public class ClaimService : IClaimService
  {
    private readonly AlumniDBContext m_db;
    public ClaimService(AlumniDBContext m_db)
    {
      this.m_db = m_db;
    }

    public async Task<Claim> GetClaim(int id)
    {
      return await m_db.Claim.Where(c => c.Id == id).FirstOrDefaultAsync();
    }

    public async Task<ICollection<Claim>> GetClaims()
    {
      return await m_db.Claim.ToListAsync();
    }
    public async Task<bool> PersistClaimsForUser(User persistUser)
    {
      /*            if (persistUser is Alumnus)
                  {
                      Claim teacherId = new Claim
                      {
                          Type = "teacherId",
                          Value = (Alumnus)persistUser.,
                          UserId = persistUser.Id
                      };

                  }*/
      Claim name = new Claim
      {
        Type = "name",
        Value = persistUser.FirstName,
        UserId = persistUser.Id
      };

      Claim role = new Claim
      {
        Type = "role",
        //Value = persistUser.RoleId.ToString(),
        Value = persistUser.Role.Name,//probably better 
        UserId = persistUser.Id
      };

      Claim userId = new Claim
      {
        Type = "userId",
        //Value = persistUser.RoleId.ToString(),
        Value = persistUser.Id.ToString(),//probably better 
        UserId = persistUser.Id
      };

      await m_db.Claim.AddAsync(userId);
      await m_db.Claim.AddAsync(name);//למה להשתמש בשניים ?
      await m_db.Claim.AddAsync(role);


      int c = await m_db.SaveChangesAsync();
      return c > 1;//checkk
    }
  }
}