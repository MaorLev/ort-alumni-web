using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace AlumniOrtServer.Models
{
    public class College
    {
        public College()
        {

        }
        public College(int id, string name)
        {
            Id = id;
            Name = name;
        }
        public int Id { get; set; }
        [Required]
        [StringLength(50)]
        public string Name { get; set; }
        //public virtual ICollection<User> users { get; set; }
    }
}