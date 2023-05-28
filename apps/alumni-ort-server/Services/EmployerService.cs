using AlumniOrtServer.Context;
using AlumniOrtServer.Data.DTO;
using AlumniOrtServer.Data.Entities;
using AlumniOrtServer.DTO;
using AlumniOrtServer.Extensions;
using AlumniOrtServer.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using static AlumniOrtServer.Extensions.Constants;

namespace AlumniOrtServer.Services
{
  public class EmployerService : IEmployerService
  {
    private readonly AlumniDBContext m_db;
    private readonly IClaimService claim;
    public EmployerService(AlumniDBContext db, IClaimService claim)
    {
      m_db = db;
      this.claim = claim;
    }
    public async Task<ResponseDTO> Add(EmployerDTO employerDTO)
    {
      Role role = await m_db.Role.Where(x => x.Id == RolesId.Employer).FirstOrDefaultAsync();

      Employer employerToDb = new Employer(0, employerDTO.Mail, employerDTO.FirstName, employerDTO.LastName,
              MD5Service.Encrypt(employerDTO.Password), employerDTO.ContactRole, employerDTO.CompanyName,
              employerDTO.TypeOfBusiness, employerDTO.CompanyAddress, RolesId.Employer);

      await m_db.Employers.AddAsync(employerToDb);

      int c = await m_db.SaveChangesAsync();
      ResponseDTO response = new ResponseDTO();
      if (c > 0)
      {
        //idEmployer for new joboffer

        response.userId = employerToDb.Id;

        bool Affected = await claim.PersistClaimsForUser(employerToDb);
        if (Affected)
        {
          response.Status = StatusCODE.Success;
          return response;
        }
        response.Status = StatusCODE.Warning;
        response.StatusText = "Employer adedd BUT presist Not Apply";
        return response;
      }
      response.Status = StatusCODE.Faild;
      return response;

    }

    public async Task<ResponseDTO> Delete(int id)
    {
      try
      {
        EmployerDTO employer = await Get(id);

        if (employer == null)
        {
          return new ResponseDTO() { StatusText = "this object not exists", Status = StatusCODE.Faild };
        }

        m_db.Employers.Remove(new Employer { Id = employer.Id });

        int c = await m_db.SaveChangesAsync();
        ResponseDTO response = new ResponseDTO();
        if (c > 0)
        {
          response.StatusText = "Successfully object deleted";
          response.Status = StatusCODE.Success;
        }
        else
        {
          response.Status = StatusCODE.Error;
        }
        return response;
      }
      catch
      {

        return new ResponseDTO()
        {
          Status = StatusCODE.Error,
          StatusText = $"Erorrs in service"
        };
      }
    }

    public async Task<EmployerDTO> Get(int id)
    {
      try
      {
        EmployerDTO employer = await m_db.Employers.Select(e => new EmployerDTO()
        {
          Id = e.Id,
          FirstName = e.FirstName,
          LastName = e.LastName,
          Mail = e.Mail,
          Password = MD5Service.Decrypt(e.Password),
          CompanyName = e.CompanyName,
          ContactRole = e.ContactRole,
          CompanyAddress = e.CompanyAddress,
          TypeOfBusiness = e.TypeOfBusiness,

          JobOffersIDs = e.JobOffers.Select(j => j.Id).ToList()


        }).FirstOrDefaultAsync(i => i.Id == id);
        return employer;
      }
      catch
      {

        throw;
      }
    }

    public async Task<List<EmployerDTO>> GetAll()
    {
      try
      {
        var employers = await m_db.Employers.Select(e => new EmployerDTO()
        {
          Id = e.Id,
          FirstName = e.FirstName,
          LastName = e.LastName,
          Mail = e.Mail,
          Password = e.Password,
          CompanyName = e.CompanyName,
          ContactRole = e.ContactRole,
          CompanyAddress = e.CompanyAddress,
          TypeOfBusiness = e.TypeOfBusiness,
          JobOffersIDs = e.JobOffers.Select(j => j.Id).ToList(),



        }).ToListAsync();
        return employers;
      }
      catch
      {

        throw;
      }
    }

