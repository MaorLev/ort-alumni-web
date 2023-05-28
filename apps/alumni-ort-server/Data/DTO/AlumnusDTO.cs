using AlumniOrtServer.Data.Entities;
using AlumniOrtServer.Models;
using Newtonsoft.Json;
using OrtAlumniWeb.AlumniOrtServer.Data.DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AlumniOrtServer.Data.DTO
{
  public class AlumnusDTO
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
    [JsonProperty(PropertyName = "phone")]
    public string Phone { get; set; }
    [JsonProperty(PropertyName = "cardid")]
    public string CardId { get; set; }
    [JsonProperty(PropertyName = "dateofbirth")]
    public DateTime DateOfBirth { get; set; }
    [JsonProperty(PropertyName = "studyfinishyear")]
    public string StudyFinishYear { get; set; }
    [JsonProperty(PropertyName = "studystartyear")]
    public string StudyStartYear { get; set; }
    [JsonProperty(PropertyName = "college")]
    public CollegeDTO College { get; set; }
    [JsonProperty(PropertyName = "studyprogram")]
    public StudyProgramDTO StudyProgram { get; set; }
    [JsonProperty(PropertyName = "city")]
    public CityDTO City { get; set; }
    [JsonProperty(PropertyName = "linkedin")]
    public string Linkedin { get; set; }
    [JsonProperty(PropertyName = "workplace")]
    public string WorkPlace { get; set; }
    [JsonProperty(PropertyName = "teacherid")]
    public int TeacherId { get; set; }
    [JsonProperty(PropertyName = "teacher")]
    public TeacherDTO Teacher { get; set; }
  }
}