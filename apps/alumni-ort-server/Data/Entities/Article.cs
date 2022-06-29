using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace OrtAlumniWeb.AlumniOrtServer.Data.Entities
{
  public class Article
  {
    [Key]
    [Column("Id")]
    public int Id { get; set; }
    [Column("Heading")]
    public string Heading { get; set; }
    [Column("SubHeading")]
    public string SubHeading { get; set; }
    [Column("Date")]
    public DateTime Date { get; set; }
    [Column("Detail")]
    public string Detail { get; set; }
    [ForeignKey("CategoryId")]
    public int CategoryId { get; set; }
    public virtual Category category { get; set; }
  }
}
