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
    public Article()
    {

    }
    public Article(int id, string heading,string subheading,DateTime date,string img, string originalImgName, string detail, int categoryId )
    {
      Id = id;
      Heading = heading;
      SubHeading = subheading;
      Date = date;
      Detail = detail;
      CategoryId = categoryId;
      Img = img;
      OriginalImgName = originalImgName;
    }
    [Key]
    [Column("Id")]
    public int Id { get; set; }
    [Column("Heading")]
    public string Heading { get; set; }
    [Column("SubHeading")]
    public string SubHeading { get; set; }
    [Column("Date")]
    public DateTime Date { get; set; }
    [Column("Img")]
    public string Img { get; set; }
    [Column("OriginalImgName")]
    public string OriginalImgName { get; set; }
    
    [Column("Detail")]
    public string Detail { get; set; }
    [ForeignKey("CategoryId")]
    public int CategoryId { get; set; }
    public virtual Category Category { get; set; }
  }
}
