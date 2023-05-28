using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AlumniOrtServer.Data.DTO;
using Microsoft.AspNetCore.Mvc;
using OrtAlumniWeb.AlumniOrtServer.Data.DTO;
using OrtAlumniWeb.AlumniOrtServer.Services.Interfaces;

namespace OrtAlumniWeb.AlumniOrtServer.Controllers
{
  [Route("[controller]")]
  [ApiController]
  public class CategoryController : ControllerBase
  {
    private readonly ICategoryService categoryService;

    public CategoryController(ICategoryService categoryService)
    {
      this.categoryService = categoryService;
    }
    [HttpGet]
    public async Task<ActionResult> GetAll()
    {
      try
      {

        List<CategoryDTO> result = await categoryService.GetAll();
        if (result != null)
        {
          return Ok(result);
        }
        return NotFound("לא נמצא");

      }
      catch (Exception e)
      {
        return StatusCode(500, e);
      }

    }

    [HttpPost]
    public async Task<ActionResult> Post([FromBody] CategoryDTO category)
    {
      try
      {

        ResponseDTO respone = await categoryService.Add(category);
        if (respone.Status == StatusCODE.Success)
        {
          return Created("", respone.body);
        }
        return StatusCode(500, respone);

      }
      catch (Exception e)
      {
        return StatusCode(500, e);
      }

    }

    [Route("{id}")]
    public async Task<ActionResult> Delete(int id)
    {
      try
      {
        ResponseDTO response = await categoryService.Delete(id);
        if (response.Status == StatusCODE.Success)
        {
          return Ok(response);
        }
        return NotFound("לא קיימת ישות למחיקה");
      }
      catch (Exception e)
      {
        return StatusCode(500, e);
      }

    }
    [HttpDelete, Route("deleteAll")]
    public async Task<ActionResult> DeleteAll()
    {
      try
      {
        ResponseDTO response = await categoryService.DeleteAll();
        if (response.Status == StatusCODE.Success)
        {
          return Ok(response);
        }

        return NotFound("לא קיימות ישויות למחיקה");
      }
      catch (Exception e)
      {
        return StatusCode(500, e);
      }

    }
  }
}