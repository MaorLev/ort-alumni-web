using AlumniOrtServer.Data.Entities;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace AlumniOrtServer.Models
{
  public class Alumnus : User
  {
    public Alumnus()
    {

    }


    public Alumnus(int id, string mail, string firstName, string lastName, string password
    , string phone, int cityId, int collegeId, int studyProgramId, string cardId,
    string studyFinishYear, string linkedin, string workPlace, int RoleId, string studyStartYear, DateTime dof) :
    base(id, mail, firstName, lastName, password, phone, RoleId)
    {
      DateOfBirth = dof;
      StudyStartYear = studyStartYear;
      StudyFinishYear = studyFinishYear;
      Linkedin = linkedin;
      WorkPlace = workPlace;
      CardId = cardId;
      CityId = cityId;
      CollegeId = collegeId;
      StudyProgramId = studyProgramId;
    }


    [StringLength(50)]
    public string Linkedin { get; set; }
    [StringLength(150)]
    public string WorkPlace { get; set; }

    [StringLength(30)]
    public string StudyStartYear { get; set; }
    [StringLength(30)]
    public string StudyFinishYear { get; set; }

    public virtual Teacher teacher { get; set; }
    [Required]
    [StringLength(150)]
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