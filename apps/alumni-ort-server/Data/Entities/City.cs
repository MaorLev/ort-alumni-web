using AlumniOrtServer.Data.Entities;
using Newtonsoft.Json;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;


namespace AlumniOrtServer.Models
{
  //[Table("City")]
  public class City
  {
    public City()
    {

    }
    public City(int id, string name)
    {
      Id = id;
      Name = name;
    }
    public int Id { get; set; }
    [Required]
    [StringLength(50)]
    public string Name { get; set; }
    [JsonIgnore]
    public virtual List<JobOffer_City> JobOffer_Cities { get; set; }
    [JsonIgnore]
    public virtual List<ModeStudy_City> ModeStudy_Cities { get; set; }
    //public virtual ICollection<ModeStudyCity> ModeStudyCities { get; set; }
  }
}