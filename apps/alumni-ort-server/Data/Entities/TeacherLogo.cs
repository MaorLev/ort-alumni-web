using AlumniOrtServer.Models;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace OrtAlumniWeb.AlumniOrtServer.Data.Entities
{
  public class TeacherLogo : Logo
  {

    public TeacherLogo()
    {

    }
    public TeacherLogo(int teacherId)
    {
      TeacherId = teacherId;
    }
    public int TeacherId { get; set; }
    [ForeignKey("TeacherId")]
    public virtual Teacher Teacher { get; set; }
  }
}