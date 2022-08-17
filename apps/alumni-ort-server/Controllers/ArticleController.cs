
using AlumniOrtServer.Data.DTO;
using Microsoft.AspNetCore.Mvc;
using OrtAlumniWeb.AlumniOrtServer.Services.Interfaces;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using OrtAlumniWeb.AlumniOrtServer.Data.DTO;
using System.Linq;
using Microsoft.AspNetCore.Http;

namespace OrtAlumniWeb.AlumniOrtServer.Controllers
{
  [Route("[controller]")]
  [ApiController]
  public class ArticleController : ControllerBase
  {
    private readonly IArticleService articleService;
 
    public ArticleController(IArticleService articleService)
    {
      this.articleService = articleService;
    }
    [HttpGet]
    [Route("{id?}")]
    public async Task<ActionResult> Get(int id = 0)
    {
      try
      {
        if (id < 1)
        {
          List<ArticleDTO> result = await articleService.GetAll();

          return Ok(result);
        }
        ArticleDTO resultArticle = await articleService.GetArticle(id);
        return Ok(resultArticle);
      }
      catch
      {
        return NotFound();
      }

    }

    [HttpPost, DisableRequestSizeLimit]
    public async Task<ActionResult> PostArticle()
    {
      try
      {
        IFormCollection formCollection = await Request.ReadFormAsync();

        ResponseDTO respone = await articleService.Add(formCollection);
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

    [HttpPut, DisableRequestSizeLimit]
    [Route("{id}")]
    public async Task<ActionResult> PutArticle(int id)
    {

      ResponseDTO response = new ResponseDTO();
      try
      {
      IFormCollection formCollection = await Request.ReadFormAsync();
      if (id.ToString() != formCollection["id"])
      {
        response.StatusText = "id does not match";
        return BadRequest(response);
      }

        response = await articleService.Update(id, formCollection);
        if (response.Status == StatusCODE.Success)
        {
          return Ok(response.body);
        }
      }
      catch
      {
        response.Status = StatusCODE.Error;
        response.StatusText = "ERROR";
        return BadRequest(response);
      }
      return BadRequest(response);
    }

    [HttpDelete]
    [Route("{id}")]
    public async Task<ActionResult> DeleteArticle(int id)
    {
      try
      {
        ResponseDTO response = await articleService.DeleteArticle(id);
        if (response.Status == StatusCODE.Success)
        {
          return Ok(response);
        }
        return BadRequest(response);
      }
      catch (Exception)
      {

        return BadRequest("Server error");
      }

    }
  }
}
