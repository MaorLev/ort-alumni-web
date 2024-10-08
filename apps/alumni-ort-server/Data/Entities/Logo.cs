using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace OrtAlumniWeb.AlumniOrtServer.Data.Entities
{
  public abstract class Logo
  {
    public Logo()
    {

    }
    public Logo(int id, byte[] bytes, string description, string fileExtension, decimal size)
    {
      Id = id;
      Bytes = bytes;
      Description = description;
      FileExtension = fileExtension;
      Size = size;
    }

    [Key]
    public int Id { get; set; }
    public byte[] Bytes { get; set; }
    public string Description { get; set; }
    public string FileExtension { get; set; }
    public decimal Size { get; set; }
  }
}