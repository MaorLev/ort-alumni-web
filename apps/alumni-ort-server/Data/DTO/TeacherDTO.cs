using AlumniOrtServer.Data.Entities;
using AlumniOrtServer.Models;
using Newtonsoft.Json;
using OrtAlumniWeb.AlumniOrtServer.Data.DTO;
using OrtAlumniWeb.AlumniOrtServer.Data.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AlumniOrtServer.Data.DTO
{
  public class TeacherDTO
  {
    [JsonProperty(PropertyName = "id")]
    public int Id { get; set; }
    [JsonProperty(PropertyName = "mailforstudy")]
    public string MailForStudy { get; set; }
    [JsonProperty(PropertyName = "logo")]

    public TeacherLogo Logo { get; set; }
    [JsonProperty(PropertyName = "rate")]
    public string Rate { get; set; }
    [JsonProperty(PropertyName = "description")]
    public string Description { get; set; }
    [JsonProperty(PropertyName = "alumnusid")]
    public int AlumnusId { get; set; }
    [JsonProperty(PropertyName = "languages")]
    public LanguageDTO[] Languages { get; set; } = { };
    [JsonProperty(PropertyName = "cities")]
    public CityDTO[] Cities { get; set; }
    [JsonProperty(PropertyName = "courses")]
    public Course_StudyProgramDTO[] Courses { get; set; }
    [JsonProperty(PropertyName = "modestudyids")]
    public int[] ModeStudyIDs { get; set; } = { };

    [JsonProperty(PropertyName = "alumnus")]
    public AlumnusDTO Alumanus { get; set; }
  }
}