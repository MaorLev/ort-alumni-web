using AlumniOrtServer.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AlumniOrtServer.Data.Entities
{
    public class TeacherLanguage
    {
        public TeacherLanguage()
        {

        }
        public TeacherLanguage(int teacherId,int languageId)
        {
            TeacherId = teacherId;
            LanguageId = languageId;
        }
        //public int Id { get; set; }
        public int TeacherId { get; set; }
        public virtual Teacher Teacher { get; set; }
        public int LanguageId { get; set; }
        public virtual Language Language { get; set; }


    }
}
