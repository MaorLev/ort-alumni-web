

using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace AlumniOrtServer.Models
{

  public class Employer : User
  {
    [StringLength(150)]
    public string ContactRole { get; set; }
    [Required]
    public string CompanyName { get; set; }

    public string TypeOfBusiness { get; set; }
    [Required]
    public string CompanyAddress { get; set; }

    public virtual List<JobOffer> JobOffers { get; set; }
    public Employer()
    {

    }

    public Employer(int id, string mail, string firstName, string lastName, string password,
         string contactRole, string companyName, string typeOfBusiness, string companyAddress, int RoleId) :
    base(id, mail, firstName, lastName, password, RoleId)
    {
      ContactRole = contactRole;
      CompanyName = companyName;
      TypeOfBusiness = typeOfBusiness;
      CompanyAddress = companyAddress;
    }
  }
}