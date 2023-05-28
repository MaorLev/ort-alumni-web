using AlumniOrtServer.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AlumniOrtServer.Data.Entities
{
  public class JobOffer_StudyProgram
  {
    public JobOffer_StudyProgram()
    {

    }
    public JobOffer_StudyProgram(int JobOfferId, int StudyProgramId)
    {
      this.StudyProgramId = StudyProgramId;
      this.JobOfferId = JobOfferId;
    }
    public int JobOfferId { get; set; }
    public virtual JobOffer JobOffer { get; set; }
    public int StudyProgramId { get; set; }
    public virtual StudyProgram StudyProgram { get; set; }
  }
}