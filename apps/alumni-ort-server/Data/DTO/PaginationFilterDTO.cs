using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace OrtAlumniWeb.AlumniOrtServer.Data.DTO
{
  public class PaginationFilterDTO
  {
    public int PageIndex { get; set; } = 1;
    public int PageSize { get; set; } = 10;
  }
}