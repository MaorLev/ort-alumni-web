using AlumniOrtServer.Context;
using AlumniOrtServer.Data.Entities;
using AlumniOrtServer.Models;
using OrtAlumniWeb.AlumniOrtServer.Data.Entities;
using OrtAlumniWeb.AlumniOrtServer.Services.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace OrtAlumniWeb.AlumniOrtServer.Services
{
  public class DataService : IDataService
  {
    private readonly AlumniDBContext _dbContext;

    public DataService(AlumniDBContext dbContext)
    {
      _dbContext = dbContext;
    }

    IEnumerable<City> IDataService.GetCities()
    {
      return _dbContext.Cities?.ToList() ?? new List<City>();
    }

    IEnumerable<College> IDataService.GetColleges()
    {
      return _dbContext.Colleges?.ToList() ?? new List<College>();
    }

    IEnumerable<StudyProgram> IDataService.GetStudyPrograms()
    {
      return _dbContext.StudyPrograms?.ToList() ?? new List<StudyProgram>();
    }
    IEnumerable<Course_StudyProgram> IDataService.GetCourses()
    {
      return _dbContext.Course_StudyPrograms?.ToList() ?? new List<Course_StudyProgram>();
    }

    IEnumerable<Language> IDataService.GetLanguages()
    {
      return _dbContext.Languages?.ToList() ?? new List<Language>();
    }
    IEnumerable<Category> IDataService.GetCategories()
    {
      return _dbContext.Categories?.ToList() ?? new List<Category>();
    }
  }
}
