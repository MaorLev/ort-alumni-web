using Newtonsoft.Json;
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
    public Category(int id, string name, string hebName)
    {
      Id = id;
      Name = name;
      HebName = hebName;
    }
    [Key]
    [Column("Id")]
    public int Id { get; set; }
    [Column("Name")]
    public string Name { get; set; }
    [Column("HebName")]
    public string HebName { get; set; }
    [JsonIgnore]
    public virtual ICollection<Article> Articles { get; set; }
  }
}
