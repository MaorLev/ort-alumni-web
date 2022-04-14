using AlumniOrtServer.Models;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace AlumniOrtServer.Data.Entities
{
    public class ModeStudy_City
    {
        public ModeStudy_City()
        {

        }
        public ModeStudy_City(int cityId, int modeStudyId, int teacherId )
        {
            CityId = cityId;
            ModeStudyId = modeStudyId;
            TeacherId = teacherId;

        }
/*        [NotMapped]
        public ModeStudyEnum MsId_PK_Fk
        {
            get { return (ModeStudyEnum)ModeStudyId; }
            set { ModeStudyId = (int)value; }
        }*/
        //[Column("MsId_PK_Fk")]
        public int ModeStudyId { get; set; }
        public virtual ModeStudy ModeStudy { get; set; }
        public int CityId { get; set; }
        public virtual City City { get; set; }
        public int TeacherId { get; set; }
        public virtual Teacher Teacher { get; set; }
    }

}
