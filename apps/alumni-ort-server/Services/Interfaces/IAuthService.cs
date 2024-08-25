using AlumniOrtServer.Data.DTO;
using AlumniOrtServer.Models;
using System.Threading.Tasks;

namespace AlumniOrtServer.Services
{
  public interface IAuthService
  {
    public Task<JwtResultDTO> GenerateResetToken(string email);
    public Task<JwtResultDTO> Authentication(AuthUserDTO authUserDTO);
    //public Task<JwtResultDTO> GetUserPassword(string email);

    public Task<bool> Validation(string emai);

    public void SendResetLink(string email, string resetLink);

    public Task<User> GetUser(string email);

    public Task<ResponseDTO> ResetPassword(string email, string newPassword);
  }
}