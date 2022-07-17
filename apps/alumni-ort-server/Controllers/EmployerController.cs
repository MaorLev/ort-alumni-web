using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AlumniOrtServer.Data.DTO;
using AlumniOrtServer.DTO;
using AlumniOrtServer.Services;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace AlumniOrtServer.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class EmployerController : ControllerBase
    {
        private readonly IEmployerService service;
        public EmployerController(IEmployerService service)
        {
            this.service = service;
        }
        [HttpGet]
        [Route("{id?}")]
        public async Task<ActionResult> Get(int id = 0)//קבלה
        {
            try
            {
                if (id == 0)
                {
                    List<EmployerDTO> result = await service.GetAll();
                    return Ok(result);
                }
                EmployerDTO resultEmployer = await service.Get(id);
                if (resultEmployer == null)
                {
                    return BadRequest();
                }
                return Ok(resultEmployer);
            }
            catch
            {
                return BadRequest();
            }

        }
        [HttpGet]
        [Route("Get_With_JobOffer/{id?}")]
        public async Task<ActionResult> GetAll_With_JobOffer(int id = 0)
        {
            try
            {
                if (id == 0)
                {
                    List<EmployerDTO> result = await service.GetAll_With_JobOffer();
                    return Ok(result);
                }
                EmployerDTO resultEmployer = await service.Get_With_JobOffer(id);
                if (resultEmployer == null)
                {
                    return BadRequest();
                }
                return Ok(resultEmployer);
            }
            catch (Exception)
            {

                return BadRequest();
            }
        }

        [HttpPost]
        public async Task<ActionResult> PostEmployer(EmployerDTO employer)
        {
            try
            {
                if (employer != null || employer.Password != null || employer.Mail != null)
                {
                    if (!await service.Validation(employer.Mail))
                    {
                        ResponseDTO respone = await service.Add(employer);
                        if (respone.Status == Data.DTO.StatusCODE.Success)
                        {
                            return Created("", respone.userId);
                        }
                        return BadRequest(respone);
                    }

                    return BadRequest(new ResponseDTO { StatusText = "mail already exist" });
                }
                return BadRequest();
            }
            catch (Exception)
            {

                return BadRequest("Erorr server");
            }

        }

        [HttpPut]
        [Route("{id}")]
        public async Task<ActionResult> PutEmployer(int id, EmployerDTO employer)
        {
            ResponseDTO response = new ResponseDTO();
            if (id != employer.Id)
            {
                response.StatusText = "id does not match";
                return BadRequest(response);
            }

                response = await service.Update(id, employer);
                if (response.Status == Data.DTO.StatusCODE.Success)
                {
                    return Ok(response);
                }
            

            return BadRequest(response);
        }

        [HttpDelete]
        [Route("{id}")]
        public async Task<ActionResult> DeleteEmployer(int id)
        {
            try
            {
                ResponseDTO response = await service.Delete(id);
                if (response.Status == Data.DTO.StatusCODE.Success)
                {
                    return Ok(response);
                }
                return BadRequest(response);
            }
            catch (Exception)
            {

                return BadRequest("Erorr server");
            }

        }
    }
}
