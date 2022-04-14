﻿using System;
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
                List<JobOfferDTO> resultJobOffer = await service.GetJobs(emplyerid);
                if (resultJobOffer == null)
                {
                    return NotFound();
                }
                return Ok(resultJobOffer);
            }
            catch
            {
                return BadRequest();
            }

        }

        [HttpGet]
        [Route("GetSingle/{id}")]
        public async Task<ActionResult> GetSingle(int id)//קבלה
        {
            try
            {

                JobOfferDTO resultJobOffer = await service.GetSingleJob(id);
                if (resultJobOffer == null)
                {
                    return NotFound();
                }
                return Ok(resultJobOffer);
            }
            catch
            {
                return BadRequest();
            }

        }


        [HttpPost]
        public async Task<ActionResult> PostJobOffer(JobOfferDTO jobOffer)
        {
            try
            {
                ResponseDTO response =await service.Add(jobOffer);
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

        [HttpPut]
        [Route("{id}")]
        public async Task<ActionResult> PutJobOffer(int id, JobOfferDTO jobOffer)
        {
            ResponseDTO response = new ResponseDTO();
            if (id != jobOffer.Id)
            {
                response.StatusText = "id does not match";
                return BadRequest(response);
            }

            try
            {
                response = await service.Update(id, jobOffer);
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
        public async Task<ActionResult> DeleteJobOffer(int id)
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
                return BadRequest("Eroor Server");
            }

        }
    }
}