    public async Task<List<EmployerDTO>> GetAll_With_JobOffer()
    {
      try
      {



        var employers = await m_db.Employers.Select(e => new EmployerDTO()
        {
          Id = e.Id,
          FirstName = e.FirstName,
          LastName = e.LastName,
          Mail = e.Mail,
          Password = e.Password,
          CompanyName = e.CompanyName,
          ContactRole = e.ContactRole,
          CompanyAddress = e.CompanyAddress,
          TypeOfBusiness = e.TypeOfBusiness,
          JobOffersIDs = e.JobOffers.Select(j => j.Id).ToList(),

          JobOffers = e.JobOffers.Select(j => new JobOfferDTO()
          {
            Id = j.Id,
            MailCV = j.MailCV,
            Phone = j.Phone,
            JobDescription = j.JobDescription,
            JobRequirements = j.JobRequirements,
            TitleJob = j.TitleJob,
            Publish = j.Publish,
            CityIDs = j.JobOffer_Cities.Select(c => c.City.Id).ToArray(),
            CityNames = j.JobOffer_Cities.Select(c => c.City.Name).ToList(),
            StudyProgramIDs = j.JobOffer_StudyPrograms.Select(sp => sp.StudyProgram.Id).ToArray(),
            StudyProgramNames = j.JobOffer_StudyPrograms.Select(sp => sp.StudyProgram.Name).ToList()

          }).ToList()
        }).ToListAsync();
        return employers;
      }
      catch
      {

        throw;
      }
    }

    public async Task<EmployerDTO> Get_With_JobOffer(int id)
    {
      try
      {
        EmployerDTO employer = await m_db.Employers.Select(e => new EmployerDTO()
        {
          Id = e.Id,
          FirstName = e.FirstName,
          LastName = e.LastName,
          Mail = e.Mail,
          Password = e.Password,
          CompanyName = e.CompanyName,
          ContactRole = e.ContactRole,
          CompanyAddress = e.CompanyAddress,
          TypeOfBusiness = e.TypeOfBusiness,

          JobOffersIDs = e.JobOffers.Select(j => j.Id).ToList(),
          JobOffers = e.JobOffers.Select(j => new JobOfferDTO()
          {
            Id = j.Id,
            MailCV = j.MailCV,
            Phone = j.Phone,
            JobDescription = j.JobDescription,
            JobRequirements = j.JobRequirements,
            TitleJob = j.TitleJob,
            Publish = j.Publish,
            CityIDs = j.JobOffer_Cities.Select(c => c.City.Id).ToArray(),
            CityNames = j.JobOffer_Cities.Select(c => c.City.Name).ToList(),
            StudyProgramIDs = j.JobOffer_StudyPrograms.Select(sp => sp.StudyProgram.Id).ToArray(),
            StudyProgramNames = j.JobOffer_StudyPrograms.Select(sp => sp.StudyProgram.Name).ToList()

          }).ToList()


        }).FirstOrDefaultAsync(i => i.Id == id);
        return employer;
      }
      catch
      {

        throw;
      }
    }

    public async Task<ResponseDTO> Update(int id, EmployerDTO employer)
    {
      try
      {
        EmployerDTO OriginalEmployer = await Get(id);
        Employer EmployerToDB = new Employer();
        if (OriginalEmployer == null)
        {
          return new ResponseDTO()
          {
            Status = StatusCODE.Error,
            StatusText = $"Item with id {id} not found in DB"
          };
        }

        EmployerToDB.Mail = OriginalEmployer.Mail;
        EmployerToDB.FirstName = employer.FirstName ?? OriginalEmployer.FirstName;
        EmployerToDB.LastName = employer.LastName ?? OriginalEmployer.LastName;
        EmployerToDB.Password = MD5Service.Encrypt(employer.Password) ?? OriginalEmployer.Password;
        EmployerToDB.CompanyName = employer.CompanyName ?? OriginalEmployer.CompanyName;
        EmployerToDB.CompanyAddress = employer.CompanyAddress ?? OriginalEmployer.CompanyAddress;
        EmployerToDB.ContactRole = employer.ContactRole ?? OriginalEmployer.ContactRole;
        EmployerToDB.Id = Convert.ToInt32(employer.Id.ToString() ?? OriginalEmployer.Id.ToString());
        EmployerToDB.RoleId = RolesId.Employer;
        EmployerToDB.TypeOfBusiness = employer.TypeOfBusiness ?? OriginalEmployer.TypeOfBusiness;

        m_db.Entry(EmployerToDB).State = EntityState.Modified;

        int c = await m_db.SaveChangesAsync();
        ResponseDTO response = new ResponseDTO();
        if (c > 0)
        {
          response.StatusText = c + " Employer affected";
          response.Status = StatusCODE.Success;
        }
        else
        {
          response.Status = StatusCODE.Faild;
          response.StatusText = "faild no Employer affacted";
        }
        return response;
      }
      catch
      {

        return new ResponseDTO()
        {
          Status = StatusCODE.Error,
          StatusText = $"Erorrs in service"
        };
      }
    }
    public async Task<bool> Validation(string emai)
    {
      if (await m_db.Employers.Where(i => i.Mail == emai).FirstOrDefaultAsync() != null)
      {
        return true;
      }
      return false;
    }
  }
}