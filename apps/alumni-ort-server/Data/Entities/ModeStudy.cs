using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace AlumniOrtServer.Data.Entities
{
  public class ModeStudy
  {
    //public ModeStudy()
    //{

    //}
    //public ModeStudy(ModeStudyEnum msId)
    //{
    //    MsId = msId;
    //}
    /*        [NotMapped]
            public ModeStudyEnum MsId
            {
                get { return (ModeStudyEnum)ModeStudyId; }
                set { ModeStudyId = (int)value; }
            }
            [Column("MsId")]
            public int ModeStudyId { get; set; }*/
    public int ModeStudyId { get; set; }
    [Required]
    [StringLength(15)]
    public string Name { get; set; }
    public virtual List<ModeStudy_City> ModeStudy_Cities { get; set; }
  }
  /*    public enum ModeStudyEnum
      {
          Frontally = 1,
          Online
      }*/
}