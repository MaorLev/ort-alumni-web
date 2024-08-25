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


    [HttpPost("SendResetLink")]
    public async Task<IActionResult> SendResetLink([FromBody] AuthUserDTO data)
    {
      try
      {

      string email = data.Mail;
      if (await _authService.Validation(email))
      {
        JwtResultDTO resetToken = await _authService.GenerateResetToken(email);
        //string resetLink = Url.Action("ResetPassword", "Auth", new { token = resetToken.AccessToken, email = email }, Request.Scheme);
        string resetLink = "http://localhost:4200/auth/reset-password/" + resetToken.AccessToken;
        _authService.SendResetLink(email, resetLink);
        return Ok();
      }
      return BadRequest("Email does not exist");
      }
      catch (Exception e)
      {
        return StatusCode(500, e);
      }
    }

    [HttpPost("ResetPassword")]
    public async Task<IActionResult> ResetPassword([FromBody] dynamic data)
    {
      try
      {
        string email = data.email;
        string newPassword = data.newPassword;
        ResponseDTO response = new ResponseDTO();
        response = await _authService.ResetPassword(email, newPassword);
        if (response.Status == Data.DTO.StatusCODE.Success)
        {
          return Ok();
        }
        return BadRequest("Invalid reset token.");
      }
      catch (Exception e)
      {
        return StatusCode(500, e);
      }

    }
  }
}