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
      ResponseDTO responeImg = new ResponseDTO();
      responeImg.Status = StatusCODE.Faild;
      var file = formCollection.Files;
      string originalName = file.First().FileName;
      DateTime currentDate = DateTime.Now;
      string imgPath = FixPathImg(originalName, currentDate);
      if (imgPath != "-1")
      {
      responeImg = imgService.Upload(file, "ImgArticles", imgPath);
      }
      if (responeImg.Status == StatusCODE.Success)
      {
        originalName = originalName.Trim('"').Replace(" ", "");
        Article articleFromDB = new Article(0, formCollection["heading"], formCollection["subheading"], currentDate, responeImg.shortBody, originalName, formCollection["detail"], int.Parse(formCollection["categoryid"]));


        await m_db.Articles.AddAsync(articleFromDB);

        int c = await m_db.SaveChangesAsync();

        ArticleDTO articleToTransfer = new ArticleDTO()
        {
          Id = articleFromDB.Id,
          Img = articleFromDB.Img,
          Category = articleFromDB.Category,
          CategoryId = articleFromDB.CategoryId,
          Date = articleFromDB.Date,
          Detail = articleFromDB.Detail,
          Heading = articleFromDB.Heading,
          SubHeading = articleFromDB.SubHeading,
          OriginalImgName = articleFromDB.OriginalImgName
        };
        responeImg.body = articleToTransfer;
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

    private static string FixPathImg(string originalName, DateTime currentDate)
    {
      int index = originalName.IndexOf('.');
      if (index != -1)
      {
        string suffixImg = originalName.Substring(index);
        string ImgPath = currentDate.ToString().Trim('"').Replace(" ", "").Replace("/", "_").Replace(":", "-") + suffixImg;
        return ImgPath;
      }
      return "-1";
      }

    public async Task<ResponseDTO> DeleteArticle(int id)
    {
      ArticleDTO article = await GetArticle(id);

      if (article == null)
      {
        return new ResponseDTO() { StatusText = "this object not exists", Status = StatusCODE.Faild };
      }
      this.imgService.Delete(article.Img);
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
        Img = s.Img,
        OriginalImgName = s.OriginalImgName

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
        Img = s.Img,
        OriginalImgName = s.OriginalImgName
      }).ToListAsync();
      return articles;
    }

    public async Task<ResponseDTO> Update(int id, IFormCollection form)
    {
      ArticleDTO OriginalArticle = await GetArticle(id);

      if (OriginalArticle == null)
      {
        return new ResponseDTO()
        {
          Status = StatusCODE.Error,
          StatusText = $"Item with id {id} not found in DB"
        };
      }
      var file = form.Files;
      ResponseDTO responeImg = new ResponseDTO();
      Article ArticleFromDB = new Article();

      string newpath = null;
      DateTime currentDate = DateTime.Now;

      if(file.Count != 0)
      {
      newpath = file.First().FileName;
      string imgPath = FixPathImg(newpath, currentDate);

      if(imgPath != "-1" && "ImgArticle/StaticFiles/" + imgPath != OriginalArticle.Img)
        responeImg = imgService.Update(file, "ImgArticles", OriginalArticle.Img, imgPath);

        newpath = newpath.Trim('"').Replace(" ", "");
      }


      ArticleFromDB.Id = Convert.ToInt32(OriginalArticle.Id.ToString());
      ArticleFromDB.Heading = form["heading"].ToString() ?? OriginalArticle.Heading;
      ArticleFromDB.SubHeading = form["subheading"].ToString() ?? OriginalArticle.SubHeading;
      ArticleFromDB.Img = responeImg.shortBody ?? OriginalArticle.Img;
      ArticleFromDB.OriginalImgName = newpath ?? OriginalArticle.OriginalImgName;
      ArticleFromDB.Detail = form["detail"].ToString() ?? OriginalArticle.Detail;
      ArticleFromDB.Date = currentDate;
      ArticleFromDB.CategoryId= Convert.ToInt32(form["categoryid"].ToString() ?? OriginalArticle.CategoryId.ToString());

      m_db.Entry(ArticleFromDB).State = EntityState.Modified;

      int c = await m_db.SaveChangesAsync();
      ResponseDTO response = new ResponseDTO();

      ArticleDTO articleToTransfer = new ArticleDTO()
      {
        Id = ArticleFromDB.Id,
        Img = ArticleFromDB.Img,
        Category = ArticleFromDB.Category,
        CategoryId = ArticleFromDB.CategoryId,
        Date = ArticleFromDB.Date,
        Detail = ArticleFromDB.Detail,
        Heading = ArticleFromDB.Heading,
        SubHeading = ArticleFromDB.SubHeading,
        OriginalImgName = ArticleFromDB.OriginalImgName
      };
      response.body = articleToTransfer;
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
