using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AlumniOrtServer.Data.DTO;
using AlumniOrtServer.DTO;
using AlumniOrtServer.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace AlumniOrtServer.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class TeacherController : ControllerBase
    {
        private readonly ITeacherService service;
        public TeacherController(ITeacherService service)
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
                    List<TeacherDTO> result = await service.GetAll();
                    //service.GetData();
                    return Ok(result);
                }
                TeacherDTO resultTeacher = await service.Get(id);
                if (resultTeacher == null)
                {
                    return NotFound();
                }
                return Ok(resultTeacher);
            }
            catch
            {

                return BadRequest();
            }
        }


        [HttpPost]
        public async Task<ActionResult> PostTeacher(TeacherDTO teacher)
        {
            try
            {
                ResponseDTO response = await service.Add(teacher);
                if (response.Status == DTO.StatusCode.Success)
                {
                    return Created("", null);
                }

                return BadRequest(response);
            }
            catch (Exception)
            {

                return BadRequest(new ResponseDTO { Status = DTO.StatusCode.Error, StatusText = "Error in Server" });
            }

        }
        [HttpGet]
        [Route("teacherExist")]
        public async Task<ActionResult<bool>> TeacherExist(int alumnusId) 
        {
            try
            {
                bool exist = await service.existAccount(alumnusId);
                return Ok(exist);
            }
            catch
            {
                return BadRequest();
            }
        }

        [HttpPut]
        [Route("{id}")]
        public async Task<ActionResult> PutTeacher(int id, [FromBody] TeacherDTO teacher)
        {
            ResponseDTO response = new ResponseDTO();
            if (id != teacher.AlumnusId)
            {
                response.StatusText = "id does not match";
                return BadRequest(response);
            }

            try
            {
                response = await service.Update(id, teacher);
            if (response.Status == DTO.StatusCode.Success)
            {
                return Ok(response);
            }
            }
            catch
            {
                response.Status = DTO.StatusCode.Error;
                response.StatusText = "ERROR";
                return BadRequest(response);
            }
            return BadRequest(response);
        }

        [HttpDelete]
        [Route("{id}")]
        public async Task<ActionResult> DeleteTeacher(int id)
        {
            try
            {
                ResponseDTO response = await service.Delete(id);
                if (response.Status == DTO.StatusCode.Success)
                {
                    return Ok(response);
                }
                return BadRequest(response);
            }
            catch (Exception)
            {

                return BadRequest("Erorr Server");
            }

        }
    }
}
