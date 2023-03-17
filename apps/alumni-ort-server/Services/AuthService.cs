using AlumniOrtServer.Context;
using AlumniOrtServer.Data.DTO;
using AlumniOrtServer.Extensions;
using AlumniOrtServer.Jwt.JwtManagers;
using AlumniOrtServer.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;

namespace AlumniOrtServer.Services
{
    public class AuthService : IAuthService
    {
        private readonly AlumniDBContext m_db;
        private readonly IJwtManager _jwtManager;

        public AuthService(AlumniDBContext db, IJwtManager _jwtManager)
        {
            m_db = db;
            this._jwtManager = _jwtManager;
        }

        public async Task<JwtResultDTO> Authentication(AuthUserDTO authUserDTO)
        {
            try
            {
                /*                Object user = null;// chack if all work properly
                                //                    .SingleOrDefault();//search user by mail & password of login
                                switch (authUserDTO.userType)
                                {
                                    case "alumnus":
                                        user = m_db.Alumni.Where(x => x.Mail == authUserDTO.Email && x.Password == authUserDTO.Password)
                                                    .SingleOrDefault();
                                        break;
                                    case "student":
                                       user =  m_db.Students.Where(x => x.Mail == authUserDTO.Email && x.Password == authUserDTO.Password)
                                                    .SingleOrDefault();
                                        break;
                                    case "employer":
                                        user = m_db.Employers.Where(x => x.Mail == authUserDTO.Email && x.Password == authUserDTO.Password)
                                                    .SingleOrDefault();
                                        break;
                                    default:
                                        break;
                                }*/
                var user = await m_db.Users.Include(u=> u.Claims).Include(u=>u.Role).Where(u => u.Mail.ToLower() == authUserDTO.Mail.ToLower() && u.Password == MD5Service.Encrypt(authUserDTO.Password)).FirstOrDefaultAsync();

                if (user != null)
                {
                    //var claimsUser = await m_db.Claim.Where(x => x.UserId == user.Id).ToListAsync();
                    List<Claim> claims = new List<Claim>();

                    foreach (var item in user.Claims)//claim of above user that commit login
                    {
                        claims.Add(new Claim(item.Type, item.Value));
                    }
                    JwtResultDTO jwtResult = _jwtManager.GenerateToken(claims.ToArray());//שאלה : איך הוא קופץ ישר לסרוויס למרות שהוא מחובר לאינטרפייס ואם הייתי מממש את אותה תכונה שנמצאת באינטרפייס בסרוויס נוסף איך הוא היה מתנהג ??
                    return jwtResult;//required mapping for DTO obj ?
                }

                return null;

            }
            // catch (Exception ex)
            catch
            {
                return null;
            }


        }

        public async Task<bool> Validation(string emai)
        {
            if (await m_db.Users.Where(i => i.Mail == emai).FirstOrDefaultAsync() != null)
            {
                return true;
            }
            return false;
        }
    }
}
