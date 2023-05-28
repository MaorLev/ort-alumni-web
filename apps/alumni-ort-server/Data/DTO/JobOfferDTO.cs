using Newtonsoft.Json;
using System.Collections.Generic;

namespace AlumniOrtServer.Data.DTO
{
  public class JobOfferDTO
  {
    [JsonProperty(PropertyName = "id")]
    public int Id { get; set; }
    [JsonProperty(PropertyName = "titlejob")]
    public string TitleJob { get; set; }

    [JsonProperty(PropertyName = "mailcv")]
    public string MailCV { get; set; }

    [JsonProperty(PropertyName = "jobdescription")]
    public string JobDescription { get; set; }
    [JsonProperty(PropertyName = "jobrequirements")]
    public string JobRequirements { get; set; }
    [JsonProperty(PropertyName = "phone")]
    public string Phone { get; set; }
    [JsonProperty(PropertyName = "publish")]
    public bool Publish { get; set; }
    [JsonProperty(PropertyName = "employerid")]
    public int EmployerId { get; set; }
    [JsonProperty(PropertyName = "logo")]
    public string Logo { get; set; }
    [JsonProperty(PropertyName = "cityids")]
    public int[] CityIDs { get; set; } = { };
    [JsonProperty(PropertyName = "studyprogramids")]
    public int[] StudyProgramIDs { get; set; } = { };
    [JsonProperty(PropertyName = "citynames")]
    public List<string> CityNames { get; set; }
    [JsonProperty(PropertyName = "studyprogramnames")]
    public List<string> StudyProgramNames { get; set; }
  }
}