using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using OrtAlumniWeb.AlumniOrtServer.Services.Interfaces;

namespace OrtAlumniWeb.AlumniOrtServer.Controllers
{
  [ApiController]
  [Route("[controller]")]
  public class DataController : ControllerBase
  {
    private readonly IDataService _dataService;

    public DataController(IDataService dataService)
    {
      _dataService = dataService ?? throw new ArgumentNullException(nameof(dataService));
    }

    [HttpGet("cities")]
    public IActionResult GetCities()
    {
      var cities = _dataService.GetCities();
      if (cities == null || !cities.Any())
      {
        return NotFound();
      }

      return Ok(cities);
    }

    [HttpGet("colleges")]
    public IActionResult GetColleges()
    {
      var colleges = _dataService.GetColleges();
      if (colleges == null || !colleges.Any())
      {
        return NotFound();
      }

      return Ok(colleges);
    }

    [HttpGet("study-programs")]
    public IActionResult GetStudyPrograms()
    {
      var studyPrograms = _dataService.GetStudyPrograms();
      if (studyPrograms == null || !studyPrograms.Any())
      {
        return NotFound();
      }

      return Ok(studyPrograms);
    }
    [HttpGet("courses")]
    public IActionResult GetCourses()
    {
      var courses = _dataService.GetCourses();
      if (courses == null || !courses.Any())
      {
        return NotFound();
      }

      return Ok(courses);
    }

    [HttpGet("languages")]
    public IActionResult GetLanguages()
    {
      var languages = _dataService.GetLanguages();
      if (languages == null || !languages.Any())
      {
        return NotFound();
      }

      return Ok(languages);
    }
    [HttpGet("categories")]
    public IActionResult GetCategories()
    {
      var categories = _dataService.GetCategories();
      if (categories == null || !categories.Any())
      {
        return NotFound();
      }

      return Ok(categories);
    }
  }
}