using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using AlumniOrtServer.Data.DTO;
using AlumniOrtServer.DTO;
using AlumniOrtServer.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using static AlumniOrtServer.Extensions.Constants;

namespace AlumniOrtServer.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class JobOfferController : ControllerBase
    {
        private readonly IJobOfferService service;
        public JobOfferController(IJobOfferService service)
        {
            this.service = service;
        }
        //[Authorize(Roles = RolesName.Admin)]
        [HttpGet]
        [Route("{emplyerid?}")]
        public async Task<ActionResult> Get(int emplyerid = 0)//קבלה
        {
            try
            {
                if (emplyerid < 1)
                {
                    List<JobOfferDTO> result = await service.GetAll();
                    //service.GetData();
                    return Ok(result);
                }
                List<JobOfferDTO> resultJobOffer = await service.GetJobsByEmployer(emplyerid);
                if (resultJobOffer == null) return NotFound("מעסיק לא קיים או ללא הצעות עבודה");
                return Ok(resultJobOffer);
            }
            catch (Exception e)
            {
              return StatusCode(500, e);
            }

          }

        [HttpGet]
        [Route("GetSingle/{id}")]
        public async Task<ActionResult> GetSingle(int id)//קבלה
        {
            try
            {

                JobOfferDTO resultJobOffer = await service.GetSingleJob(id);
                if (resultJobOffer == null) return NotFound("יוזר לא קיים");
                return Ok(resultJobOffer);
            }
            catch (Exception e)
            {
              return StatusCode(500, e);
            }

          }


        [HttpPost]
        public async Task<ActionResult> PostJobOffer(JobOfferDTO jobOffer)
        {
            try
            {
                ResponseDTO response =await service.Add(jobOffer);
                if (response.Status == Data.DTO.StatusCODE.Success)
                {
                    return Created("", null);
                }

              return StatusCode(500, "A part from the request faild or not completed");
            }
            catch (Exception e)
            {
              return StatusCode(500, e);
            }

    }

        [HttpPut]
        [Route("{id}")]
        public async Task<ActionResult> PutJobOffer(int id, JobOfferDTO jobOffer)
        {
            ResponseDTO response = new ResponseDTO();
            if (id != jobOffer.Id)
            {
                response.StatusText = "id does not match";
                return ValidationProblem(response.StatusText);
            }

            try
            {
                response = await service.Update(id, jobOffer);
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
        public async Task<ActionResult> DeleteJobOffer(int id)
        {
            try
            {
                ResponseDTO response = await service.Delete(id);
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
