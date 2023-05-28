using AlumniOrtServer.Data.Entities;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace AlumniOrtServer.Models
{
  public class StudyProgram
  {
    public StudyProgram()
    {

    }
    public StudyProgram(int id, string name)
    {
      Id = id;
      Name = name;
    }
    public int Id { get; set; }
    [Required]
    [StringLength(50)]
    public string Name { get; set; }
    public virtual List<Course_StudyProgram> Course_StudyProgram { get; set; }
    public virtual List<JobOffer_StudyProgram> JobOffer_StudyPrograms { get; set; }
  }
}