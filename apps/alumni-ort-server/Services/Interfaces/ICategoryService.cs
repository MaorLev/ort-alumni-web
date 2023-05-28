using AlumniOrtServer.Data.DTO;
using OrtAlumniWeb.AlumniOrtServer.Data.DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace OrtAlumniWeb.AlumniOrtServer.Services.Interfaces
{
  public interface ICategoryService
  {
    public Task<ResponseDTO> Add(CategoryDTO category);

    public Task<List<CategoryDTO>> GetAll();
    public Task<CategoryDTO> Get(int id);
    public Task<ResponseDTO> Delete(int id);
    public Task<ResponseDTO> DeleteAll();
  }
}