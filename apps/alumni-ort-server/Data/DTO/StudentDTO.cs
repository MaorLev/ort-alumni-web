using AlumniOrtServer.Data.DTO;
using AlumniOrtServer.Data.Entities;
using AlumniOrtServer.Models;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AlumniOrtServer.DTO
{
    public class StudentDTO
    {
        ///*        public int Id = 0;//check it*/
        ///
        [JsonProperty(PropertyName = "id")]
        public int Id { get; set; }
        [JsonProperty(PropertyName = "mail")]
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
        [JsonProperty(PropertyName = "studystartyear")]
        public string StudyStartYear { get; set; }
        [JsonProperty(PropertyName = "collegename")]
        public string CollegeName { get; set; }
        [JsonProperty(PropertyName = "collegeid")]
        public int CollegeId { get; set; }
        [JsonProperty(PropertyName = "studyprogramname")]
        public string StudyProgramName { get; set; }
        [JsonProperty(PropertyName = "studyprogramid")]
        public int StudyProgramId { get; set; }
        [JsonProperty(PropertyName = "city")]
        public City City { get; set; }
        //[JsonProperty(PropertyName = "roleid")]
        //public int RoleId { get; set; }
    }
}



