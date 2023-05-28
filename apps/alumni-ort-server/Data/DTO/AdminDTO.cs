using AlumniOrtServer.Data.Entities;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AlumniOrtServer.Data.DTO
{
  public class AdminDTO
  {
    [JsonProperty(PropertyName = "id")]
    public int Id { get; set; }
    [JsonProperty(PropertyName = "firstname")]
    public string FirstName { get; set; }
    [JsonProperty(PropertyName = "lastname")]
    public string LastName { get; set; }
    [JsonProperty(PropertyName = "email")]
    public string Mail { get; set; }
    [JsonProperty(PropertyName = "password")]
    public string Password { get; set; }

  }
}