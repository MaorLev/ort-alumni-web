using AlumniOrtServer.Data.DTO;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace OrtAlumniWeb.AlumniOrtServer.Data.DTO
{
  public class SearchRequestDTO : PaginationFilterDTO
  {
    /*    public int[] CityIds { get; set; }
        public int[] ModeStudyIds { get; set; }
        public int StudyProgramId { get; set; }
        public int[] CourseIds { get; set; }*/

    [JsonProperty(PropertyName = "cities")]
    public CityDTO[] Cities { get; set; }
    [JsonProperty(PropertyName = "modestudyids")]
    public int[] ModeStudyIds { get; set; }
    [JsonProperty(PropertyName = "studyprogram")]
    public StudyProgramDTO StudyProgram { get; set; }
    [JsonProperty(PropertyName = "courses")]
    public Course_StudyProgramDTO[] Courses { get; set; }
  }
}