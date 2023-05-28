using AlumniOrtServer.Models;

namespace AlumniOrtServer.Data.Entities
{
  public class TeacherCourse
  {
    public TeacherCourse()
    {

    }
    public TeacherCourse(int teacherId, int courseId)
    {
      TeacherId = teacherId;
      Course_StudyProgramId = courseId;
    }
    public int TeacherId { get; set; }
    public virtual Teacher Teacher { get; set; }

    public int Course_StudyProgramId { get; set; }
    public virtual Course_StudyProgram Course_StudyProgram { get; set; }




  }
}