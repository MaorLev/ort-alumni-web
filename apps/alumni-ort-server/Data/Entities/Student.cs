using AlumniOrtServer.Data.Entities;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace AlumniOrtServer.Models
{
    public class Student : User
    {
        public Student()
        {

        }


        public Student(int id, string mail, string firstName, string lastName, string password
            , string phone, int cityId, int collegeId, int studyProgramId, string cardId, DateTime dof,
            string studyStartYear,int RoleId) :
        base(id, mail, firstName, lastName, password, phone, RoleId)
                {
                    DateOfBirth = dof;
                    StudyStartYear = studyStartYear;
                    CardId = cardId;
                    CityId = cityId;
                    CollegeId = collegeId;
                    StudyProgramId = studyProgramId;
                }

        /*        public Student( string mail, string firstName, string lastName, string password
            , string phone, int cityId, int collegeId, int studyProgramId, string cardId,
            string studyStartYear) :
        base( mail, firstName, lastName, password, phone)
                {
                    StudyStartYear = studyStartYear;
                    CardId = cardId;
                    CityId = cityId;
                    CollegeId = collegeId;
                    StudyProgramId = studyProgramId;
                }*/

        //public string Student_CardId { get; set; }

        //public DateTime? Student_DateOfBirth { get; set; }
        [Required]
        [StringLength(30)]
        public string StudyStartYear { get; set; }

        [Required]
        [StringLength(150)]
        //[Column("Student_CardId")]
        public string CardId { get; set; }
        [Column(TypeName = "date")]
        public DateTime DateOfBirth { get; set; }

        //[Column("Student_CityId")]
        public virtual City City { get; set; }
        public int CityId { get; set; }
        //[Column("Student_CollegeId")]
        public int CollegeId { get; set; }

        public virtual College College { get; set; }
        //[Column("Student_StudyProgramId")]
        public int StudyProgramId { get; set; }
        public virtual StudyProgram StudyProgram { get; set; }
    }
}
