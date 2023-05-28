using AlumniOrtServer.Context;
using AlumniOrtServer.DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.IO;
using System.Net.Http.Headers;
using Microsoft.AspNetCore.Mvc;
using OrtAlumniWeb.AlumniOrtServer.Services.Interfaces;
using AlumniOrtServer.Data.DTO;
using Microsoft.AspNetCore.Http;

namespace AlumniOrtServer.Services
{
  public class ImgService : IImgService
  {
    private readonly AlumniDBContext m_db;
    public ImgService(AlumniDBContext mdb)
    {
      m_db = mdb;
    }

    public ResponseDTO Upload(IFormFileCollection files, string img, string currentDate)
    {
      var file = files.First();
      var folderName = Path.Combine("StaticFiles", img);
      var pathToSave = Path.Combine(Directory.GetCurrentDirectory(), folderName);


      ResponseDTO response = new ResponseDTO();
      response.Status = StatusCODE.Error;
      if (file.Length > 0)
      {
        var fileToCheck = ContentDispositionHeaderValue.Parse(file.ContentDisposition).FileName.Trim('"').Replace(" ", "");
        var fileName = currentDate;
        var fullPath = Path.Combine(pathToSave, fileName);
        //for show image in the front side, use diynamic variable environment of angular
        var dbpath = Path.Combine(folderName, fileName);
        //string message = "https://localhost:44324/StaticFiles/"+ img + '/' + fileName.ToString();
        if (IsAPhotoFile(fileToCheck))
        {
          response.Status = StatusCODE.Success;
          response.shortBody = dbpath;
          using (var stream = new FileStream(fullPath, FileMode.Create))
          {
            file.CopyTo(stream);
          }

          return response;
        }
        return response;
      }
      else
      {
        return response;
      }
    }
    public ResponseDTO Update(IFormFileCollection files, string img, string originalPath, string newPath)
    {
      ResponseDTO response = new ResponseDTO();
      response = Upload(files, img, newPath);
      bool isDeleteed = false;
      if (response.Status == StatusCODE.Success)
      {
        if (response.shortBody != originalPath)
        {
          isDeleteed = Delete(originalPath);

        }
      }
      return response;
    }

    //בדיקת תקינות התמונה
    private static bool IsAPhotoFile(string fileName)
    {
      return fileName.EndsWith(".jpg", StringComparison.OrdinalIgnoreCase)
             || fileName.EndsWith(".jpeg", StringComparison.OrdinalIgnoreCase)
             || fileName.EndsWith(".png", StringComparison.OrdinalIgnoreCase);
    }

    public bool Delete(string path)
    {
      var fullPath = Path.Combine(Directory.GetCurrentDirectory(), path);
      FileInfo TheFile = new FileInfo(@fullPath);
      if (TheFile.Exists)
      {
        File.Delete(fullPath);
        return true;
      }
      return false;
    }

  }
}