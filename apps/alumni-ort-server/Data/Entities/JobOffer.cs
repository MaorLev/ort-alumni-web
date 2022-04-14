using AlumniOrtServer.Data.Entities;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace AlumniOrtServer.Models
{
    public class JobOffer
    {
        public int Id { get; set; }
        [StringLength(50)]
        [Required]
        public string TitleJob { get; set; }

        [StringLength(50)]
        public string MailCV { get; set; }
        [Required]
        [StringLength(500)]
        public string JobDescription { get; set; }
        [StringLength(300)]
        public string JobRequirements { get; set; }
        public string Phone { get; set; }
        [Required]
        public bool Publish { get; set; }
        public string Logo { get; set; }
        public virtual Employer Employer { get; set; }
        public int EmployerId { get; set; }
        public virtual List<JobOffer_City> JobOffer_Cities{ get; set; }
        public virtual List<JobOffer_StudyProgram> JobOffer_StudyPrograms{ get; set; }


        //public ICollection<StudyProgram> StudyPrograms { get; set; }
        //public ICollection<City> Cities { get; set; }
        public JobOffer()
        {

        }
        public JobOffer(int id, string titleJob, string mailCV, string jobDescription
            , string jobRequirements, bool publish,string phone,string logo, int employerId)
        {
            Id = id;
            TitleJob = titleJob;
            MailCV = mailCV;
            JobDescription = jobDescription;
            JobRequirements = jobRequirements;
            Publish = publish;
            Phone = phone;
            Logo = logo;
            EmployerId = employerId;
        }
    }
}
