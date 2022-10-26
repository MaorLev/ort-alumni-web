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
                if (resultAdmin == null) return NotFound("יוזר לא קיים");
                return Ok(resultAdmin);
            }
            catch (Exception e)
            {
              return StatusCode(500, e);
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
                    return ValidationProblem("mail already exist");
                }
                return BadRequest("Missing fields");
            }
            catch (Exception e)
            {
              return StatusCode(500, e);
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
              return ValidationProblem(response.StatusText);
            }

            try
            {
                response = await service.Update(id, admin);
                if (response.Status == Data.DTO.StatusCODE.Success)
                {
                    return Ok(response);
                }
             return StatusCode(500, "A part from the request faild or not completed");
            }
            catch (Exception e)
            {
              return StatusCode(500, e);
            }
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
              return NotFound("לא קיים יוזר למחיקה");
            }
            catch (Exception e)
            {
              return StatusCode(500, e);
            }

        }


    }
}
