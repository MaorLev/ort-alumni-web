using AlumniOrtServer.Context;
using AlumniOrtServer.Data.DTO;
using Microsoft.EntityFrameworkCore;
using OrtAlumniWeb.AlumniOrtServer.Data.DTO;
using OrtAlumniWeb.AlumniOrtServer.Data.Entities;
using OrtAlumniWeb.AlumniOrtServer.Services.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace OrtAlumniWeb.AlumniOrtServer.Services
{
  public class CategoryService : ICategoryService
  {
    private readonly AlumniDBContext m_db;
    private readonly IArticleService articleService;
    public CategoryService(AlumniDBContext db, IArticleService articleService)
    {
      m_db = db;
      this.articleService = articleService;
    }

    public async Task<List<CategoryDTO>> GetAll()
    {
      var categories = await m_db.Categories.Select(c => new CategoryDTO()
      {
        Id = c.Id,
        Name = c.Name
      }).ToListAsync();
      return categories;
    }
    public async Task<CategoryDTO> Get(int id)
    {
      var category = await m_db.Categories.Select(c => new CategoryDTO()
      {
        Id = c.Id,
        Name = c.Name
      }).FirstOrDefaultAsync(res => res.Id == id);
      return category;
    }
    public async Task<ResponseDTO> Add(CategoryDTO category)
    {
      ResponseDTO responeImg = new ResponseDTO();
      responeImg.Status = StatusCODE.Faild;
      Category original = new Category(category.Id, category.Name);

      await m_db.Categories.AddAsync(original);
      int c = await m_db.SaveChangesAsync();
      if (c > 0)
      {
        responeImg.Status = StatusCODE.Success;
        responeImg.body = original;
      }
      return responeImg;
    }

    public async Task<ResponseDTO> Delete(int id)
    {
      CategoryDTO category = await Get(id);
      var articles = await m_db.Articles.Select(s => new ArticleDTO()
      {
        Id = s.Id,
        CategoryId = s.CategoryId,
      }).Where(res => res.CategoryId == id).ToListAsync();

      if (category == null)
      {
        return new ResponseDTO() { StatusText = "this object not exists", Status = StatusCODE.Faild };
      }

      foreach (var article in articles)
      {
        await articleService.DeleteArticle(article.Id);
      }
      //m_db.Articles.RemoveRange(new Article { CategoryId = id });
      m_db.Categories.Remove(new Category { Id = category.Id });
      int c = await m_db.SaveChangesAsync();
      ResponseDTO response = new ResponseDTO();
      if (c > 0)
      {
        response.StatusText = "Successfully object deleted";
        response.Status = StatusCODE.Success;
      }
      else
      {
        response.Status = StatusCODE.Faild;
      }
      return response;
    }

    public async Task<ResponseDTO> DeleteAll()
    {
      ResponseDTO response = new ResponseDTO() { Status = StatusCODE.Success };
      List<CategoryDTO> categories = await GetAll();
      if (categories != null && categories.Count() > 0)
        foreach (var ctg in categories)
        {
          response = await Delete(ctg.Id);
          if (response.Status != StatusCODE.Success)
            return response;
        }

      return response;


    }
  }
}