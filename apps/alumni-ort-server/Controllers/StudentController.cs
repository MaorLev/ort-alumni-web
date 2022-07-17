using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AlumniOrtServer.Data.DTO;
using AlumniOrtServer.DTO;
using AlumniOrtServer.Models;
using AlumniOrtServer.Services;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace AlumniOrtServer.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class StudentController : ControllerBase
    {
        private readonly IStudentService service;
        public StudentController(IStudentService service)
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
                    List<StudentDTO> result = await service.GetAll();
                    //service.GetData();
                    return Ok(result);
                }
                StudentDTO resultStudent = await service.GetStudent(id);
                return Ok(resultStudent);
            }
            catch
            {
                return NotFound();
            }

        }

        [HttpPost]
        public async Task<ActionResult> PostStudent(StudentDTO student)
        {
            try
            {
                if (student != null || student.Password != null || student.Mail != null)
                {
                    if (!await service.Validation(student.Mail))
                    {
                        ResponseDTO respone = await service.Add(student);
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

                return BadRequest("Erorr Server");
            }

        }

        [HttpPut]
        [Route("{id}")]
        public async Task<ActionResult> PutStudent(int id, StudentDTO student)
        {
            ResponseDTO response = new ResponseDTO();
            if (id != student.Id)
            {
                response.StatusText = "id does not match";
                return BadRequest(response);
            }

            try
            {
                response = await service.Update(id, student);
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
        public async Task<ActionResult> DeleteStudent(int id)
        {
            try
            {
                ResponseDTO response = await service.DeleteStudent(id);
                if (response.Status == Data.DTO.StatusCODE.Success)
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
