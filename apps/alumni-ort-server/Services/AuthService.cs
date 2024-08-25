using AlumniOrtServer.Context;
using AlumniOrtServer.Data.DTO;
using AlumniOrtServer.Extensions;
using AlumniOrtServer.Jwt.JwtManagers;
using AlumniOrtServer.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Mail;
using System.Security.Claims;
using System.Threading.Tasks;

namespace AlumniOrtServer.Services
{
  public class AuthService : IAuthService
  {
    private readonly AlumniDBContext m_db;
    private readonly IJwtManager _jwtManager;
    private readonly SmtpClient _smtpClient;

    public AuthService(AlumniDBContext db, IJwtManager _jwtManager)
    {
      m_db = db;
      this._jwtManager = _jwtManager;
      _smtpClient = new SmtpClient("sandbox.smtp.mailtrap.io", 2525)
      {
        Credentials = new NetworkCredential("d56297a79e7218", "bdd12611b866c0"),
        EnableSsl = true
      };
    }

    public async Task<JwtResultDTO> Authentication(AuthUserDTO authUserDTO)
    {
      try
      {
        var user = await m_db.Users.Include(u => u.Claims).Include(u => u.Role).Where(u => u.Mail.ToLower() == authUserDTO.Mail.ToLower() && u.Password == MD5Service.Encrypt(authUserDTO.Password)).FirstOrDefaultAsync();

        if (user != null)
        {

          List<Claim> claims = new List<Claim>();

          foreach (var item in user.Claims)
          {
            claims.Add(new Claim(item.Type, item.Value));
          }
          JwtResultDTO jwtResult = _jwtManager.GenerateToken(claims.ToArray());
          return jwtResult;
        }

        return null;

      }
      catch
      {
        return null;
      }


    }


    public async Task<User> GetUser(string email)
    {
      try
      {
        User user = await m_db.Users.Include(u => u.Claims).Include(u => u.Role).Where(u => u.Mail.ToLower() == email.ToLower()).FirstOrDefaultAsync();
        return user;
      }
      catch
      {

        throw;
      }
    }

    public async Task<JwtResultDTO> GenerateResetToken(string email)
    {
      try
      {
        var user = await m_db.Users.Include(u => u.Claims).Include(u => u.Role).Where(u => u.Mail.ToLower() == email.ToLower()).FirstOrDefaultAsync();

        if (user != null)
        {

          List<Claim> claims = new List<Claim>();

          claims.Add(new Claim("role", "resetPassword"));
          claims.Add(new Claim("email", user.Mail));
          
          JwtResultDTO jwtResult = _jwtManager.GenerateToken(claims.ToArray());
          return jwtResult;
        }

        return null;

      }
      catch
      {
        return null;
      }
    }




    public void SendResetLink(string email, string resetLink)
    {
      var mailMessage = new MailMessage
      {
        From = new MailAddress("levymaor1@gmail.com"),
        Subject = "Password Reset",
        Body = $"Click <a href='{resetLink}'>here</a> to reset your password.",
        IsBodyHtml = true
      };
      mailMessage.To.Add(email);

      _smtpClient.Send(mailMessage);
    }

    public async Task<bool> Validation(string emai)
    {
      if (await m_db.Users.Where(i => i.Mail == emai).FirstOrDefaultAsync() != null)
      {
        return true;
      }
      return false;
    }

    public async Task<ResponseDTO> ResetPassword(string email, string newPassword)
    {
      try
      {
        User user = await m_db.Users.Include(u => u.Claims).Include(u => u.Role).Where(u => u.Mail.ToLower() == email.ToLower()).FirstOrDefaultAsync();
        if (user == null)
        {
          return new ResponseDTO()
          {
            Status = StatusCODE.Error,
            StatusText = $"Item with email {email} not found in DB"
          };
        }

        user.Password = MD5Service.Encrypt(newPassword) ?? user.Password;


        m_db.Entry(user).State = EntityState.Modified;

        int c = await m_db.SaveChangesAsync();
        ResponseDTO response = new ResponseDTO();
        if (c > 0)
        {
          response.StatusText = c + " User affected";
          response.Status = StatusCODE.Success;
        }
        else
        {
          response.Status = StatusCODE.Faild;
          response.StatusText = "faild no User affacted";
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

  }
}
