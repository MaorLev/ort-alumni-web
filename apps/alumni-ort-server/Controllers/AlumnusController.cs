using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using AlumniOrtServer.Data.DTO;
using AlumniOrtServer.DTO;
using AlumniOrtServer.Models.AlumnusModel;
using Microsoft.AspNetCore.Mvc;
using System.Linq;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using AlumniOrtServer.Extensions;

namespace AlumniOrtServer.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class AlumnusController : ControllerBase
    {
        private readonly IAlumnusService service;
        public AlumnusController(IAlumnusService service)
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
                    List<AlumnusDTO> result = await service.GetAll();
                    return Ok(result);
                }
                AlumnusDTO resultAlumnus = await service.Get(id);
                if (resultAlumnus == null)
                {
                    return BadRequest();
                }
                return Ok(resultAlumnus);
            }
            catch
            {
                return BadRequest();
            }

        }

        [HttpPost]
        public async Task<ActionResult> PostAlumnus(AlumnusDTO alumnus)
        {
            try
            {
                if (alumnus != null || alumnus.Password != null || alumnus.Mail != null)
                {
                    if (! await service.Validation(alumnus.Mail))
                    {
                        ResponseDTO respone = await service.Add(alumnus);
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

                return BadRequest("Erorr Server");
            }

        }

        [HttpPut]
        [Route("{id}")]
        public async Task<ActionResult> PutAlumnus(int id, AlumnusDTO alumnus)
        {
            
            ResponseDTO response = new ResponseDTO();
            if (id != alumnus.Id)
            {
                response.StatusText = "id does not match";
                return BadRequest(response);
            }

            try
            {
                response = await service.Update(id, alumnus);
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
        public async Task<ActionResult> DeleteAlumnus(int id)
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
