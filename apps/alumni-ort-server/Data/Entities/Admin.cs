using AlumniOrtServer.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AlumniOrtServer.Data.Entities
{
    public class Admin : User
    {
        public Admin()
        {

        }
        public Admin(int Id,string Mail, string FirstName,string LastName, string Password, int RoleId)
            :base(Id, Mail, FirstName, LastName, Password, RoleId)
        {

        }
        
    }
}
