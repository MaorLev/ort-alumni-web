using AlumniOrtServer.Models;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace AlumniOrtServer.Data.Entities
{
  public class Claim
  {
    public Claim()
    {

    }
    public Claim(int Id, string Type, string Value, int UserId)
    {
      this.Id = Id;
      this.Type = Type;
      this.Value = Value;
      this.UserId = UserId;
    }
    [Key]
    [Column("Id")]
    public int Id { get; set; }
    [Column("Type")]
    public string Type { get; set; }
    [Column("Value")]
    public string Value { get; set; }
    [Column("UserId")]
    public int UserId { get; set; }
    public virtual User User { get; set; }
  }
}