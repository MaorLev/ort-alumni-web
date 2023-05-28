using AlumniOrtServer.Data.Entities;
using OrtAlumniWeb.AlumniOrtServer.Data.Entities;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace AlumniOrtServer.Models
{
  [Table("Teacher")]
  public class Teacher
  {
    public Teacher()
    {

    }
    public Teacher(int id, string mailForStudy, string rate, string description
        , int alumnusId)
    {
      Id = id;
      MailForStudy = mailForStudy;
      Rate = rate;
      Description = description;
      AlumnusId = alumnusId;
    }

    [ForeignKey("Alumnus")]
    public int Id { get; set; }
    [Required]
    [StringLength(50)]
    public string MailForStudy { get; set; }

    [StringLength(30)]
    public string Rate { get; set; }
    [Required]
    [StringLength(150)]
    public string Description { get; set; }
    public int AlumnusId { get; set; }
    public virtual Alumnus Alumanus { get; set; }
    public virtual TeacherLogo Logo { get; set; }
    public virtual List<TeacherLanguage> TeacherLanguages { get; set; }
    public virtual List<TeacherCourse> TeacherCourses { get; set; }
    public virtual List<ModeStudy_City> ModeStudy_Cities { get; set; }

  }
}