using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using AlumniOrtServer.Data.DTO;
using AlumniOrtServer.DTO;
using AlumniOrtServer.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using OrtAlumniWeb.AlumniOrtServer.Data.DTO;
using static AlumniOrtServer.Extensions.Constants;

namespace AlumniOrtServer.Controllers
{
  [Authorize(Roles = RolesName.Admin + "," + RolesName.Student)]
  [Route("[controller]")]
  [ApiController]
  public class StudentController : ControllerBase
  {
    private readonly IStudentService service;
    public StudentController(IStudentService service)
    {
      this.service = service;
    }
    [AllowAnonymous]
    [HttpGet]
    [Route("{id?}")]
    public async Task<ActionResult> Get(int id = 0)
    {
      try
      {
        if (id < 1)
        {
          List<StudentDTO> result = await service.GetAll();
          return Ok(result);
        }
        StudentDTO resultStudent = await service.GetStudent(id);
        if (resultStudent == null) return NotFound("יוזר לא קיים");
        return Ok(resultStudent);
      }
      catch (Exception e)
      {
        return StatusCode(500, e);
      }

    }
    [AllowAnonymous]
    [HttpPost]
    public async Task<ActionResult> PostStudent(StudentDTO student)
    {
      try
      {
        if (student != null || student.Password != null || student.Mail != null)
        {
          if (!await service.Validation(student.Mail))
          {
            ResponseDTO respone = await service.Add(student);
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
    public async Task<ActionResult> PutStudent(int id, StudentDTO student)
    {
      ResponseDTO response = new ResponseDTO();
      if (id != student.Id)
      {
        response.StatusText = "id does not match";
        return ValidationProblem(response.StatusText);
      }

      try
      {
        response = await service.Update(id, student);
        if (response.Status == Data.DTO.StatusCODE.Success)
        {
          return Ok(response);
        }
      }
      catch (Exception e)
      {
        return StatusCode(500, e);
      }
      return StatusCode(500, "A part from the request faild or not completed");
    }
    [AllowAnonymous]
    [HttpPost]
    [Route("search-students-by-key")]
    public async Task<ActionResult> SearchStudentsByKey([FromBody] SearchRequestByKeyDTO searchRequest)
    {
      try
      {
        (List<StudentDTO> students, int totalCount) result = await service.SearchStudentsByKey(searchRequest);
        var finalResult = new
        {
          users = result.students,
          total = result.totalCount
        };
        return Ok(finalResult);
      }
      catch (Exception e)
      {
        return StatusCode(500, e);
      }
    }

    [HttpDelete]
    [Route("{id}")]
    public async Task<ActionResult> DeleteStudent(int id)
    {
      try
      {
        ResponseDTO response = await service.DeleteStudent(id);
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
  }
}