using AlumniOrtServer.Data.DTO;
using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace OrtAlumniWeb.AlumniOrtServer.Services.Interfaces
{
  public interface IImgService
  {

    public ResponseDTO Upload(IFormFileCollection file, string Img);
  }
}
