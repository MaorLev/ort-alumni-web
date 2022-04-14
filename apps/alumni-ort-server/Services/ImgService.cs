using AlumniOrtServer.Context;
using AlumniOrtServer.DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.IO;
using System.Net.Http.Headers;
using Microsoft.AspNetCore.Mvc;

namespace AlumniOrtServer.Services
{
    public class ImgService
    {
        private readonly AlumniDBContext m_db;
        public ImgService(AlumniDBContext mdb )
        {
            m_db = mdb;
        }

        //public bool Upload(ControllerBase request, string Img)
        //{
        //    try
        //    {
        //        var file = request.Request.Form.Files[0];
        //        var folderName = Path.Combine("StaticFiles", Img);
        //        var pathToSave = Path.Combine(Directory.GetCurrentDirectory(), folderName);

        //        if (file.Length > 0)
        //        {
        //            var fileName = ContentDispositionHeaderValue.Parse(file.ContentDisposition).FileName.Trim('"').Replace(" ", "");
        //            var fullPath = Path.Combine(pathToSave, fileName);
        //           // string urlToDB = "http://localhost:44324/StaticFiles/ImgTeacher/" + fileName.ToString();

        //            if (IsAPhotoFile(fileName))
        //            {
        //                using (var stream = new FileStream(fullPath, FileMode.Create))
        //                {
        //                    file.CopyTo(stream);
        //                }
        //                return true;
        //               // return Ok(new { urlToDB });
        //            }
        //            return false;
        //        }
        //        else
        //        {
        //            return false;
        //        }
        //    }
        //    catch 
        //    {
        //        return false;
        //    }
        //}

        ////בדיקת תקינות התמונה
        //private bool IsAPhotoFile(string fileName)
        //{
        //    return fileName.EndsWith(".jpg", StringComparison.OrdinalIgnoreCase)
        //           || fileName.EndsWith(".jpeg", StringComparison.OrdinalIgnoreCase)
        //           || fileName.EndsWith(".png", StringComparison.OrdinalIgnoreCase);
        //}

    }
}
