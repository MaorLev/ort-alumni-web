using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace OrtAlumniWeb.AlumniOrtServer.Data.DTO
{
  public class SearchRequestByKeyDTO : PaginationFilterDTO
  {
    public string Key { get; set; } 
  }
}