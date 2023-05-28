using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

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
  }
}