using AlumniOrtServer.Data.Entities;
using AlumniOrtServer.Models;
using OrtAlumniWeb.AlumniOrtServer.Data.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace OrtAlumniWeb.AlumniOrtServer.Services.Interfaces
{
  public interface IDataService
  {
    IEnumerable<City> GetCities();
    IEnumerable<College> GetColleges();
    IEnumerable<StudyProgram> GetStudyPrograms();
    IEnumerable<Language> GetLanguages();
    IEnumerable<Category> GetCategories();
    IEnumerable<Course_StudyProgram> GetCourses();
  }
}
