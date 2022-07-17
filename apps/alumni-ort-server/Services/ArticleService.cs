using AlumniOrtServer.Context;
using AlumniOrtServer.Data.DTO;
using Microsoft.AspNetCore.Http;
using Microsoft.EntityFrameworkCore;
using OrtAlumniWeb.AlumniOrtServer.Data.DTO;
using OrtAlumniWeb.AlumniOrtServer.Data.Entities;
using OrtAlumniWeb.AlumniOrtServer.Services.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.Json;
using System.Threading.Tasks;

namespace OrtAlumniWeb.AlumniOrtServer.Services
{
  public class ArticleService : IArticleService
  {
    private readonly AlumniDBContext m_db;
    private readonly IImgService imgService;
    public ArticleService(AlumniDBContext db, IImgService imgService)
    {
      m_db = db;
      this.imgService = imgService;
    }


    public async Task<ResponseDTO> Add(IFormCollection formCollection)
    {


      var file = formCollection.Files;

      ResponseDTO responeImg = imgService.Upload(file, "ImgArticles");

      if (responeImg.Status == StatusCODE.Success)
      {
        Article articleFromDB = new Article(0, formCollection["heading"], formCollection["subheading"], DateTime.Now, responeImg.StatusText, formCollection["detail"], int.Parse(formCollection["categoryid"]));

        await m_db.Articles.AddAsync(articleFromDB);

        int c = await m_db.SaveChangesAsync();

        responeImg.body = articleFromDB;
        if (c > 0)
        {
          return responeImg;

        }
        responeImg.Status = StatusCODE.Faild;
        responeImg.StatusText = "faild when tring to add entity";
        return responeImg;
      }
      return responeImg;
    }


    public async Task<ResponseDTO> DeleteArticle(int id)
    {
      ArticleDTO article = await GetArticle(id);

      if (article == null)
      {
        return new ResponseDTO() { StatusText = "this object not exists", Status = StatusCODE.Faild };
      }

      m_db.Articles.Remove(new Article { Id = article.Id });
      int c = await m_db.SaveChangesAsync();
      ResponseDTO response = new ResponseDTO();
      if (c > 0)
      {
        response.StatusText = "Successfully object deleted";
        response.Status = StatusCODE.Success;
      }
      else
      {
        response.Status = StatusCODE.Error;
      }
      return response;
    }

    public async Task<ArticleDTO> GetArticle(int id)
    {
      var article = await m_db.Articles.Select(s => new ArticleDTO()
      {
        Id = s.Id,
        Category = s.Category,
        Date = s.Date,
        Detail = s.Detail,
        Heading = s.Heading,
        SubHeading = s.SubHeading,
        CategoryId = s.CategoryId,
        Img = s.Img

      }).FirstOrDefaultAsync(a => a.Id == id);
      return article;
    }

    public async Task<List<ArticleDTO>> GetAll()
    {
      var articles = await m_db.Articles.Select(s => new ArticleDTO()
      {
        Id = s.Id,
        Category = s.Category,
        Date = s.Date,
        Detail = s.Detail,
        Heading = s.Heading,
        SubHeading = s.SubHeading,
        CategoryId = s.CategoryId,
        Img = s.Img
      }).ToListAsync();
      return articles;
    }

    public async Task<ResponseDTO> Update(int id, ArticleDTO article)
    {
      Article ArticleFromDB = new Article();
      ArticleDTO OriginalArticle = await GetArticle(id);

      if (ArticleFromDB == null)
      {
        return new ResponseDTO()
        {
          Status = StatusCODE.Error,
          StatusText = $"Item with id {id} not found in DB"
        };
      }

      ArticleFromDB.Id = Convert.ToInt32(OriginalArticle.Id.ToString());
      ArticleFromDB.Heading = article.Heading ?? OriginalArticle.Heading;
      ArticleFromDB.SubHeading = article.SubHeading ?? OriginalArticle.SubHeading;
      ArticleFromDB.Img = article.Img ?? OriginalArticle.Img;
      ArticleFromDB.Detail = article.Detail?? OriginalArticle.Detail;
      ArticleFromDB.Date = OriginalArticle.Date;
      ArticleFromDB.CategoryId= Convert.ToInt32(article.CategoryId.ToString() ?? OriginalArticle.CategoryId.ToString());

      m_db.Entry(ArticleFromDB).State = EntityState.Modified;

      int c = await m_db.SaveChangesAsync();
      ResponseDTO response = new ResponseDTO();
      if (c > 0)
      {
        response.StatusText = c + " Article affected";
        response.Status = StatusCODE.Success;
      }
      else
      {
        response.Status = StatusCODE.Faild;
        response.StatusText = "faild no Article affacted";
      }
      return response;
    }


    public async Task<List<CategoryDTO>> getCategoris()
    {
      var categories = await m_db.Categories.Select(c => new CategoryDTO()
      {
        Id = c.Id,
        Name = c.Name,

      }).ToListAsync();
      return categories;
    }
  }
}
