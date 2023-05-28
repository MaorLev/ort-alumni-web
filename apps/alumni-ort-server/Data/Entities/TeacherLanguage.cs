using AlumniOrtServer.Models;

namespace AlumniOrtServer.Data.Entities
{
  public class TeacherLanguage
  {
    public TeacherLanguage()
    {

    }
    public TeacherLanguage(int teacherId, int languageId)
    {
      TeacherId = teacherId;
      LanguageId = languageId;
    }
    public int TeacherId { get; set; }
    public virtual Teacher Teacher { get; set; }
    public int LanguageId { get; set; }
    public virtual Language Language { get; set; }


  }
}