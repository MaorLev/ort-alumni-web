using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AlumniOrtServer.Data.Entities
{
  public class Language
  {
    public Language()
    {

    }
    public Language(int id, string name)
    {
      Id = id;
      Name = name;
    }
    public int Id { get; set; }
    public string Name { get; set; }
    public virtual List<TeacherLanguage> TeacherLanguages { get; set; }
  }
}