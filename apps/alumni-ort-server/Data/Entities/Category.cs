using Newtonsoft.Json;
using OrtAlumniWeb.AlumniOrtServer.Data.DTO;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace OrtAlumniWeb.AlumniOrtServer.Data.Entities
{
  public class Category
  {
    public Category()
    {

    }
    public Category(int id, string name)
    {
      Id = id;
      Name = name;
    }
    [Key]
    [Column("Id")]
    public int Id { get; set; }
    [Column("Name")]
    public string Name { get; set; }
    //[JsonIgnore]
    //public virtual ICollection<Article> Articles { get; set; }
  }
}
