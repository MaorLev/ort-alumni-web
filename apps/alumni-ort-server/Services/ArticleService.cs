using AlumniOrtServer.Context;
using AlumniOrtServer.Data.DTO;
using AlumniOrtServer.Extensions;
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
      string originalName = null;
      var file = formCollection.Files;
      DateTime currentDate = DateTime.Now;
      if (file.Count() != 0)
      {
        originalName = file.First().FileName;
        responeImg = CreateImage(currentDate, originalName, responeImg, file);

      }
      if (responeImg.Status == StatusCODE.Success)
      {
        originalName = originalName.Trim('"').Replace(" ", "");
        Article articleFromDB = new Article(0, formCollection["heading"], formCollection["subheading"],
          currentDate, responeImg.shortBody,
          originalName, formCollection["detail"]
          , int.Parse(formCollection["categoryid"]), formCollection["author"]);


        await m_db.Articles.AddAsync(articleFromDB);

        int c = await m_db.SaveChangesAsync();
        //string categoryName = "";
        //string categoryHebName = "";
        //List<CategoryDTO> categories = await m_db.Categories.Select(cat => new CategoryDTO()
        //{
        //  Id = cat.Id,
        //  Name = cat.Name,
        //  HebName = cat.HebName,
        //  Articles = cat.Articles

        //}).ToListAsync();
        CategoryDTO category = await m_db.Categories.Select(cat => new CategoryDTO()
        {
          Id = cat.Id,
          Name = cat.Name,
          HebName = cat.HebName

        }).FirstOrDefaultAsync(c => c.Id == articleFromDB.CategoryId); 
        //for (int i = 0; i < articleFromDB.CategoryId; i++)
        //{
        //  if (articleFromDB.CategoryId == 1)
        //  {
        //    categoryName = Constants.CategoryName.Events;
        //    categoryHebName = Constants.CategoryHebName.Events;
        //  }
        //  else if (articleFromDB.CategoryId == 2)
        //  {
        //    categoryName = Constants.CategoryName.General;
        //    categoryHebName = Constants.CategoryHebName.General;
        //  }
        //}
        ArticleDTO articleToTransfer = new ArticleDTO()
        {
          Id = articleFromDB.Id,
          Img = articleFromDB.Img,
          Category = category,
          CategoryId = articleFromDB.CategoryId,
          Date = articleFromDB.Date,
          Detail = articleFromDB.Detail,
          Heading = articleFromDB.Heading,
          SubHeading = articleFromDB.SubHeading,
          OriginalImgName = articleFromDB.OriginalImgName,
          Author = articleFromDB.Author
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
    private ResponseDTO CreateImage(DateTime currentDate, string path, ResponseDTO responeImg, IFormFileCollection files)
    {
      string imgPath = FixPathImg(path, currentDate);
      if (imgPath != "-1")
      {
        responeImg = imgService.Upload(files, "ImgArticles", imgPath);
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
        Category = new CategoryDTO() { Id = s.Category.Id, HebName = s.Category.HebName,
          Name = s.Category.Name  },
        Date = s.Date,
        Detail = s.Detail,
        Heading = s.Heading,
        SubHeading = s.SubHeading,
        CategoryId = s.CategoryId,
        Img = s.Img,
        OriginalImgName = s.OriginalImgName,
        Author = s.Author

      }).FirstOrDefaultAsync(a => a.Id == id);
      return article;
    }

    public async Task<List<ArticleDTO>> GetAll()
    {
      var articles = await m_db.Articles.Select(s => new ArticleDTO()
      {
        Id = s.Id,
        Category = new CategoryDTO()
        {
          Id = s.Category.Id,
          HebName = s.Category.HebName,
          Name = s.Category.Name
        },
        Date = s.Date,
        Detail = s.Detail,
        Heading = s.Heading,
        SubHeading = s.SubHeading,
        CategoryId = s.CategoryId,
        Img = s.Img,
        OriginalImgName = s.OriginalImgName,
        Author = s.Author
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
      ArticleFromDB.Author = form["author"].ToString() ?? OriginalArticle.Author;
      ArticleFromDB.Date = currentDate;
      ArticleFromDB.CategoryId= Convert.ToInt32(form["categoryid"].ToString() ?? OriginalArticle.CategoryId.ToString());

      m_db.Entry(ArticleFromDB).State = EntityState.Modified;

      int c = await m_db.SaveChangesAsync();
      ResponseDTO response = new ResponseDTO();

      ArticleDTO articleToTransfer = new ArticleDTO()
      {
        Id = ArticleFromDB.Id,
        Img = ArticleFromDB.Img,
        Category = OriginalArticle.Category,
        CategoryId = ArticleFromDB.CategoryId,
        Date = ArticleFromDB.Date,
        Detail = ArticleFromDB.Detail,
        Heading = ArticleFromDB.Heading,
        SubHeading = ArticleFromDB.SubHeading,
        OriginalImgName = ArticleFromDB.OriginalImgName,
        Author = ArticleFromDB.Author
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

  }
}
