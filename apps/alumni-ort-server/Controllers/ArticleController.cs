
using AlumniOrtServer.Data.DTO;
using Microsoft.AspNetCore.Mvc;
using OrtAlumniWeb.AlumniOrtServer.Services.Interfaces;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using OrtAlumniWeb.AlumniOrtServer.Data.DTO;
using System.Linq;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Authorization;
using static AlumniOrtServer.Extensions.Constants;

namespace OrtAlumniWeb.AlumniOrtServer.Controllers
{
  [Authorize(Roles = RolesName.Admin)]
  [Route("[controller]")]
  [ApiController]
  public class ArticleController : ControllerBase
  {
    private readonly IArticleService articleService;

    public ArticleController(IArticleService articleService)
    {
      this.articleService = articleService;
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
          List<ArticleDTO> result = await articleService.GetAll();

          return Ok(result);
        }
        ArticleDTO resultArticle = await articleService.GetArticle(id);
        if (resultArticle == null) return NotFound("יוזר לא קיים");
        return Ok(resultArticle);
      }
      catch (Exception e)
      {
        return StatusCode(500, e);
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
        return StatusCode(500, "A part from the request faild or not completed");

      }
      catch (Exception e)
      {
        return StatusCode(500, e);
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
          return ValidationProblem(response.StatusText);
        }

        response = await articleService.Update(id, formCollection);
        if (response.Status == StatusCODE.Success)
        {
          return Ok(response.body);
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
    public async Task<ActionResult> DeleteArticle(int id)
    {
      try
      {
        ResponseDTO response = await articleService.DeleteArticle(id);
        if (response.Status == StatusCODE.Success)
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