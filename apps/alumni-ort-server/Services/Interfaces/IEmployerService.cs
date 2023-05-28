using AlumniOrtServer.Data.DTO;
using AlumniOrtServer.DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AlumniOrtServer.Services
{
  public interface IEmployerService
  {
    public Task<ResponseDTO> Add(EmployerDTO employer);

    public Task<List<EmployerDTO>> GetAll();
    public Task<List<EmployerDTO>> GetAll_With_JobOffer();
    public Task<EmployerDTO> Get_With_JobOffer(int id);

    public Task<EmployerDTO> Get(int id);

    public Task<ResponseDTO> Update(int id, EmployerDTO employer);

    public Task<ResponseDTO> Delete(int id);
    public Task<bool> Validation(string emai);


  }
}