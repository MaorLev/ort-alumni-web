using System;
using AlumniOrtServer.Context;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;

namespace OrtAlumniWeb.AlumniOrtServer.Migrations
{
    [DbContext(typeof(AlumniDBContext))]
    partial class AlumniDBContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("ProductVersion", "5.0.9")
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("AlumniOrtServer.Data.Entities.Claim", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasColumnName("Id")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Type")
                        .HasColumnType("nvarchar(max)")
                        .HasColumnName("Type");

                    b.Property<int>("UserId")
                        .HasColumnType("int")
                        .HasColumnName("UserId");

                    b.Property<string>("Value")
                        .HasColumnType("nvarchar(max)")
                        .HasColumnName("Value");

                    b.HasKey("Id");

                    b.HasIndex("UserId");

                    b.ToTable("Claim");

                    b.HasData(
                        new
                        {
                            Id = 1,
                            Type = "name",
                            UserId = 1,
                            Value = "Maor"
                        },
                        new
                        {
                            Id = 2,
                            Type = "role",
                            UserId = 1,
                            Value = "Alumnus"
                        },
                        new
                        {
                            Id = 3,
                            Type = "userId",
                            UserId = 1,
                            Value = "1"
                        },
                        new
                        {
                            Id = 4,
                            Type = "name",
                            UserId = 2,
                            Value = "maor"
                        },
                        new
                        {
                            Id = 5,
                            Type = "role",
                            UserId = 2,
                            Value = "Employer"
                        },
                        new
                        {
                            Id = 6,
                            Type = "userId",
                            UserId = 2,
                            Value = "2"
                        },
                        new
                        {
                            Id = 7,
                            Type = "name",
                            UserId = 3,
                            Value = "Maor"
                        },
                        new
                        {
                            Id = 8,
                            Type = "role",
                            UserId = 3,
                            Value = "Admin"
                        },
                        new
                        {
                            Id = 9,
                            Type = "userId",
                            UserId = 3,
                            Value = "3"
                        });
                });

            modelBuilder.Entity("AlumniOrtServer.Data.Entities.Course_StudyProgram", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasColumnName("Id")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Name")
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("StudyProgramId")
                        .HasColumnType("int");

                    b.HasKey("Id");

                    b.HasIndex("StudyProgramId");

                    b.ToTable("Course_StudyPrograms");

                    b.HasData(
                        new
                        {
                            Id = 1,
                            Name = "חישובים סטטיים",
                            StudyProgramId = 2
                        },
                        new
                        {
                            Id = 2,
                            Name = "גאומטריה תאורית",
                            StudyProgramId = 2
                        },
                        new
                        {
                            Id = 3,
                            Name = "פרטי בניין",
                            StudyProgramId = 2
                        },
                        new
                        {
                            Id = 4,
                            Name = "תורת הבניה",
                            StudyProgramId = 2
                        },
                        new
                        {
                            Id = 5,
                            Name = "פרטי בניין",
                            StudyProgramId = 2
                        },
                        new
                        {
                            Id = 6,
                            Name = "תכנון אדריכלי",
                            StudyProgramId = 2
                        },
                        new
                        {
                            Id = 7,
                            Name = "יסודות העיצוב",
                            StudyProgramId = 2
                        },
                        new
                        {
                            Id = 8,
                            Name = "עיבוד תכניות",
                            StudyProgramId = 2
                        },
                        new
                        {
                            Id = 9,
                            Name = "תיב''מ",
                            StudyProgramId = 2
                        },
                        new
                        {
                            Id = 10,
                            Name = "אוטוקד",
                            StudyProgramId = 2
                        },
                        new
                        {
                            Id = 11,
                            Name = "סקאטצ'אפ",
                            StudyProgramId = 2
                        },
                        new
                        {
                            Id = 12,
                            Name = "תולדות האדריכלות",
                            StudyProgramId = 2
                        },
                        new
                        {
                            Id = 13,
                            Name = " הנדסת אנוש וארגונומיה",
                            StudyProgramId = 2
                        },
                        new
                        {
                            Id = 14,
                            Name = "קלימטולוגיה",
                            StudyProgramId = 2
                        },
                        new
                        {
                            Id = 15,
                            Name = "עיצוב ריהוט ופרטי ריהוט",
                            StudyProgramId = 2
                        },
                        new
                        {
                            Id = 16,
                            Name = "חומרי בניין ופנים",
                            StudyProgramId = 2
                        },
                        new
                        {
                            Id = 17,
                            Name = "מערכת המבנה ותשתיות",
                            StudyProgramId = 2
                        },
                        new
                        {
                            Id = 18,
                            Name = "עקרונות התכנון האדריכלי",
                            StudyProgramId = 2
                        },
                        new
                        {
                            Id = 19,
                            Name = "פיזיקה",
                            StudyProgramId = 4
                        },
                        new
                        {
                            Id = 20,
                            Name = "מתמטיקה",
                            StudyProgramId = 4
                        },
                        new
                        {
                            Id = 21,
                            Name = "תורת החשמל",
                            StudyProgramId = 4
                        },
                        new
                        {
                            Id = 22,
                            Name = "אנרגיות מתחדשות",
                            StudyProgramId = 4
                        },
                        new
                        {
                            Id = 23,
                            Name = "אלקטרוניקה תקבילית",
                            StudyProgramId = 4
                        },
                        new
                        {
                            Id = 24,
                            Name = "אלקטרוניקה",
                            StudyProgramId = 3
                        },
                        new
                        {
                            Id = 25,
                            Name = "ביוכימיה",
                            StudyProgramId = 5
                        },
                        new
                        {
                            Id = 26,
                            Name = "ביולוגיה מולקולארית והנדסה גנטית",
                            StudyProgramId = 5
                        },
                        new
                        {
                            Id = 27,
                            Name = "כימיה כללית",
                            StudyProgramId = 5
                        },
                        new
                        {
                            Id = 28,
                            Name = "מיקרוביולוגיה כללית",
                            StudyProgramId = 5
                        },
                        new
                        {
                            Id = 29,
                            Name = "ביולוגיה מולקולרית",
                            StudyProgramId = 5
                        },
                        new
                        {
                            Id = 30,
                            Name = "פיזיולוגיה של בעלי חיים",
                            StudyProgramId = 5
                        },
                        new
                        {
                            Id = 31,
                            Name = "גנטיקה",
                            StudyProgramId = 5
                        },
                        new
                        {
                            Id = 32,
                            Name = "שיטות הפרדה",
                            StudyProgramId = 5
                        },
                        new
                        {
                            Id = 33,
                            Name = "חישוב סטטי וחוזק חומרים",
                            StudyProgramId = 6
                        },
                        new
                        {
                            Id = 34,
                            Name = "קונסטרוקציות בטון",
                            StudyProgramId = 6
                        },
                        new
                        {
                            Id = 35,
                            Name = "ארגון אתר ובחירת ציוד בנייה בהיבט מערכתי",
                            StudyProgramId = 6
                        },
                        new
                        {
                            Id = 36,
                            Name = "קונסטרוקציות פלדה ועץ",
                            StudyProgramId = 6
                        },
                        new
                        {
                            Id = 37,
                            Name = "יישומי מחשב בתכן מבנים",
                            StudyProgramId = 6
                        },
                        new
                        {
                            Id = 38,
                            Name = "יישומי מחשב בניהול הבנייה",
                            StudyProgramId = 6
                        },
                        new
                        {
                            Id = 39,
                            Name = "שירטוט +תיב''ם (אוטוקאד)",
                            StudyProgramId = 8
                        },
                        new
                        {
                            Id = 40,
                            Name = "מבוא לכימיה כללית ואנליטית",
                            StudyProgramId = 8
                        },
                        new
                        {
                            Id = 41,
                            Name = "צנרת ואביזרי מים",
                            StudyProgramId = 8
                        },
                        new
                        {
                            Id = 42,
                            Name = "משאבות",
                            StudyProgramId = 8
                        },
                        new
                        {
                            Id = 43,
                            Name = "מז''ח (מוסמך משרד הבריאות)",
                            StudyProgramId = 8
                        },
                        new
                        {
                            Id = 44,
                            Name = "כימיה סניטרית",
                            StudyProgramId = 8
                        },
                        new
                        {
                            Id = 45,
                            Name = "בסיסי נתונים SQL",
                            StudyProgramId = 14
                        },
                        new
                        {
                            Id = 46,
                            Name = "תקשורת נתונים ואבטחת מידע",
                            StudyProgramId = 14
                        },
                        new
                        {
                            Id = 47,
                            Name = "MongoDB No SQL",
                            StudyProgramId = 14
                        },
                        new
                        {
                            Id = 48,
                            Name = "React",
                            StudyProgramId = 14
                        },
                        new
                        {
                            Id = 49,
                            Name = "Angular ",
                            StudyProgramId = 14
                        },
                        new
                        {
                            Id = 50,
                            Name = "תכנות מונחה עצמים Java",
                            StudyProgramId = 14
                        },
                        new
                        {
                            Id = 51,
                            Name = "תכנות מונחה עצמים C Sharp",
                            StudyProgramId = 14
                        },
                        new
                        {
                            Id = 52,
                            Name = "מבנה נתונים Java",
                            StudyProgramId = 14
                        },
                        new
                        {
                            Id = 53,
                            Name = "מבנה נתונים C Sharp",
                            StudyProgramId = 14
                        },
                        new
                        {
                            Id = 54,
                            Name = "",
                            StudyProgramId = 14
                        },
                        new
                        {
                            Id = 55,
                            Name = "Node JS",
                            StudyProgramId = 14
                        },
                        new
                        {
                            Id = 56,
                            Name = "PHP",
                            StudyProgramId = 14
                        },
                        new
                        {
                            Id = 57,
                            Name = "Asp.Net",
                            StudyProgramId = 14
                        },
                        new
                        {
                            Id = 58,
                            Name = "הנחיית פרויקט",
                            StudyProgramId = 14
                        },
                        new
                        {
                            Id = 59,
                            Name = "אלגוריתמיקה ותכנות",
                            StudyProgramId = 14
                        },
                        new
                        {
                            Id = 60,
                            Name = "מערכות הפעלה ולינוקס",
                            StudyProgramId = 14
                        },
                        new
                        {
                            Id = 61,
                            Name = "פייתון",
                            StudyProgramId = 14
                        },
                        new
                        {
                            Id = 62,
                            Name = "ניתוח מערכות",
                            StudyProgramId = 14
                        },
                        new
                        {
                            Id = 63,
                            Name = "בדיקות תוכנה - QA",
                            StudyProgramId = 14
                        });
                });

            modelBuilder.Entity("AlumniOrtServer.Data.Entities.JobOffer_City", b =>
                {
                    b.Property<int>("CityId")
                        .HasColumnType("int");

                    b.Property<int>("JobOfferId")
                        .HasColumnType("int");

                    b.HasKey("CityId", "JobOfferId");

                    b.HasIndex("JobOfferId");

                    b.ToTable("JobOffer_Cities");

                    b.HasData(
                        new
                        {
                            CityId = 1,
                            JobOfferId = 1
                        },
                        new
                        {
                            CityId = 2,
                            JobOfferId = 1
                        });
                });

            modelBuilder.Entity("AlumniOrtServer.Data.Entities.JobOffer_StudyProgram", b =>
                {
                    b.Property<int>("StudyProgramId")
                        .HasColumnType("int");

                    b.Property<int>("JobOfferId")
                        .HasColumnType("int");

                    b.HasKey("StudyProgramId", "JobOfferId");

                    b.HasIndex("JobOfferId");

                    b.ToTable("JobOffer_StudyPrograms");

                    b.HasData(
                        new
                        {
                            StudyProgramId = 2,
                            JobOfferId = 1
                        },
                        new
                        {
                            StudyProgramId = 3,
                            JobOfferId = 1
                        });
                });

            modelBuilder.Entity("AlumniOrtServer.Data.Entities.Language", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Name")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.ToTable("Languages");

                    b.HasData(
                        new
                        {
                            Id = 1,
                            Name = "עברית"
                        },
                        new
                        {
                            Id = 2,
                            Name = "אנגלית"
                        },
                        new
                        {
                            Id = 3,
                            Name = "ערבית"
                        },
                        new
                        {
                            Id = 4,
                            Name = "צרפתית"
                        },
                        new
                        {
                            Id = 5,
                            Name = "רוסית"
                        });
                });

            modelBuilder.Entity("AlumniOrtServer.Data.Entities.ModeStudy", b =>
                {
                    b.Property<int>("ModeStudyId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasMaxLength(15)
                        .HasColumnType("nvarchar(15)");

                    b.HasKey("ModeStudyId");

                    b.ToTable("ModeStudies");

                    b.HasData(
                        new
                        {
                            ModeStudyId = 1,
                            Name = "Frontally"
                        },
                        new
                        {
                            ModeStudyId = 2,
                            Name = "Online"
                        });
                });

            modelBuilder.Entity("AlumniOrtServer.Data.Entities.ModeStudy_City", b =>
                {
                    b.Property<int>("ModeStudyId")
                        .HasColumnType("int");

                    b.Property<int>("CityId")
                        .HasColumnType("int");

                    b.Property<int>("TeacherId")
                        .HasColumnType("int");

                    b.HasKey("ModeStudyId", "CityId", "TeacherId");

                    b.HasIndex("CityId");

                    b.HasIndex("TeacherId");

                    b.ToTable("ModeStudy_Cities");

                    b.HasData(
                        new
                        {
                            ModeStudyId = 1,
                            CityId = 2,
                            TeacherId = 1
                        });
                });

            modelBuilder.Entity("AlumniOrtServer.Data.Entities.Role", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasColumnName("Id")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Name")
                        .HasColumnType("nvarchar(max)")
                        .HasColumnName("Name");

                    b.HasKey("Id");

                    b.ToTable("Role");

                    b.HasData(
                        new
                        {
                            Id = 1,
                            Name = "Admin"
                        },
                        new
                        {
                            Id = 2,
                            Name = "Employer"
                        },
                        new
                        {
                            Id = 3,
                            Name = "Alumnus"
                        },
                        new
                        {
                            Id = 4,
                            Name = "Student"
                        });
                });

            modelBuilder.Entity("AlumniOrtServer.Data.Entities.TeacherCourse", b =>
                {
                    b.Property<int>("Course_StudyProgramId")
                        .HasColumnType("int");

                    b.Property<int>("TeacherId")
                        .HasColumnType("int");

                    b.HasKey("Course_StudyProgramId", "TeacherId");

                    b.HasIndex("TeacherId");

                    b.ToTable("TeacherCourses");

                    b.HasData(
                        new
                        {
                            Course_StudyProgramId = 1,
                            TeacherId = 1
                        },
                        new
                        {
                            Course_StudyProgramId = 2,
                            TeacherId = 1
                        },
                        new
                        {
                            Course_StudyProgramId = 3,
                            TeacherId = 1
                        });
                });

            modelBuilder.Entity("AlumniOrtServer.Data.Entities.TeacherLanguage", b =>
                {
                    b.Property<int>("LanguageId")
                        .HasColumnType("int");

                    b.Property<int>("TeacherId")
                        .HasColumnType("int");

                    b.HasKey("LanguageId", "TeacherId");

                    b.HasIndex("TeacherId");

                    b.ToTable("TeacherLanguages");

                    b.HasData(
                        new
                        {
                            LanguageId = 1,
                            TeacherId = 1
                        });
                });

            modelBuilder.Entity("AlumniOrtServer.Models.City", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasMaxLength(50)
                        .HasColumnType("nvarchar(50)");

                    b.HasKey("Id");

                    b.ToTable("Cities");

                    b.HasData(
                        new
                        {
                            Id = 1,
                            Name = "אבן יהודה"
                        },
                        new
                        {
                            Id = 2,
                            Name = "אום אל-פחם"
                        },
                        new
                        {
                            Id = 3,
                            Name = "אופקים"
                        },
                        new
                        {
                            Id = 4,
                            Name = "אזור"
                        },
                        new
                        {
                            Id = 5,
                            Name = "אילת"
                        },
                        new
                        {
                            Id = 6,
                            Name = "אכסאל"
                        },
                        new
                        {
                            Id = 7,
                            Name = "אריאל"
                        },
                        new
                        {
                            Id = 8,
                            Name = "אשדוד"
                        },
                        new
                        {
                            Id = 9,
                            Name = "אשקלון"
                        },
                        new
                        {
                            Id = 10,
                            Name = "באר שבע"
                        },
                        new
                        {
                            Id = 11,
                            Name = "בית שאן"
                        },
                        new
                        {
                            Id = 12,
                            Name = "בית שמש"
                        },
                        new
                        {
                            Id = 13,
                            Name = "בני ברק"
                        },
                        new
                        {
                            Id = 14,
                            Name = "בת ים"
                        },
                        new
                        {
                            Id = 15,
                            Name = "גבעת שמואל"
                        },
                        new
                        {
                            Id = 16,
                            Name = "גבעתיים"
                        },
                        new
                        {
                            Id = 17,
                            Name = "דימונה"
                        },
                        new
                        {
                            Id = 18,
                            Name = "הוד השרון"
                        },
                        new
                        {
                            Id = 19,
                            Name = "הרצליה"
                        },
                        new
                        {
                            Id = 20,
                            Name = "חדרה"
                        },
                        new
                        {
                            Id = 21,
                            Name = "חולון"
                        },
                        new
                        {
                            Id = 22,
                            Name = "חיפה"
                        },
                        new
                        {
                            Id = 23,
                            Name = "טבריה"
                        },
                        new
                        {
                            Id = 24,
                            Name = "טירת כרמל"
                        },
                        new
                        {
                            Id = 25,
                            Name = "יבנה"
                        },
                        new
                        {
                            Id = 26,
                            Name = "יהוד"
                        },
                        new
                        {
                            Id = 27,
                            Name = "יקנעם"
                        },
                        new
                        {
                            Id = 28,
                            Name = "ירוחם"
                        },
                        new
                        {
                            Id = 29,
                            Name = "ירושלים"
                        },
                        new
                        {
                            Id = 30,
                            Name = "כפר סבא"
                        },
                        new
                        {
                            Id = 31,
                            Name = "כפר קאסם"
                        },
                        new
                        {
                            Id = 32,
                            Name = "כרמיאל"
                        },
                        new
                        {
                            Id = 33,
                            Name = "לוד"
                        },
                        new
                        {
                            Id = 34,
                            Name = "מגדל העמק"
                        },
                        new
                        {
                            Id = 35,
                            Name = "מודיעין"
                        },
                        new
                        {
                            Id = 36,
                            Name = "מודיעין עילית"
                        },
                        new
                        {
                            Id = 37,
                            Name = "מכבים רעות"
                        },
                        new
                        {
                            Id = 38,
                            Name = "מעלה אדומים"
                        },
                        new
                        {
                            Id = 39,
                            Name = "מעלות-תרשיחא"
                        },
                        new
                        {
                            Id = 40,
                            Name = "מצפה רמון"
                        },
                        new
                        {
                            Id = 41,
                            Name = "נס ציונה"
                        },
                        new
                        {
                            Id = 42,
                            Name = "נצרת"
                        },
                        new
                        {
                            Id = 43,
                            Name = "נצרת עילית"
                        },
                        new
                        {
                            Id = 44,
                            Name = "נשר"
                        },
                        new
                        {
                            Id = 45,
                            Name = "נתיבות"
                        },
                        new
                        {
                            Id = 46,
                            Name = "נתניה"
                        },
                        new
                        {
                            Id = 47,
                            Name = "עכו"
                        },
                        new
                        {
                            Id = 48,
                            Name = "עפולה"
                        },
                        new
                        {
                            Id = 49,
                            Name = "ערד"
                        },
                        new
                        {
                            Id = 50,
                            Name = "פתח תקווה"
                        },
                        new
                        {
                            Id = 51,
                            Name = "צפת"
                        },
                        new
                        {
                            Id = 52,
                            Name = "קיסריה"
                        },
                        new
                        {
                            Id = 53,
                            Name = "קרית אונו"
                        },
                        new
                        {
                            Id = 54,
                            Name = "קרית אתא"
                        },
                        new
                        {
                            Id = 55,
                            Name = "קרית ביאליק"
                        },
                        new
                        {
                            Id = 56,
                            Name = "קרית גת"
                        },
                        new
                        {
                            Id = 57,
                            Name = "קרית ים"
                        },
                        new
                        {
                            Id = 58,
                            Name = "קרית מוצקין"
                        },
                        new
                        {
                            Id = 59,
                            Name = "קרית שמונה"
                        },
                        new
                        {
                            Id = 60,
                            Name = "ראש העין"
                        },
                        new
                        {
                            Id = 61,
                            Name = "רעננה"
                        },
                        new
                        {
                            Id = 62,
                            Name = "ראשון לציון"
                        },
                        new
                        {
                            Id = 63,
                            Name = "רהט"
                        },
                        new
                        {
                            Id = 64,
                            Name = "רמת גן"
                        },
                        new
                        {
                            Id = 65,
                            Name = "רמת השרון"
                        },
                        new
                        {
                            Id = 66,
                            Name = "רמלה"
                        },
                        new
                        {
                            Id = 67,
                            Name = "שדרות"
                        },
                        new
                        {
                            Id = 68,
                            Name = "שפרעם"
                        },
                        new
                        {
                            Id = 69,
                            Name = "תל אביב"
                        },
                        new
                        {
                            Id = 70,
                            Name = "תל מונד"
                        },
                        new
                        {
                            Id = 71,
                            Name = "תפריח"
                        });
                });

            modelBuilder.Entity("AlumniOrtServer.Models.College", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasMaxLength(50)
                        .HasColumnType("nvarchar(50)");

                    b.HasKey("Id");

                    b.ToTable("Colleges");

                    b.HasData(
                        new
                        {
                            Id = 1,
                            Name = "אחר"
                        },
                        new
                        {
                            Id = 2,
                            Name = "אורט רחובות"
                        },
                        new
                        {
                            Id = 3,
                            Name = "אורט ירושלים"
                        },
                        new
                        {
                            Id = 4,
                            Name = "תל אביב - סינגאלובסקי"
                        },
                        new
                        {
                            Id = 5,
                            Name = "אורט כפר סבא"
                        },
                        new
                        {
                            Id = 6,
                            Name = "נתניה - הרמלין"
                        },
                        new
                        {
                            Id = 7,
                            Name = "אורט קריית ביאליק"
                        },
                        new
                        {
                            Id = 8,
                            Name = "כרמיאל - בראודה"
                        });
                });

            modelBuilder.Entity("AlumniOrtServer.Models.JobOffer", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<int>("EmployerId")
                        .HasColumnType("int");

                    b.Property<string>("JobDescription")
                        .IsRequired()
                        .HasMaxLength(500)
                        .HasColumnType("nvarchar(500)");

                    b.Property<string>("JobRequirements")
                        .HasMaxLength(300)
                        .HasColumnType("nvarchar(300)");

                    b.Property<string>("Logo")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("MailCV")
                        .HasMaxLength(50)
                        .HasColumnType("nvarchar(50)");

                    b.Property<string>("Phone")
                        .HasColumnType("nvarchar(max)");

                    b.Property<bool>("Publish")
                        .HasColumnType("bit");

                    b.Property<string>("TitleJob")
                        .IsRequired()
                        .HasMaxLength(50)
                        .HasColumnType("nvarchar(50)");

                    b.HasKey("Id");

                    b.HasIndex("EmployerId");

                    b.ToTable("JobOffers");

                    b.HasData(
                        new
                        {
                            Id = 1,
                            EmployerId = 2,
                            JobDescription = "fvfvfvf",
                            JobRequirements = "sdcdscsdcsd",
                            Logo = "Logo",
                            MailCV = "sh@gmail.com",
                            Phone = "05079855556",
                            Publish = true,
                            TitleJob = "junior"
                        });
                });

            modelBuilder.Entity("AlumniOrtServer.Models.StudyProgram", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasMaxLength(50)
                        .HasColumnType("nvarchar(50)");

                    b.HasKey("Id");

                    b.ToTable("StudyPrograms");

                    b.HasData(
                        new
                        {
                            Id = 2,
                            Name = "אדריכלות ועיצוב פנים"
                        },
                        new
                        {
                            Id = 3,
                            Name = "אדריכלות נוף"
                        },
                        new
                        {
                            Id = 4,
                            Name = "אלקטרוניקה"
                        },
                        new
                        {
                            Id = 5,
                            Name = "ביוטכנולוגיה"
                        },
                        new
                        {
                            Id = 6,
                            Name = "בניין/אזרחית"
                        },
                        new
                        {
                            Id = 7,
                            Name = "חשמל"
                        },
                        new
                        {
                            Id = 8,
                            Name = "טכנולוגיות מים"
                        },
                        new
                        {
                            Id = 9,
                            Name = "כימיה תרופתית"
                        },
                        new
                        {
                            Id = 10,
                            Name = "מכונות"
                        },
                        new
                        {
                            Id = 11,
                            Name = "עיצוב מדיה"
                        },
                        new
                        {
                            Id = 12,
                            Name = "עיצוב תעשייתי"
                        },
                        new
                        {
                            Id = 13,
                            Name = "קירור ומיזוג אוויר"
                        },
                        new
                        {
                            Id = 14,
                            Name = "תוכנה"
                        },
                        new
                        {
                            Id = 15,
                            Name = "מכשור רפואי"
                        },
                        new
                        {
                            Id = 16,
                            Name = "תעשייה וניהול"
                        });
                });

            modelBuilder.Entity("AlumniOrtServer.Models.Teacher", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<int>("AlumnusId")
                        .HasColumnType("int");

                    b.Property<string>("Description")
                        .IsRequired()
                        .HasMaxLength(150)
                        .HasColumnType("nvarchar(150)");

                    b.Property<string>("MailForStudy")
                        .IsRequired()
                        .HasMaxLength(50)
                        .HasColumnType("nvarchar(50)");

                    b.Property<string>("Rate")
                        .HasMaxLength(30)
                        .HasColumnType("nvarchar(30)");

                    b.HasKey("Id");

                    b.HasIndex("AlumnusId")
                        .IsUnique();

                    b.ToTable("Teacher");

                    b.HasData(
                        new
                        {
                            Id = 1,
                            AlumnusId = 1,
                            Description = "מרצה Full Stack במכללה 'מרכז החרדי להכשרה מקצועית', עיסוק עיקרי Angular. אשמח שנתקדם יחד :)",
                            MailForStudy = "maor0749@gmail",
                            Rate = "90"
                        });
                });

            modelBuilder.Entity("AlumniOrtServer.Models.User", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Discriminator")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("FirstName")
                        .IsRequired()
                        .HasMaxLength(150)
                        .HasColumnType("nvarchar(150)");

                    b.Property<string>("LastName")
                        .IsRequired()
                        .HasMaxLength(150)
                        .HasColumnType("nvarchar(150)");

                    b.Property<string>("Mail")
                        .IsRequired()
                        .HasMaxLength(150)
                        .HasColumnType("nvarchar(150)");

                    b.Property<string>("Password")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Phone")
                        .HasMaxLength(50)
                        .HasColumnType("nvarchar(50)");

                    b.Property<int>("RoleId")
                        .HasColumnType("int");

                    b.HasKey("Id");

                    b.HasIndex("RoleId");

                    b.ToTable("Users");

                    b.HasDiscriminator<string>("Discriminator").HasValue("User");
                });

            modelBuilder.Entity("OrtAlumniWeb.AlumniOrtServer.Data.Entities.Article", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasColumnName("Id")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Author")
                        .IsRequired()
                        .HasMaxLength(30)
                        .HasColumnType("nvarchar(30)")
                        .HasColumnName("Author");

                    b.Property<int>("CategoryId")
                        .HasColumnType("int");

                    b.Property<DateTime>("Date")
                        .HasColumnType("datetime2")
                        .HasColumnName("Date");

                    b.Property<string>("Detail")
                        .IsRequired()
                        .HasMaxLength(7000)
                        .HasColumnType("nvarchar(max)")
                        .HasColumnName("Detail");

                    b.Property<string>("Heading")
                        .IsRequired()
                        .HasMaxLength(80)
                        .HasColumnType("nvarchar(80)")
                        .HasColumnName("Heading");

                    b.Property<string>("Img")
                        .HasColumnType("nvarchar(max)")
                        .HasColumnName("Img");

                    b.Property<string>("OriginalImgName")
                        .HasColumnType("nvarchar(max)")
                        .HasColumnName("OriginalImgName");

                    b.Property<string>("SubHeading")
                        .HasMaxLength(1000)
                        .HasColumnType("nvarchar(1000)")
                        .HasColumnName("SubHeading");

                    b.HasKey("Id");

                    b.HasIndex("CategoryId");

                    b.ToTable("Articles");
                });

            modelBuilder.Entity("OrtAlumniWeb.AlumniOrtServer.Data.Entities.Category", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasColumnName("Id")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Name")
                        .HasColumnType("nvarchar(max)")
                        .HasColumnName("Name");

                    b.HasKey("Id");

                    b.ToTable("Categories");

                    b.HasData(
                        new
                        {
                            Id = 3,
                            Name = "אירועים"
                        },
                        new
                        {
                            Id = 4,
                            Name = "חדשות"
                        },
                        new
                        {
                            Id = 5,
                            Name = "חינוך"
                        });
                });

            modelBuilder.Entity("OrtAlumniWeb.AlumniOrtServer.Data.Entities.Logo", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<byte[]>("Bytes")
                        .HasColumnType("varbinary(max)");

                    b.Property<string>("Description")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Discriminator")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("FileExtension")
                        .HasColumnType("nvarchar(max)");

                    b.Property<decimal>("Size")
                        .HasPrecision(18, 2)
                        .HasColumnType("decimal(18,2)");

                    b.HasKey("Id");

                    b.ToTable("Logos");

                    b.HasDiscriminator<string>("Discriminator").HasValue("Logo");
                });

            modelBuilder.Entity("AlumniOrtServer.Data.Entities.Admin", b =>
                {
                    b.HasBaseType("AlumniOrtServer.Models.User");

                    b.HasDiscriminator().HasValue("Admin");

                    b.HasData(
                        new
                        {
                            Id = 3,
                            FirstName = "Maor",
                            LastName = "Levy",
                            Mail = "maor79855@gmail.com",
                            Password = "4g9q7V0h3ZajxUpPiYbgaA==",
                            RoleId = 1
                        });
                });

            modelBuilder.Entity("AlumniOrtServer.Models.Alumnus", b =>
                {
                    b.HasBaseType("AlumniOrtServer.Models.User");

                    b.Property<string>("CardId")
                        .IsRequired()
                        .ValueGeneratedOnUpdateSometimes()
                        .HasMaxLength(150)
                        .HasColumnType("nvarchar(150)")
                        .HasColumnName("CardId");

                    b.Property<int>("CityId")
                        .ValueGeneratedOnUpdateSometimes()
                        .HasColumnType("int")
                        .HasColumnName("CityId");

                    b.Property<int>("CollegeId")
                        .ValueGeneratedOnUpdateSometimes()
                        .HasColumnType("int")
                        .HasColumnName("CollegeId");

                    b.Property<DateTime>("DateOfBirth")
                        .ValueGeneratedOnUpdateSometimes()
                        .HasColumnType("date")
                        .HasColumnName("DateOfBirth");

                    b.Property<string>("Linkedin")
                        .HasMaxLength(50)
                        .HasColumnType("nvarchar(50)");

                    b.Property<string>("StudyFinishYear")
                        .HasMaxLength(30)
                        .HasColumnType("nvarchar(30)");

                    b.Property<int>("StudyProgramId")
                        .ValueGeneratedOnUpdateSometimes()
                        .HasColumnType("int")
                        .HasColumnName("StudyProgramId");

                    b.Property<string>("StudyStartYear")
                        .HasMaxLength(30)
                        .HasColumnType("nvarchar(30)")
                        .HasColumnName("Alumnus_StudyStartYear");

                    b.Property<string>("WorkPlace")
                        .HasMaxLength(150)
                        .HasColumnType("nvarchar(150)");

                    b.HasIndex("CityId");

                    b.HasIndex("CollegeId");

                    b.HasIndex("StudyProgramId");

                    b.HasDiscriminator().HasValue("Alumnus");

                    b.HasData(
                        new
                        {
                            Id = 1,
                            FirstName = "Maor",
                            LastName = "Levy",
                            Mail = "maor0749@gmail",
                            Password = "4g9q7V0h3ZajxUpPiYbgaA==",
                            Phone = "0507985556",
                            RoleId = 3,
                            CardId = "203053764",
                            CityId = 3,
                            CollegeId = 3,
                            DateOfBirth = new DateTime(1993, 1, 29, 0, 0, 0, 0, DateTimeKind.Unspecified),
                            Linkedin = "https://www.linkedin.com/in/maor-levy-565237173/",
                            StudyFinishYear = "2020",
                            StudyProgramId = 14,
                            StudyStartYear = "2018",
                            WorkPlace = "מרכז חרידי להכשרה מקצועית"
                        });
                });

            modelBuilder.Entity("AlumniOrtServer.Models.Employer", b =>
                {
                    b.HasBaseType("AlumniOrtServer.Models.User");

                    b.Property<string>("CompanyAddress")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("CompanyName")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("ContactRole")
                        .HasMaxLength(150)
                        .HasColumnType("nvarchar(150)");

                    b.Property<string>("TypeOfBusiness")
                        .HasColumnType("nvarchar(max)");

                    b.HasDiscriminator().HasValue("Employer");

                    b.HasData(
                        new
                        {
                            Id = 2,
                            FirstName = "maor",
                            LastName = "Levy",
                            Mail = "maor1100@gmail.com",
                            Password = "4g9q7V0h3ZajxUpPiYbgaA==",
                            RoleId = 2,
                            CompanyAddress = "Jerusalem",
                            CompanyName = "Elbit",
                            ContactRole = "CTO",
                            TypeOfBusiness = "HI"
                        });
                });

            modelBuilder.Entity("AlumniOrtServer.Models.Student", b =>
                {
                    b.HasBaseType("AlumniOrtServer.Models.User");

                    b.Property<string>("CardId")
                        .IsRequired()
                        .ValueGeneratedOnUpdateSometimes()
                        .HasMaxLength(150)
                        .HasColumnType("nvarchar(150)")
                        .HasColumnName("CardId");

                    b.Property<int>("CityId")
                        .ValueGeneratedOnUpdateSometimes()
                        .HasColumnType("int")
                        .HasColumnName("CityId");

                    b.Property<int>("CollegeId")
                        .ValueGeneratedOnUpdateSometimes()
                        .HasColumnType("int")
                        .HasColumnName("CollegeId");

                    b.Property<DateTime>("DateOfBirth")
                        .ValueGeneratedOnUpdateSometimes()
                        .HasColumnType("date")
                        .HasColumnName("DateOfBirth");

                    b.Property<int>("StudyProgramId")
                        .ValueGeneratedOnUpdateSometimes()
                        .HasColumnType("int")
                        .HasColumnName("StudyProgramId");

                    b.Property<string>("StudyStartYear")
                        .IsRequired()
                        .HasMaxLength(30)
                        .HasColumnType("nvarchar(30)");

                    b.HasIndex("CityId");

                    b.HasIndex("CollegeId");

                    b.HasIndex("StudyProgramId");

                    b.HasDiscriminator().HasValue("Student");
                });

            modelBuilder.Entity("OrtAlumniWeb.AlumniOrtServer.Data.Entities.TeacherLogo", b =>
                {
                    b.HasBaseType("OrtAlumniWeb.AlumniOrtServer.Data.Entities.Logo");

                    b.Property<int>("TeacherId")
                        .HasColumnType("int");

                    b.HasIndex("TeacherId")
                        .IsUnique()
                        .HasFilter("[TeacherId] IS NOT NULL");

                    b.HasDiscriminator().HasValue("TeacherLogo");
                });

            modelBuilder.Entity("AlumniOrtServer.Data.Entities.Claim", b =>
                {
                    b.HasOne("AlumniOrtServer.Models.User", "User")
                        .WithMany("Claims")
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("User");
                });

            modelBuilder.Entity("AlumniOrtServer.Data.Entities.Course_StudyProgram", b =>
                {
                    b.HasOne("AlumniOrtServer.Models.StudyProgram", "studyProgram")
                        .WithMany("Course_StudyProgram")
                        .HasForeignKey("StudyProgramId")
                        .OnDelete(DeleteBehavior.Restrict)
                        .IsRequired();

                    b.Navigation("studyProgram");
                });

            modelBuilder.Entity("AlumniOrtServer.Data.Entities.JobOffer_City", b =>
                {
                    b.HasOne("AlumniOrtServer.Models.City", "City")
                        .WithMany("JobOffer_Cities")
                        .HasForeignKey("CityId")
                        .OnDelete(DeleteBehavior.Restrict)
                        .IsRequired();

                    b.HasOne("AlumniOrtServer.Models.JobOffer", "JobOffer")
                        .WithMany("JobOffer_Cities")
                        .HasForeignKey("JobOfferId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("City");

                    b.Navigation("JobOffer");
                });

            modelBuilder.Entity("AlumniOrtServer.Data.Entities.JobOffer_StudyProgram", b =>
                {
                    b.HasOne("AlumniOrtServer.Models.JobOffer", "JobOffer")
                        .WithMany("JobOffer_StudyPrograms")
                        .HasForeignKey("JobOfferId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("AlumniOrtServer.Models.StudyProgram", "StudyProgram")
                        .WithMany("JobOffer_StudyPrograms")
                        .HasForeignKey("StudyProgramId")
                        .OnDelete(DeleteBehavior.Restrict)
                        .IsRequired();

                    b.Navigation("JobOffer");

                    b.Navigation("StudyProgram");
                });

            modelBuilder.Entity("AlumniOrtServer.Data.Entities.ModeStudy_City", b =>
                {
                    b.HasOne("AlumniOrtServer.Models.City", "City")
                        .WithMany("ModeStudy_Cities")
                        .HasForeignKey("CityId")
                        .OnDelete(DeleteBehavior.Restrict)
                        .IsRequired();

                    b.HasOne("AlumniOrtServer.Data.Entities.ModeStudy", "ModeStudy")
                        .WithMany("ModeStudy_Cities")
                        .HasForeignKey("ModeStudyId")
                        .OnDelete(DeleteBehavior.Restrict)
                        .IsRequired();

                    b.HasOne("AlumniOrtServer.Models.Teacher", "Teacher")
                        .WithMany("ModeStudy_Cities")
                        .HasForeignKey("TeacherId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("City");

                    b.Navigation("ModeStudy");

                    b.Navigation("Teacher");
                });

            modelBuilder.Entity("AlumniOrtServer.Data.Entities.TeacherCourse", b =>
                {
                    b.HasOne("AlumniOrtServer.Data.Entities.Course_StudyProgram", "Course_StudyProgram")
                        .WithMany("TeacherCourses")
                        .HasForeignKey("Course_StudyProgramId")
                        .OnDelete(DeleteBehavior.Restrict)
                        .IsRequired();

                    b.HasOne("AlumniOrtServer.Models.Teacher", "Teacher")
                        .WithMany("TeacherCourses")
                        .HasForeignKey("TeacherId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Course_StudyProgram");

                    b.Navigation("Teacher");
                });

            modelBuilder.Entity("AlumniOrtServer.Data.Entities.TeacherLanguage", b =>
                {
                    b.HasOne("AlumniOrtServer.Data.Entities.Language", "Language")
                        .WithMany("TeacherLanguages")
                        .HasForeignKey("LanguageId")
                        .OnDelete(DeleteBehavior.Restrict)
                        .IsRequired();

                    b.HasOne("AlumniOrtServer.Models.Teacher", "Teacher")
                        .WithMany("TeacherLanguages")
                        .HasForeignKey("TeacherId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Language");

                    b.Navigation("Teacher");
                });

            modelBuilder.Entity("AlumniOrtServer.Models.JobOffer", b =>
                {
                    b.HasOne("AlumniOrtServer.Models.Employer", "Employer")
                        .WithMany("JobOffers")
                        .HasForeignKey("EmployerId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Employer");
                });

            modelBuilder.Entity("AlumniOrtServer.Models.Teacher", b =>
                {
                    b.HasOne("AlumniOrtServer.Models.Alumnus", "Alumanus")
                        .WithOne("teacher")
                        .HasForeignKey("AlumniOrtServer.Models.Teacher", "AlumnusId")
                        .OnDelete(DeleteBehavior.Restrict)
                        .IsRequired();

                    b.Navigation("Alumanus");
                });

            modelBuilder.Entity("AlumniOrtServer.Models.User", b =>
                {
                    b.HasOne("AlumniOrtServer.Data.Entities.Role", "Role")
                        .WithMany("Users")
                        .HasForeignKey("RoleId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Role");
                });

            modelBuilder.Entity("OrtAlumniWeb.AlumniOrtServer.Data.Entities.Article", b =>
                {
                    b.HasOne("OrtAlumniWeb.AlumniOrtServer.Data.Entities.Category", "Category")
                        .WithMany()
                        .HasForeignKey("CategoryId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Category");
                });

            modelBuilder.Entity("AlumniOrtServer.Models.Alumnus", b =>
                {
                    b.HasOne("AlumniOrtServer.Models.City", "City")
                        .WithMany()
                        .HasForeignKey("CityId")
                        .OnDelete(DeleteBehavior.Restrict)
                        .IsRequired();

                    b.HasOne("AlumniOrtServer.Models.College", "College")
                        .WithMany()
                        .HasForeignKey("CollegeId")
                        .OnDelete(DeleteBehavior.Restrict)
                        .IsRequired();

                    b.HasOne("AlumniOrtServer.Models.StudyProgram", "StudyProgram")
                        .WithMany()
                        .HasForeignKey("StudyProgramId")
                        .OnDelete(DeleteBehavior.Restrict)
                        .IsRequired();

                    b.Navigation("City");

                    b.Navigation("College");

                    b.Navigation("StudyProgram");
                });

            modelBuilder.Entity("AlumniOrtServer.Models.Student", b =>
                {
                    b.HasOne("AlumniOrtServer.Models.City", "City")
                        .WithMany()
                        .HasForeignKey("CityId")
                        .OnDelete(DeleteBehavior.Restrict)
                        .IsRequired();

                    b.HasOne("AlumniOrtServer.Models.College", "College")
                        .WithMany()
                        .HasForeignKey("CollegeId")
                        .OnDelete(DeleteBehavior.Restrict)
                        .IsRequired();

                    b.HasOne("AlumniOrtServer.Models.StudyProgram", "StudyProgram")
                        .WithMany()
                        .HasForeignKey("StudyProgramId")
                        .OnDelete(DeleteBehavior.Restrict)
                        .IsRequired();

                    b.Navigation("City");

                    b.Navigation("College");

                    b.Navigation("StudyProgram");
                });

            modelBuilder.Entity("OrtAlumniWeb.AlumniOrtServer.Data.Entities.TeacherLogo", b =>
                {
                    b.HasOne("AlumniOrtServer.Models.Teacher", "Teacher")
                        .WithOne("Logo")
                        .HasForeignKey("OrtAlumniWeb.AlumniOrtServer.Data.Entities.TeacherLogo", "TeacherId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Teacher");
                });

            modelBuilder.Entity("AlumniOrtServer.Data.Entities.Course_StudyProgram", b =>
                {
                    b.Navigation("TeacherCourses");
                });

            modelBuilder.Entity("AlumniOrtServer.Data.Entities.Language", b =>
                {
                    b.Navigation("TeacherLanguages");
                });

            modelBuilder.Entity("AlumniOrtServer.Data.Entities.ModeStudy", b =>
                {
                    b.Navigation("ModeStudy_Cities");
                });

            modelBuilder.Entity("AlumniOrtServer.Data.Entities.Role", b =>
                {
                    b.Navigation("Users");
                });

            modelBuilder.Entity("AlumniOrtServer.Models.City", b =>
                {
                    b.Navigation("JobOffer_Cities");

                    b.Navigation("ModeStudy_Cities");
                });

            modelBuilder.Entity("AlumniOrtServer.Models.JobOffer", b =>
                {
                    b.Navigation("JobOffer_Cities");

                    b.Navigation("JobOffer_StudyPrograms");
                });

            modelBuilder.Entity("AlumniOrtServer.Models.StudyProgram", b =>
                {
                    b.Navigation("Course_StudyProgram");

                    b.Navigation("JobOffer_StudyPrograms");
                });

            modelBuilder.Entity("AlumniOrtServer.Models.Teacher", b =>
                {
                    b.Navigation("Logo");

                    b.Navigation("ModeStudy_Cities");

                    b.Navigation("TeacherCourses");

                    b.Navigation("TeacherLanguages");
                });

            modelBuilder.Entity("AlumniOrtServer.Models.User", b =>
                {
                    b.Navigation("Claims");
                });

            modelBuilder.Entity("AlumniOrtServer.Models.Alumnus", b =>
                {
                    b.Navigation("teacher");
                });

            modelBuilder.Entity("AlumniOrtServer.Models.Employer", b =>
                {
                    b.Navigation("JobOffers");
                });
#pragma warning restore 612, 618
        }
    }
}
