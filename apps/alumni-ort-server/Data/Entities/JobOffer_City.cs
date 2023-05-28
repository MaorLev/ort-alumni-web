using AlumniOrtServer.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AlumniOrtServer.Data.Entities
{
  public class JobOffer_City
  {
    public JobOffer_City()
    {

    }
    public JobOffer_City(int jobOfferId, int cityId)
    {
      JobOfferId = jobOfferId;
      CityId = cityId;
    }

    public int JobOfferId { get; set; }
    public virtual JobOffer JobOffer { get; set; }
    public int CityId { get; set; }
    public virtual City City { get; set; }
  }
}