using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using AlumniOrtServer.Data.DTO;
using AlumniOrtServer.Data.Entities;
using AlumniOrtServer.Extensions;
using AlumniOrtServer.Services;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;

namespace AlumniOrtServer.Controllers
{
  [Route("[controller]")]
  [ApiController]
  public class AuthController : ControllerBase
  {

    private readonly IAuthService _authService;
    public AuthController(IAuthService authService)
    {
      _authService = authService;
    }

    [HttpPost, Route("login")]
    public async Task<ActionResult<JwtResultDTO>> Login(AuthUserDTO authUserDTO)
    {
      try
      {

        if (authUserDTO.Mail != null && authUserDTO.Password != null)
        {
          JwtResultDTO jwtResultDto = await _authService.Authentication(authUserDTO);
          if (jwtResultDto != null)
          {
            return Ok(jwtResultDto);
          }
          else return BadRequest("email or password is not correct");

        }

        return BadRequest("one or more fields is empty");

      }
      catch (Exception e)
      {
        return StatusCode(500, e);
      }

    }

    [HttpGet]
    [Route("CheckEmail")]
    public async Task<ActionResult<bool>> CheckEmail(string email)
    {

      string em = email.Substring(1, email.Length - 2);
      try
      {
        if (em != null)
        {
          if (await _authService.Validation(em))
          {
            return Ok(true);
          }
          return Ok(false);
        }
        return BadRequest();
      }
      catch (Exception e)
      {
        return StatusCode(500, e);
      }

    }
    // [HttpPost, Route("resetpassword")]
    // public async Task<ActionResult> ResetPassword(string email)
    // {
    //     string em = email.Substring(1, email.Length - 2);



    //     return Ok();
    // }

    /*        public IActionResult Login([FromBody] Login user)
            {
                if (user == null)
                {
                    return BadRequest("Invalid client request");
                }

                if (user.UserName == "maor" && user.Password == "123")
                {
                    var secretKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes("superSecretKey@345"));
                    var signinCredentials = new SigningCredentials(secretKey, SecurityAlgorithms.HmacSha256);

                    var tokeOptions = new JwtSecurityToken(
                        issuer: "http://localhost:5000",
                        audience: "http://localhost:5000",
                        claims: new List<Claim>(),
                        expires: DateTime.Now.AddMinutes(5),
                        signingCredentials: signinCredentials
                    );

                    var tokenString = new JwtSecurityTokenHandler().WriteToken(tokeOptions);
                    return Ok(new { Token = tokenString });
                }
                else
                {
                    return Unauthorized();
                }
            }*/
  }
}