using AlumniOrtServer.Models;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace AlumniOrtServer.Data.Entities
{
  public class Course_StudyProgram
  {
    public Course_StudyProgram()
    {

    }
    public Course_StudyProgram(int id, int studyProgramId, string name)
    {
      Id = id;
      Name = name;
      StudyProgramId = studyProgramId;
    }

    [Key]
    [Column("Id")]
    public int Id { get; set; }
    public virtual StudyProgram studyProgram { get; set; }
    public int StudyProgramId { get; set; }
    public string Name { get; set; }
    public virtual List<TeacherCourse> TeacherCourses { get; set; }
  }
}