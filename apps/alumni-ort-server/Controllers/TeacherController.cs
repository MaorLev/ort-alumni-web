using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using AlumniOrtServer.Data.DTO;
using AlumniOrtServer.DTO;
using AlumniOrtServer.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using OrtAlumniWeb.AlumniOrtServer.Data.DTO;

namespace AlumniOrtServer.Controllers
{
  [Route("[controller]")]
  [ApiController]
  public class TeacherController : ControllerBase
  {
    private readonly ITeacherService service;
    public TeacherController(ITeacherService service)
    {
      this.service = service;
    }
    [HttpGet]
    [Route("{alumnusId?}")]
    public async Task<ActionResult> Get(int alumnusId = 0)//קבלה
    {
      try
      {
        if (alumnusId < 1)
        {
          List<TeacherDTO> result = await service.GetAll();
          //service.GetData();
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
  }
}
/*    [HttpGet]
    [Route("teachers-by-course-id")]
    public async Task<ActionResult> GetTeachersByCourseId([FromQuery] int courseStudyprogramId = 1, [FromQuery] int pageIndex = 1, [FromQuery] int pageSize = 10)
    {
      try
      {
        if (courseStudyprogramId != 0)
        {
          List<TeacherDTO> result = await service.GetTeachersByCourse(courseStudyprogramId, pageIndex, pageSize);
          return Ok(result);
        }
        return BadRequest("need courseStudyprogramId parameter");
      }
      catch (Exception e)
      {
        return StatusCode(500, e);
      }
    }
    [HttpGet]
    [Route("teachers-by-studyprogram-id")]
    public async Task<ActionResult> GetTeachersByStudyProgramId([FromQuery] int studyprogramId = 0, [FromQuery] int pageIndex = 1, [FromQuery] int pageSize = 10)
    {
      try
      {
        if(studyprogramId != 0)
        {
        List<TeacherDTO> result = await service.GetTeachersByCourse(studyprogramId, pageIndex, pageSize);
        return Ok(result);
        }
        return BadRequest("need studyprogramId parameter");
      }
      catch (Exception e)
      {
        return StatusCode(500, e);
      }
    }*/
