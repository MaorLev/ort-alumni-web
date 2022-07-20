
using AlumniOrtServer.Data.DTO;
using Microsoft.AspNetCore.Http;
using OrtAlumniWeb.AlumniOrtServer.Data.DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace OrtAlumniWeb.AlumniOrtServer.Services.Interfaces
{
  public interface IArticleService
  {
    public Task<ResponseDTO> Add(IFormCollection formCollection);

    public Task<List<ArticleDTO>> GetAll();

    public Task<ArticleDTO> GetArticle(int id);

    public Task<ResponseDTO> Update(int id, IFormCollection form);

    public Task<ResponseDTO> DeleteArticle(int id);
    public Task<List<CategoryDTO>> getCategoris();
  }
}
