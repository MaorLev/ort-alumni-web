using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;


namespace AlumniOrtServer.Models
{
  public class Student : User
  {
    public Student()
    {

    }

    public Student(int id, string mail, string firstName, string lastName, string password
        , string phone, int cityId, int collegeId, int studyProgramId, string cardId, DateTime dof,
        string studyStartYear, int RoleId) :
    base(id, mail, firstName, lastName, password, phone, RoleId)
    {
      DateOfBirth = dof;
      StudyStartYear = studyStartYear;
      CardId = cardId;
      CityId = cityId;
      CollegeId = collegeId;
      StudyProgramId = studyProgramId;
    }

    [Required]
    [StringLength(30)]
    public string StudyStartYear { get; set; }

    [Required]
    [StringLength(150)]
    //[Column("Student_CardId")]
    public string CardId { get; set; }
    [Column(TypeName = "date")]
    public DateTime DateOfBirth { get; set; }
    public virtual City City { get; set; }
    public int CityId { get; set; }
    public int CollegeId { get; set; }

    public virtual College College { get; set; }
    public int StudyProgramId { get; set; }
    public virtual StudyProgram StudyProgram { get; set; }
  }
}