using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using AlumniOrtServer.Data.DTO;
using AlumniOrtServer.DTO;
using AlumniOrtServer.Models.AlumnusModel;
using Microsoft.AspNetCore.Mvc;
using System.Linq;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using AlumniOrtServer.Extensions;

namespace AlumniOrtServer.Controllers
{
  [Route("[controller]")]
  [ApiController]
  public class AlumnusController : ControllerBase
  {
    private readonly IAlumnusService service;
    public AlumnusController(IAlumnusService service)
    {
      this.service = service;
    }
    [HttpGet]
    [Route("{id?}")]
    public async Task<ActionResult> Get(int id = 0)
    {
      try
      {

        if (id < 1)
        {
          List<AlumnusDTO> result = await service.GetAll();
          return Ok(result);
        }
        AlumnusDTO resultAlumnus = await service.Get(id);
        if (resultAlumnus == null) return NotFound("יוזר לא קיים");
        return Ok(resultAlumnus);
      }
      catch (Exception e)
      {
        return StatusCode(500, e);
      }

    }

    [HttpPost]
    public async Task<ActionResult> PostAlumnus(AlumnusDTO alumnus)
    {
      try
      {
        if (alumnus != null || alumnus.Password != null || alumnus.Mail != null)
        {
          if (!await service.Validation(alumnus.Mail))
          {
            ResponseDTO respone = await service.Add(alumnus);
            if (respone.Status == Data.DTO.StatusCODE.Success)
            {
              return Created("", null);
            }
            return BadRequest(respone);
          }

          return ValidationProblem("mail already exist");
        }
        return BadRequest("Missing fields");
      }
      catch (Exception e)
      {
        return StatusCode(500, e);
      }

    }

    [HttpPut]
    [Route("{id}")]
    public async Task<ActionResult> PutAlumnus(int id, AlumnusDTO alumnus)
    {

      ResponseDTO response = new ResponseDTO();
      if (id != alumnus.Id)
      {
        response.StatusText = "id does not match";
        return ValidationProblem(response.StatusText);
      }

      try
      {
        response = await service.Update(id, alumnus);
        if (response.Status == Data.DTO.StatusCODE.Success)
        {
          return Ok(response);
        }
        return StatusCode(500, "A part from the request faild or not completed");
      }
      catch (Exception e)
      {
        return StatusCode(500, e);
      }

    }

    [HttpDelete]
    [Route("{id}")]
    public async Task<ActionResult> DeleteAlumnus(int id)
    {
      try
      {
        ResponseDTO response = await service.Delete(id);
        if (response.Status == Data.DTO.StatusCODE.Success)
        {
          return Ok(response);
        }

        return NotFound("לא קיים יוזר למחיקה");
      }
      catch (Exception e)
      {
        return StatusCode(500, e);
      }
    }

    [HttpGet]
    [Route("last-teachers")]
    public async Task<ActionResult> GetLastTeachers([FromQuery] int pageIndex = 1, [FromQuery] int pageSize = 10)
    {
      try
      {
        List<AlumnusDTO> result = await service.GetLastTeachers(pageIndex, pageSize);
        return Ok(result);
      }
      catch (Exception e)
      {
        return StatusCode(500, e);
      }
    }

  }
}