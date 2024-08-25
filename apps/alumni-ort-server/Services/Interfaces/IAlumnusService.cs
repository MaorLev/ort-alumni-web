using AlumniOrtServer.Data.DTO;
using OrtAlumniWeb.AlumniOrtServer.Data.DTO;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace AlumniOrtServer.Models.AlumnusModel
{
  public interface IAlumnusService
  {
    public Task<ResponseDTO> Add(AlumnusDTO alumnus);

    public Task<List<AlumnusDTO>> GetAll();

    public Task<AlumnusDTO> Get(int id);

    public Task<ResponseDTO> Update(int id, AlumnusDTO alumnus);

    public Task<ResponseDTO> Delete(int id);

    public Task<bool> Validation(string emai);

    public Task<List<AlumnusDTO>> GetLastTeachers(int pageIndex, int pageSize);

    public Task<(List<AlumnusDTO> FilteredAlumni, int TotalAlumniCount)> SearchAlumniByKey(SearchRequestByKeyDTO searchRequest);

  }
}