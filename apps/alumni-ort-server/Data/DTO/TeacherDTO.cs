using AlumniOrtServer.Data.Entities;
using AlumniOrtServer.Models;
using Newtonsoft.Json;
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

        public string Logo { get; set; }
        [JsonProperty(PropertyName = "rate")]
        public string Rate { get; set; }
        [JsonProperty(PropertyName = "description")]
        public string Description { get; set; }
        [JsonProperty(PropertyName = "alumnusid")]
        public int AlumnusId { get; set; }
        [JsonProperty(PropertyName = "languageids")]
        public int [] LanguageIDs { get; set; } = { };

        [JsonProperty(PropertyName = "courseids")]
        public int[] CourseIDs { get; set; } = { };
        [JsonProperty(PropertyName = "coursenames")]
        public List<string> CoursesNames { get; set; } 
        [JsonProperty(PropertyName = "cityids")]
        //public int[] CityIDs { get; set; } //if modeStudy Frontally exist cityIDs must to be full!!
        public City [] City { get; set; }
        [JsonProperty(PropertyName = "modestudyids")]
        public int [] ModeStudyIDs { get; set; } = { };//לבדוק אם למפות אותו
        [JsonProperty(PropertyName = "languagenames")]
        public List<string> LanguageNames { get; set; }
        [JsonProperty(PropertyName = "frontally_names")]
        public List<string> Frontally_Names { get; set; }
        [JsonProperty(PropertyName = "is_online")]
        public bool Is_Online { get; set; }
        [JsonProperty(PropertyName = "is_frontally")]
        public bool Is_Frontally { get; set; }
    }
}
