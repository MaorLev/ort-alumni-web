
using AlumniOrtServer.Data.DTO;
using Microsoft.AspNetCore.Mvc;
using OrtAlumniWeb.AlumniOrtServer.Services.Interfaces;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using OrtAlumniWeb.AlumniOrtServer.Data.DTO;
using System.Linq;

namespace OrtAlumniWeb.AlumniOrtServer.Controllers
{
  [Route("[controller]")]
  [ApiController]
  public class ArticleController : ControllerBase
  {
    private readonly IArticleService articleService;
    private readonly IImgService imgService;
    public ArticleController(IArticleService articleService, IImgService imgService)
    {
      this.articleService = articleService;
      this.imgService = imgService;
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
    //public async Task<ActionResult> PostArticle(ArticleDTO article)
    public async Task<ActionResult> PostArticle()
    {
      try
      {
        var formCollection = await Request.ReadFormAsync();




        //if (formCollection.ContainsKey("id") && formCollection.ContainsKey("categoryid"))
        //{
          ResponseDTO respone = await articleService.Add(formCollection);
          if (respone.Status == StatusCODE.Success)
          {
          return Created("", respone.body);
          }
          return BadRequest(respone);

        //}
        //return BadRequest();
      }
      catch (Exception ex)
      {
        var d = ex;
        return BadRequest("Server error");
      }

    }

    [HttpPut]
    [Route("{id}")]
    public async Task<ActionResult> PutArticle(int id, ArticleDTO article)
    {
      ResponseDTO response = new ResponseDTO();
      if (id != article.Id)
      {
        response.StatusText = "id does not match";
        return BadRequest(response);
      }

      try
      {
        response = await articleService.Update(id, article);
        if (response.Status == StatusCODE.Success)
        {
          return Ok(response);
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

    [HttpGet]
    [Route("GetAllCategory")]
    public async Task<ActionResult> GetAllCategory()
    {
      try
      {

          List<CategoryDTO> result = await articleService.getCategoris();

          return Ok(result);
        
      }
      catch
      {
        return NotFound();
      }

    }
  }
}
