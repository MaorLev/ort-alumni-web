using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using AlumniOrtServer.Data.DTO;
using AlumniOrtServer.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using OrtAlumniWeb.AlumniOrtServer.Data.DTO;
using static AlumniOrtServer.Extensions.Constants;

namespace AlumniOrtServer.Controllers
{
  [Authorize(Roles = RolesName.Admin + "," + RolesName.Alumnus)]
  [Route("[controller]")]
  [ApiController]
  public class TeacherController : ControllerBase
  {
    private readonly ITeacherService service;
    public TeacherController(ITeacherService service)
    {
      this.service = service;
    }
    [AllowAnonymous]
    [HttpGet]
    [Route("{alumnusId?}")]
    public async Task<ActionResult> Get(int alumnusId = 0)
    {
      try
      {
        if (alumnusId < 1)
        {
          List<TeacherDTO> result = await service.GetAll();
          return Ok(result);
        }
        TeacherDTO resultTeacher = await service.Get(alumnusId);
        if (resultTeacher == null) return NotFound("יוזר לא קיים");
        return Ok(resultTeacher);
      }
      catch (Exception e)
      {
        return StatusCode(500, e);
      }
    }


    [HttpPost]
    public async Task<ActionResult> PostTeacher(TeacherDTO teacher)
    {
      try
      {
        ResponseDTO response = await service.Add(teacher);
        if (response.Status == Data.DTO.StatusCODE.Success)
        {
          return Created("", null);
        }

        return StatusCode(500, "A part from the request faild or not completed");
      }
      catch (Exception e)
      {
        return StatusCode(500, e);
      }

    }

    [Route("UploadLogo/{alumnusId}")]
    [HttpPost, DisableRequestSizeLimit]
    public async Task<IActionResult> UploadLogo(int alumnusId)
    {
      try
      {
        IFormCollection formLogo = await Request.ReadFormAsync();

        ResponseDTO response = await service.AddLogo(formLogo.Files, alumnusId);

        if (response.Status == StatusCODE.Success)
        {
          return Ok(response);
        }

        return BadRequest(response);
      }
      catch (Exception ex)
      {
        return StatusCode(500, $"Internal server error: {ex}");
      }
    }

    [Route("DeleteLogo/{alumnusId}")]
    [HttpDelete]
    public async Task<ActionResult> DeleteLogo(int alumnusId)
    {
      try
      {
        ResponseDTO response = await service.DeleteLogo(alumnusId);
        if (response.Status == Data.DTO.StatusCODE.Success)
        {
          return Ok(response);
        }
        return NotFound(" Does not exist logo that belongs this teacher");
      }
      catch (Exception ex)
      {
        return StatusCode(500, $"Internal server error: {ex}");
      }
    }

    [HttpGet]
    [Route("teacherExist")]
    public async Task<ActionResult<bool>> TeacherExist(int alumnusId)
    {
      try
      {
        bool exist = await service.existAccount(alumnusId);
        return Ok(exist);
      }
      catch (Exception e)
      {
        return StatusCode(500, e);
      }
    }

    [HttpPut]
    [Route("{id}")]
    public async Task<ActionResult> PutTeacher(int id, [FromBody] TeacherDTO teacher)
    {
      ResponseDTO response = new ResponseDTO();
      if (id != teacher.AlumnusId)
      {
        response.StatusText = "id does not match";
        return ValidationProblem(response.StatusText);
      }

      try
      {
        response = await service.Update(id, teacher);
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

    [HttpDelete]
    [Route("{id}")]
    public async Task<ActionResult> DeleteTeacher(int id)
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

    [AllowAnonymous]
    [HttpPost]
    [Route("search-teachers")]
    public async Task<ActionResult> SearchTeachers([FromBody] SearchRequestDTO searchRequest)
    {
      try
      {
        List<TeacherDTO> result = await service.SearchTeachers(searchRequest);
        return Ok(result);
      }
      catch (Exception e)
      {
        return StatusCode(500, e);
      }
    }

    [AllowAnonymous]
    [HttpGet]
    [Route("last-teachers")]
    public async Task<ActionResult> GetLastTeachers([FromQuery] int pageIndex = 1, [FromQuery] int pageSize = 10)
    {
      try
      {
        List<TeacherDTO> result = await service.GetLastTeachers(new PaginationFilterDTO() { PageIndex = pageIndex, PageSize = pageSize });
        return Ok(result);
      }
      catch (Exception e)
      {
        return StatusCode(500, e);
      }
    }

    [AllowAnonymous]
    [HttpPost]
    [Route("search-teachers-by-key")]
    public async Task<ActionResult> SearchteachersByKey([FromBody] SearchRequestByKeyDTO searchRequest)
    {
      try
      {
        (List<TeacherDTO> teachers, int totalCount) result = await service.SearchTeachersByKey(searchRequest);
        var finalResult = new
        {
          users = result.teachers,
          total = result.totalCount
        };
        return Ok(finalResult);
      }
      catch (Exception e)
      {
        return StatusCode(500, e);
      }
    }
  }
}