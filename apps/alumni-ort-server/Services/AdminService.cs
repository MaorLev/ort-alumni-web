using AlumniOrtServer.Context;
using AlumniOrtServer.Data.DTO;
using AlumniOrtServer.Data.Entities;
using AlumniOrtServer.DTO;
using AlumniOrtServer.Extensions;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using static AlumniOrtServer.Extensions.Constants;

namespace AlumniOrtServer.Services
{
  public class AdminService : IAdminService
  {
    private readonly AlumniDBContext m_db;
    private readonly IClaimService claim;
    public AdminService(AlumniDBContext db, IClaimService claim)
    {
      m_db = db;
      this.claim = claim;
    }

    public async Task<ResponseDTO> Add(AdminDTO admin)
    {
      Role role = await m_db.Role.Where(x => x.Id == RolesId.Admin).FirstOrDefaultAsync();

      Admin AdminFromDB = new Admin(0, admin.Mail, admin.FirstName
      , admin.LastName, MD5Service.Encrypt(admin.Password), RolesId.Admin);

      await m_db.Admins.AddAsync(AdminFromDB);

      int c = await m_db.SaveChangesAsync();
      //var admin1 = m_db.Users.Include("Role").Where(x => x.Id == AdminFromDB.Id).FirstOrDefault();
      ResponseDTO response = new ResponseDTO();

      if (c > 0)
      {
        bool Affected = await claim.PersistClaimsForUser(AdminFromDB);
        if (Affected)
        {
          response.Status = StatusCODE.Success;
          return response;
        }
        response.Status = StatusCODE.Warning;
        response.StatusText = "admin adedd BUT presist Not Apply";
        return response;
      }
      response.Status = StatusCODE.Faild;
      return response;
    }

    /*        private bool PersistClaimsForAdmin(Admin persistAdmin)
            {
                Claim name = new Claim//מייל נראה הגיוני יותר  אבל למה שם דווקא ?
                {
                    Type = "Name",
                    Value = persistAdmin.FirstName,
                    UserId = persistAdmin.Id
                };

                Claim role = new Claim
                {
                    Type = "Role",
                    //Value = persistAdmin.RoleId.ToString(),
                    Value = persistAdmin.Role.Name,//probably better true
                    UserId = persistAdmin.Id
                };

                m_db.Claim.Add(name);//למה להשתמש בשניים ?
                m_db.Claim.Add(role);

                int c = m_db.SaveChanges();
                return c > 1;//checkk
            }*/

    public async Task<ResponseDTO> DeleteAdmin(int id)
    {
      AdminDTO admin = await GetAdmin(id);

      if (admin == null)
      {
        return new ResponseDTO() { StatusText = "this object not exists", Status = StatusCODE.Faild };
      }

      m_db.Admins.Remove(new Admin { Id = admin.Id });
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

    public async Task<AdminDTO> GetAdmin(int id)
    {
      var admin = await m_db.Admins.Select(s => new AdminDTO()
      {
        FirstName = s.FirstName,
        LastName = s.LastName,
        Id = s.Id,
        Mail = s.Mail,
        Password = s.Password,
      }).FirstOrDefaultAsync(a => a.Id == id);
      return admin;
    }

    public async Task<List<AdminDTO>> GetAll()
    {
      var admins = await m_db.Admins.Select(s => new AdminDTO()
      {
        FirstName = s.FirstName,
        LastName = s.LastName,
        Id = s.Id,
        Mail = s.Mail,
        Password = s.Password,
        //RoleId = s.RoleId
      }).ToListAsync();
      return admins;
    }

    public async Task<ResponseDTO> Update(int id, AdminDTO admin)
    {
      Admin AdminFromDB = new Admin();
      AdminDTO OriginalAdmin = await GetAdmin(id);

      if (AdminFromDB == null)
      {
        return new ResponseDTO()
        {
          Status = StatusCODE.Error,
          StatusText = $"Item with id {id} not found in DB"
        };
      }//checkkk it !!
      /*            else if (AdminFromDB.Password != MD5Service.Encrypt(admin.Password))
                  {
                      return new ResponseDTO()
                      {
                          Status = StatusCode.Error,
                          StatusText = $"Item {admin.FirstName} with SN {admin.Password} Not match to DB"
                      };
                  }*/

      AdminFromDB.Mail = OriginalAdmin.Mail;
      AdminFromDB.FirstName = admin.FirstName ?? OriginalAdmin.FirstName;
      AdminFromDB.LastName = admin.LastName ?? OriginalAdmin.LastName;
      AdminFromDB.Password = MD5Service.Encrypt(admin.Password) ?? OriginalAdmin.Password;
      AdminFromDB.Id = Convert.ToInt32(OriginalAdmin.Id.ToString());
      AdminFromDB.RoleId = RolesId.Admin;

      m_db.Entry(AdminFromDB).State = EntityState.Modified;

      int c = await m_db.SaveChangesAsync();
      ResponseDTO response = new ResponseDTO();
      if (c > 0)
      {
        response.StatusText = c + " Admin affected";
        response.Status = StatusCODE.Success;
      }
      else
      {
        response.Status = StatusCODE.Faild;
        response.StatusText = "faild no Admin affacted";
      }
      return response;
    }
    public async Task<bool> Validation(string emai)
    {
      if (await m_db.Admins.Where(i => i.Mail == emai).FirstOrDefaultAsync() != null)
      {
        return true;
      }
      return false;
    }
  }
}