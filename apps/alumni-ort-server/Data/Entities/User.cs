using AlumniOrtServer.Data.Entities;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace AlumniOrtServer.Models
{
    public abstract class User
    {
        public User()
        {

        }
        //for student , alumnus
        public User(int id, string mail, string firstName, string lastName, string password
    , string phone,int RoleId)
        {
            this.Id = id;
            this.Mail = mail;
            this.FirstName = firstName;
            this.LastName = lastName;
            this.Password = password;
            this.Phone = phone;
            this.RoleId = RoleId;

        }
        //for employer, admin witout phone property

        public User(int id, string mail, string firstName, string lastName, string password,int RoleId
)
        {
            this.Id = id;
            this.Mail = mail;
            this.FirstName = firstName;
            this.LastName = lastName;
            this.Password = password;
            this.RoleId = RoleId;
        }

        public int Id { get; set; }
        [Required]
        [StringLength(150)]
        public string FirstName { get; set; }
        [Required]
        [StringLength(150)]
        public string LastName { get; set; }
        [Required]
        [StringLength(150)]
        public string Mail { get; set; }

        [Required]
        //public string FullName { get { return FirstName + " " + LastName; } set { FirstName = value; LastName = value; } }
        public string Password { get; set; }
        [StringLength(50)]
        public string Phone { get; set; }

        public ICollection<Claim> Claims { get; set; }


        public int RoleId { get; set; }
        public virtual Role Role { get; set; }
    }
}
