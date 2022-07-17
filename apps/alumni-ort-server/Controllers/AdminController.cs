using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using AlumniOrtServer.Data.DTO;
using AlumniOrtServer.Services;
using Microsoft.AspNetCore.Mvc;

namespace AlumniOrtServer.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class AdminController : ControllerBase
    {
        private readonly IAdminService service;
        public AdminController(IAdminService service)
        {
            this.service = service;
        }
        [HttpGet]
        [Route("{id?}")]
        public async Task<ActionResult> Get(int id = 0)//קבלה
        {
            try
            {
                if (id < 1)
                {
                    List<AdminDTO> result = await service.GetAll();
                    //service.GetData();
                    return Ok(result);
                }
                AdminDTO resultAdmin = await service.GetAdmin(id);
                return Ok(resultAdmin);
            }
            catch
            {
                return NotFound();
            }

        }

        [HttpPost]
        public async Task<ActionResult> PostAdmin(AdminDTO admin)
        {
            try
            {
                if (admin != null || admin.Password != null || admin.Mail != null )
                {
                    if (! await service.Validation(admin.Mail))
                    {
                        ResponseDTO respone = await service.Add(admin);
                        if (respone.Status == Data.DTO.StatusCODE.Success)
                        {
                            return Created("", null);
                        }
                        return BadRequest(respone);
                    }
                    return BadRequest(new ResponseDTO { StatusText = "mail already exist" });
                }
                return BadRequest();
            }
            catch (Exception)
            {

                return BadRequest("Server error");
            }

        }

        [HttpPut]
        [Route("{id}")]
        public async Task<ActionResult> PutAdmin(int id, AdminDTO admin)
        {
            ResponseDTO response = new ResponseDTO();
            if (id != admin.Id)
            {
                response.StatusText = "id does not match";
                return BadRequest(response);
            }

            try
            {
                response = await service.Update(id, admin);
                if (response.Status == Data.DTO.StatusCODE.Success)
                {
                    return Ok(response);
                }
            }
            catch
            {
                response.Status = Data.DTO.StatusCODE.Error;
                response.StatusText = "ERROR";
                return BadRequest(response);
            }
            return BadRequest(response);
        }

        [HttpDelete]
        [Route("{id}")]
        public async Task<ActionResult> DeleteAdmin(int id)
        {
            try
            {
                ResponseDTO response = await service.DeleteAdmin(id);
                if (response.Status == Data.DTO.StatusCODE.Success)
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


    }
}
