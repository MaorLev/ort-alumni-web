using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AlumniOrtServer.Data.DTO;
using Microsoft.AspNetCore.Mvc;
using OrtAlumniWeb.AlumniOrtServer.Data.DTO;
using OrtAlumniWeb.AlumniOrtServer.Services.Interfaces;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

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
        return NotFound();

      }
      catch
      {
        return BadRequest();
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
        return BadRequest(respone);

      }
      catch (Exception ex)
      {
        var d = ex;
        return BadRequest("Server error");
      }

    }
    [HttpDelete]
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
        return BadRequest(response);
      }
      catch (Exception ex)
      {
        var f = ex;
        return BadRequest("Server error");
      }

    }
  }
}
