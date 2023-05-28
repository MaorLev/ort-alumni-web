using AlumniOrtServer.Data.Entities;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AlumniOrtServer.Data.DTO
{
  public class EmployerDTO
  {




    [JsonProperty(PropertyName = "id")]
    public int Id { get; set; }

    [JsonProperty(PropertyName = "email")]
    public string Mail { get; set; }

    [JsonProperty(PropertyName = "firstname")]
    public string FirstName { get; set; }

    [JsonProperty(PropertyName = "lastname")]
    public string LastName { get; set; }

    [JsonProperty(PropertyName = "password")]
    public string Password { get; set; }
    //public string Logo { get; set; }

    [JsonProperty(PropertyName = "contactrole")]
    public string ContactRole { get; set; }

    [JsonProperty(PropertyName = "companyname")]
    public string CompanyName { get; set; }

    [JsonProperty(PropertyName = "typeofbusiness")]
    public string TypeOfBusiness { get; set; }

    [JsonProperty(PropertyName = "companyaddress")]
    public string CompanyAddress { get; set; }

    [JsonProperty(PropertyName = "jobofferids")]
    public List<int> JobOffersIDs { get; set; }

    //[JsonProperty(PropertyName = "joboffers")]
    public List<JobOfferDTO> JobOffers { get; set; }

    //[JsonProperty(PropertyName = "roleid")]
    //public int RoleId { get; set; }
  }
}