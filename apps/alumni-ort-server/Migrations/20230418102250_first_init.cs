using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace OrtAlumniWeb.AlumniOrtServer.Migrations
{
  public partial class first_init : Migration
  {
    protected override void Up(MigrationBuilder migrationBuilder)
    {
      migrationBuilder.CreateTable(
          name: "Categories",
          columns: table => new
          {
            Id = table.Column<int>(type: "int", nullable: false)
                  .Annotation("SqlServer:Identity", "1, 1"),
            Name = table.Column<string>(type: "nvarchar(max)", nullable: true)
          },
          constraints: table =>
          {
            table.PrimaryKey("PK_Categories", x => x.Id);
          });

      migrationBuilder.CreateTable(
          name: "Cities",
          columns: table => new
          {
            Id = table.Column<int>(type: "int", nullable: false)
                  .Annotation("SqlServer:Identity", "1, 1"),
            Name = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: false)
          },
          constraints: table =>
          {
            table.PrimaryKey("PK_Cities", x => x.Id);
          });

      migrationBuilder.CreateTable(
          name: "Colleges",
          columns: table => new
          {
            Id = table.Column<int>(type: "int", nullable: false)
                  .Annotation("SqlServer:Identity", "1, 1"),
            Name = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: false)
          },
          constraints: table =>
          {
            table.PrimaryKey("PK_Colleges", x => x.Id);
          });

      migrationBuilder.CreateTable(
          name: "Languages",
          columns: table => new
          {
            Id = table.Column<int>(type: "int", nullable: false)
                  .Annotation("SqlServer:Identity", "1, 1"),
            Name = table.Column<string>(type: "nvarchar(max)", nullable: true)
          },
          constraints: table =>
          {
            table.PrimaryKey("PK_Languages", x => x.Id);
          });

      migrationBuilder.CreateTable(
          name: "ModeStudies",
          columns: table => new
          {
            ModeStudyId = table.Column<int>(type: "int", nullable: false)
                  .Annotation("SqlServer:Identity", "1, 1"),
            Name = table.Column<string>(type: "nvarchar(15)", maxLength: 15, nullable: false)
          },
          constraints: table =>
          {
            table.PrimaryKey("PK_ModeStudies", x => x.ModeStudyId);
          });

      migrationBuilder.CreateTable(
          name: "Role",
          columns: table => new
          {
            Id = table.Column<int>(type: "int", nullable: false)
                  .Annotation("SqlServer:Identity", "1, 1"),
            Name = table.Column<string>(type: "nvarchar(max)", nullable: true)
          },
          constraints: table =>
          {
            table.PrimaryKey("PK_Role", x => x.Id);
          });

      migrationBuilder.CreateTable(
          name: "StudyPrograms",
          columns: table => new
          {
            Id = table.Column<int>(type: "int", nullable: false)
                  .Annotation("SqlServer:Identity", "1, 1"),
            Name = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: false)
          },
          constraints: table =>
          {
            table.PrimaryKey("PK_StudyPrograms", x => x.Id);
          });

      migrationBuilder.CreateTable(
          name: "Articles",
          columns: table => new
          {
            Id = table.Column<int>(type: "int", nullable: false)
                  .Annotation("SqlServer:Identity", "1, 1"),
            Heading = table.Column<string>(type: "nvarchar(80)", maxLength: 80, nullable: false),
            SubHeading = table.Column<string>(type: "nvarchar(1000)", maxLength: 1000, nullable: true),
            Date = table.Column<DateTime>(type: "datetime2", nullable: false),
            Img = table.Column<string>(type: "nvarchar(max)", nullable: true),
            OriginalImgName = table.Column<string>(type: "nvarchar(max)", nullable: true),
            Author = table.Column<string>(type: "nvarchar(30)", maxLength: 30, nullable: false),
            Detail = table.Column<string>(type: "nvarchar(max)", maxLength: 7000, nullable: false),
            CategoryId = table.Column<int>(type: "int", nullable: false)
          },
          constraints: table =>
          {
            table.PrimaryKey("PK_Articles", x => x.Id);
            table.ForeignKey(
                      name: "FK_Articles_Categories_CategoryId",
                      column: x => x.CategoryId,
                      principalTable: "Categories",
                      principalColumn: "Id",
                      onDelete: ReferentialAction.Cascade);
          });

      migrationBuilder.CreateTable(
          name: "Course_StudyPrograms",
          columns: table => new
          {
            Id = table.Column<int>(type: "int", nullable: false)
                  .Annotation("SqlServer:Identity", "1, 1"),
            StudyProgramId = table.Column<int>(type: "int", nullable: false),
            Name = table.Column<string>(type: "nvarchar(max)", nullable: true)
          },
          constraints: table =>
          {
            table.PrimaryKey("PK_Course_StudyPrograms", x => x.Id);
            table.ForeignKey(
                      name: "FK_Course_StudyPrograms_StudyPrograms_StudyProgramId",
                      column: x => x.StudyProgramId,
                      principalTable: "StudyPrograms",
                      principalColumn: "Id",
                      onDelete: ReferentialAction.Restrict);
          });

      migrationBuilder.CreateTable(
          name: "Users",
          columns: table => new
          {
            Id = table.Column<int>(type: "int", nullable: false)
                  .Annotation("SqlServer:Identity", "1, 1"),
            FirstName = table.Column<string>(type: "nvarchar(150)", maxLength: 150, nullable: false),
            LastName = table.Column<string>(type: "nvarchar(150)", maxLength: 150, nullable: false),
            Mail = table.Column<string>(type: "nvarchar(150)", maxLength: 150, nullable: false),
            Password = table.Column<string>(type: "nvarchar(max)", nullable: false),
            Phone = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: true),
            RoleId = table.Column<int>(type: "int", nullable: false),
            Discriminator = table.Column<string>(type: "nvarchar(max)", nullable: false),
            Linkedin = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: true),
            WorkPlace = table.Column<string>(type: "nvarchar(150)", maxLength: 150, nullable: true),
            Alumnus_StudyStartYear = table.Column<string>(type: "nvarchar(30)", maxLength: 30, nullable: true),
            StudyFinishYear = table.Column<string>(type: "nvarchar(30)", maxLength: 30, nullable: true),
            CardId = table.Column<string>(type: "nvarchar(150)", maxLength: 150, nullable: true),
            DateOfBirth = table.Column<DateTime>(type: "date", nullable: true),
            CityId = table.Column<int>(type: "int", nullable: true),
            CollegeId = table.Column<int>(type: "int", nullable: true),
            StudyProgramId = table.Column<int>(type: "int", nullable: true),
            ContactRole = table.Column<string>(type: "nvarchar(150)", maxLength: 150, nullable: true),
            CompanyName = table.Column<string>(type: "nvarchar(max)", nullable: true),
            TypeOfBusiness = table.Column<string>(type: "nvarchar(max)", nullable: true),
            CompanyAddress = table.Column<string>(type: "nvarchar(max)", nullable: true),
            StudyStartYear = table.Column<string>(type: "nvarchar(30)", maxLength: 30, nullable: true)
          },
          constraints: table =>
          {
            table.PrimaryKey("PK_Users", x => x.Id);
            table.ForeignKey(
                      name: "FK_Users_Cities_CityId",
                      column: x => x.CityId,
                      principalTable: "Cities",
                      principalColumn: "Id",
                      onDelete: ReferentialAction.Restrict);
            table.ForeignKey(
                      name: "FK_Users_Colleges_CollegeId",
                      column: x => x.CollegeId,
                      principalTable: "Colleges",
                      principalColumn: "Id",
                      onDelete: ReferentialAction.Restrict);
            table.ForeignKey(
                      name: "FK_Users_Role_RoleId",
                      column: x => x.RoleId,
                      principalTable: "Role",
                      principalColumn: "Id",
                      onDelete: ReferentialAction.Cascade);
            table.ForeignKey(
                      name: "FK_Users_StudyPrograms_StudyProgramId",
                      column: x => x.StudyProgramId,
                      principalTable: "StudyPrograms",
                      principalColumn: "Id",
                      onDelete: ReferentialAction.Restrict);
          });

      migrationBuilder.CreateTable(
          name: "Claim",
          columns: table => new
          {
            Id = table.Column<int>(type: "int", nullable: false)
                  .Annotation("SqlServer:Identity", "1, 1"),
            Type = table.Column<string>(type: "nvarchar(max)", nullable: true),
            Value = table.Column<string>(type: "nvarchar(max)", nullable: true),
            UserId = table.Column<int>(type: "int", nullable: false)
          },
          constraints: table =>
          {
            table.PrimaryKey("PK_Claim", x => x.Id);
            table.ForeignKey(
                      name: "FK_Claim_Users_UserId",
                      column: x => x.UserId,
                      principalTable: "Users",
                      principalColumn: "Id",
                      onDelete: ReferentialAction.Cascade);
          });

      migrationBuilder.CreateTable(
          name: "JobOffers",
          columns: table => new
          {
            Id = table.Column<int>(type: "int", nullable: false)
                  .Annotation("SqlServer:Identity", "1, 1"),
            TitleJob = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: false),
            MailCV = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: true),
            JobDescription = table.Column<string>(type: "nvarchar(500)", maxLength: 500, nullable: false),
            JobRequirements = table.Column<string>(type: "nvarchar(300)", maxLength: 300, nullable: true),
            Phone = table.Column<string>(type: "nvarchar(max)", nullable: true),
            Publish = table.Column<bool>(type: "bit", nullable: false),
            Logo = table.Column<string>(type: "nvarchar(max)", nullable: true),
            EmployerId = table.Column<int>(type: "int", nullable: false)
          },
          constraints: table =>
          {
            table.PrimaryKey("PK_JobOffers", x => x.Id);
            table.ForeignKey(
                      name: "FK_JobOffers_Users_EmployerId",
                      column: x => x.EmployerId,
                      principalTable: "Users",
                      principalColumn: "Id",
                      onDelete: ReferentialAction.Cascade);
          });

      migrationBuilder.CreateTable(
          name: "Teacher",
          columns: table => new
          {
            Id = table.Column<int>(type: "int", nullable: false)
                  .Annotation("SqlServer:Identity", "1, 1"),
            MailForStudy = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: false),
            Rate = table.Column<string>(type: "nvarchar(30)", maxLength: 30, nullable: true),
            Description = table.Column<string>(type: "nvarchar(150)", maxLength: 150, nullable: false),
            AlumnusId = table.Column<int>(type: "int", nullable: false)
          },
          constraints: table =>
          {
            table.PrimaryKey("PK_Teacher", x => x.Id);
            table.ForeignKey(
                      name: "FK_Teacher_Users_AlumnusId",
                      column: x => x.AlumnusId,
                      principalTable: "Users",
                      principalColumn: "Id",
                      onDelete: ReferentialAction.Restrict);
          });

      migrationBuilder.CreateTable(
          name: "JobOffer_Cities",
          columns: table => new
          {
            JobOfferId = table.Column<int>(type: "int", nullable: false),
            CityId = table.Column<int>(type: "int", nullable: false)
          },
          constraints: table =>
          {
            table.PrimaryKey("PK_JobOffer_Cities", x => new { x.CityId, x.JobOfferId });
            table.ForeignKey(
                      name: "FK_JobOffer_Cities_Cities_CityId",
                      column: x => x.CityId,
                      principalTable: "Cities",
                      principalColumn: "Id",
                      onDelete: ReferentialAction.Restrict);
            table.ForeignKey(
                      name: "FK_JobOffer_Cities_JobOffers_JobOfferId",
                      column: x => x.JobOfferId,
                      principalTable: "JobOffers",
                      principalColumn: "Id",
                      onDelete: ReferentialAction.Cascade);
          });

      migrationBuilder.CreateTable(
          name: "JobOffer_StudyPrograms",
          columns: table => new
          {
            JobOfferId = table.Column<int>(type: "int", nullable: false),
            StudyProgramId = table.Column<int>(type: "int", nullable: false)
          },
          constraints: table =>
          {
            table.PrimaryKey("PK_JobOffer_StudyPrograms", x => new { x.StudyProgramId, x.JobOfferId });
            table.ForeignKey(
                      name: "FK_JobOffer_StudyPrograms_JobOffers_JobOfferId",
                      column: x => x.JobOfferId,
                      principalTable: "JobOffers",
                      principalColumn: "Id",
                      onDelete: ReferentialAction.Cascade);
            table.ForeignKey(
                      name: "FK_JobOffer_StudyPrograms_StudyPrograms_StudyProgramId",
                      column: x => x.StudyProgramId,
                      principalTable: "StudyPrograms",
                      principalColumn: "Id",
                      onDelete: ReferentialAction.Restrict);
          });

      migrationBuilder.CreateTable(
          name: "Logos",
          columns: table => new
          {
            Id = table.Column<int>(type: "int", nullable: false)
                  .Annotation("SqlServer:Identity", "1, 1"),
            Bytes = table.Column<byte[]>(type: "varbinary(max)", nullable: true),
            Description = table.Column<string>(type: "nvarchar(max)", nullable: true),
            FileExtension = table.Column<string>(type: "nvarchar(max)", nullable: true),
            Size = table.Column<decimal>(type: "decimal(18,2)", precision: 18, scale: 2, nullable: false),
            Discriminator = table.Column<string>(type: "nvarchar(max)", nullable: false),
            TeacherId = table.Column<int>(type: "int", nullable: true)
          },
          constraints: table =>
          {
            table.PrimaryKey("PK_Logos", x => x.Id);
            table.ForeignKey(
                      name: "FK_Logos_Teacher_TeacherId",
                      column: x => x.TeacherId,
                      principalTable: "Teacher",
                      principalColumn: "Id",
                      onDelete: ReferentialAction.Cascade);
          });

      migrationBuilder.CreateTable(
          name: "ModeStudy_Cities",
          columns: table => new
          {
            ModeStudyId = table.Column<int>(type: "int", nullable: false),
            CityId = table.Column<int>(type: "int", nullable: false),
            TeacherId = table.Column<int>(type: "int", nullable: false)
          },
          constraints: table =>
          {
            table.PrimaryKey("PK_ModeStudy_Cities", x => new { x.ModeStudyId, x.CityId, x.TeacherId });
            table.ForeignKey(
                      name: "FK_ModeStudy_Cities_Cities_CityId",
                      column: x => x.CityId,
                      principalTable: "Cities",
                      principalColumn: "Id",
                      onDelete: ReferentialAction.Restrict);
            table.ForeignKey(
                      name: "FK_ModeStudy_Cities_ModeStudies_ModeStudyId",
                      column: x => x.ModeStudyId,
                      principalTable: "ModeStudies",
                      principalColumn: "ModeStudyId",
                      onDelete: ReferentialAction.Restrict);
            table.ForeignKey(
                      name: "FK_ModeStudy_Cities_Teacher_TeacherId",
                      column: x => x.TeacherId,
                      principalTable: "Teacher",
                      principalColumn: "Id",
                      onDelete: ReferentialAction.Cascade);
          });

      migrationBuilder.CreateTable(
          name: "TeacherCourses",
          columns: table => new
          {
            TeacherId = table.Column<int>(type: "int", nullable: false),
            Course_StudyProgramId = table.Column<int>(type: "int", nullable: false)
          },
          constraints: table =>
          {
            table.PrimaryKey("PK_TeacherCourses", x => new { x.Course_StudyProgramId, x.TeacherId });
            table.ForeignKey(
                      name: "FK_TeacherCourses_Course_StudyPrograms_Course_StudyProgramId",
                      column: x => x.Course_StudyProgramId,
                      principalTable: "Course_StudyPrograms",
                      principalColumn: "Id",
                      onDelete: ReferentialAction.Restrict);
            table.ForeignKey(
                      name: "FK_TeacherCourses_Teacher_TeacherId",
                      column: x => x.TeacherId,
                      principalTable: "Teacher",
                      principalColumn: "Id",
                      onDelete: ReferentialAction.Cascade);
          });

      migrationBuilder.CreateTable(
          name: "TeacherLanguages",
          columns: table => new
          {
            TeacherId = table.Column<int>(type: "int", nullable: false),
            LanguageId = table.Column<int>(type: "int", nullable: false)
          },
          constraints: table =>
          {
            table.PrimaryKey("PK_TeacherLanguages", x => new { x.LanguageId, x.TeacherId });
            table.ForeignKey(
                      name: "FK_TeacherLanguages_Languages_LanguageId",
                      column: x => x.LanguageId,
                      principalTable: "Languages",
                      principalColumn: "Id",
                      onDelete: ReferentialAction.Restrict);
            table.ForeignKey(
                      name: "FK_TeacherLanguages_Teacher_TeacherId",
                      column: x => x.TeacherId,
                      principalTable: "Teacher",
                      principalColumn: "Id",
                      onDelete: ReferentialAction.Cascade);
          });

      migrationBuilder.InsertData(
          table: "Categories",
          columns: new[] { "Id", "Name" },
          values: new object[,]
          {
                    { 5, "חינוך" },
                    { 3, "אירועים" },
                    { 4, "חדשות" }
          });

      migrationBuilder.InsertData(
          table: "Cities",
          columns: new[] { "Id", "Name" },
          values: new object[,]
          {
                    { 50, "פתח תקווה" },
                    { 49, "ערד" },
                    { 48, "עפולה" },
                    { 47, "עכו" },
                    { 46, "נתניה" },
                    { 45, "נתיבות" },
                    { 44, "נשר" },
                    { 42, "נצרת" },
                    { 41, "נס ציונה" },
                    { 40, "מצפה רמון" },
                    { 39, "מעלות-תרשיחא" },
                    { 38, "מעלה אדומים" },
                    { 37, "מכבים רעות" },
                    { 36, "מודיעין עילית" },
                    { 35, "מודיעין" },
                    { 34, "מגדל העמק" },
                    { 51, "צפת" },
                    { 52, "קיסריה" },
                    { 53, "קרית אונו" },
                    { 54, "קרית אתא" },
                    { 71, "תפריח" },
                    { 70, "תל מונד" },
                    { 69, "תל אביב" },
                    { 68, "שפרעם" },
                    { 67, "שדרות" },
                    { 66, "רמלה" },
                    { 65, "רמת השרון" },
                    { 64, "רמת גן" },
                    { 63, "רהט" },
                    { 62, "ראשון לציון" },
                    { 61, "רעננה" },
                    { 60, "ראש העין" },
                    { 59, "קרית שמונה" },
                    { 58, "קרית מוצקין" },
                    { 57, "קרית ים" },
                    { 56, "קרית גת" },
                    { 55, "קרית ביאליק" },
                    { 33, "לוד" },
                    { 32, "כרמיאל" }
          });

      migrationBuilder.InsertData(
          table: "Cities",
          columns: new[] { "Id", "Name" },
          values: new object[,]
          {
                    { 43, "נצרת עילית" },
                    { 30, "כפר סבא" },
                    { 31, "כפר קאסם" },
                    { 1, "אבן יהודה" },
                    { 2, "אום אל-פחם" },
                    { 3, "אופקים" },
                    { 4, "אזור" },
                    { 5, "אילת" },
                    { 6, "אכסאל" },
                    { 7, "אריאל" },
                    { 8, "אשדוד" },
                    { 9, "אשקלון" },
                    { 10, "באר שבע" },
                    { 12, "בית שמש" },
                    { 13, "בני ברק" },
                    { 14, "בת ים" },
                    { 11, "בית שאן" },
                    { 16, "גבעתיים" },
                    { 29, "ירושלים" },
                    { 28, "ירוחם" },
                    { 27, "יקנעם" },
                    { 15, "גבעת שמואל" },
                    { 25, "יבנה" },
                    { 24, "טירת כרמל" },
                    { 23, "טבריה" },
                    { 26, "יהוד" },
                    { 21, "חולון" },
                    { 20, "חדרה" },
                    { 19, "הרצליה" },
                    { 18, "הוד השרון" },
                    { 17, "דימונה" },
                    { 22, "חיפה" }
          });

      migrationBuilder.InsertData(
          table: "Colleges",
          columns: new[] { "Id", "Name" },
          values: new object[,]
          {
                    { 2, "אורט רחובות" },
                    { 8, "כרמיאל - בראודה" },
                    { 7, "אורט קריית ביאליק" },
                    { 6, "נתניה - הרמלין" },
                    { 5, "אורט כפר סבא" },
                    { 4, "תל אביב - סינגאלובסקי" },
                    { 3, "אורט ירושלים" },
                    { 1, "אחר" }
          });

      migrationBuilder.InsertData(
          table: "Languages",
          columns: new[] { "Id", "Name" },
          values: new object[,]
          {
                    { 2, "אנגלית" },
                    { 1, "עברית" }
          });

      migrationBuilder.InsertData(
          table: "Languages",
          columns: new[] { "Id", "Name" },
          values: new object[,]
          {
                    { 4, "צרפתית" },
                    { 5, "רוסית" },
                    { 3, "ערבית" }
          });

      migrationBuilder.InsertData(
          table: "ModeStudies",
          columns: new[] { "ModeStudyId", "Name" },
          values: new object[,]
          {
                    { 1, "Frontally" },
                    { 2, "Online" }
          });

      migrationBuilder.InsertData(
          table: "Role",
          columns: new[] { "Id", "Name" },
          values: new object[,]
          {
                    { 4, "Student" },
                    { 2, "Employer" },
                    { 1, "Admin" },
                    { 3, "Alumnus" }
          });

      migrationBuilder.InsertData(
          table: "StudyPrograms",
          columns: new[] { "Id", "Name" },
          values: new object[,]
          {
                    { 3, "אדריכלות נוף" },
                    { 16, "תעשייה וניהול" },
                    { 15, "מכשור רפואי" },
                    { 14, "תוכנה" },
                    { 13, "קירור ומיזוג אוויר" },
                    { 12, "עיצוב תעשייתי" },
                    { 11, "עיצוב מדיה" },
                    { 10, "מכונות" },
                    { 9, "כימיה תרופתית" },
                    { 8, "טכנולוגיות מים" },
                    { 6, "בניין/אזרחית" },
                    { 5, "ביוטכנולוגיה" },
                    { 4, "אלקטרוניקה" },
                    { 2, "אדריכלות ועיצוב פנים" },
                    { 7, "חשמל" }
          });

      migrationBuilder.InsertData(
          table: "Course_StudyPrograms",
          columns: new[] { "Id", "Name", "StudyProgramId" },
          values: new object[,]
          {
                    { 31, "גנטיקה", 5 },
                    { 32, "שיטות הפרדה", 5 },
                    { 33, "חישוב סטטי וחוזק חומרים", 6 },
                    { 34, "קונסטרוקציות בטון", 6 },
                    { 35, "ארגון אתר ובחירת ציוד בנייה בהיבט מערכתי", 6 },
                    { 36, "קונסטרוקציות פלדה ועץ", 6 },
                    { 37, "יישומי מחשב בתכן מבנים", 6 },
                    { 38, "יישומי מחשב בניהול הבנייה", 6 },
                    { 39, "שירטוט +תיב''ם (אוטוקאד)", 8 },
                    { 40, "מבוא לכימיה כללית ואנליטית", 8 },
                    { 41, "צנרת ואביזרי מים", 8 },
                    { 42, "משאבות", 8 },
                    { 43, "מז''ח (מוסמך משרד הבריאות)", 8 },
                    { 44, "כימיה סניטרית", 8 },
                    { 63, "בדיקות תוכנה - QA", 14 },
                    { 45, "בסיסי נתונים SQL", 14 },
                    { 47, "MongoDB No SQL", 14 },
                    { 48, "React", 14 },
                    { 49, "Angular ", 14 },
                    { 50, "תכנות מונחה עצמים Java", 14 },
                    { 51, "תכנות מונחה עצמים C Sharp", 14 },
                    { 52, "מבנה נתונים Java", 14 },
                    { 53, "מבנה נתונים C Sharp", 14 },
                    { 54, "", 14 },
                    { 55, "Node JS", 14 },
                    { 56, "PHP", 14 },
                    { 57, "Asp.Net", 14 },
                    { 58, "הנחיית פרויקט", 14 },
                    { 59, "אלגוריתמיקה ותכנות", 14 },
                    { 46, "תקשורת נתונים ואבטחת מידע", 14 },
                    { 60, "מערכות הפעלה ולינוקס", 14 },
                    { 30, "פיזיולוגיה של בעלי חיים", 5 },
                    { 28, "מיקרוביולוגיה כללית", 5 },
                    { 62, "ניתוח מערכות", 14 },
                    { 1, "חישובים סטטיים", 2 },
                    { 2, "גאומטריה תאורית", 2 },
                    { 3, "פרטי בניין", 2 },
                    { 4, "תורת הבניה", 2 },
                    { 5, "פרטי בניין", 2 },
                    { 6, "תכנון אדריכלי", 2 },
                    { 7, "יסודות העיצוב", 2 },
                    { 8, "עיבוד תכניות", 2 }
          });

      migrationBuilder.InsertData(
          table: "Course_StudyPrograms",
          columns: new[] { "Id", "Name", "StudyProgramId" },
          values: new object[,]
          {
                    { 9, "תיב''מ", 2 },
                    { 10, "אוטוקד", 2 },
                    { 11, "סקאטצ'אפ", 2 },
                    { 12, "תולדות האדריכלות", 2 },
                    { 29, "ביולוגיה מולקולרית", 5 },
                    { 13, " הנדסת אנוש וארגונומיה", 2 },
                    { 15, "עיצוב ריהוט ופרטי ריהוט", 2 },
                    { 16, "חומרי בניין ופנים", 2 },
                    { 17, "מערכת המבנה ותשתיות", 2 },
                    { 18, "עקרונות התכנון האדריכלי", 2 },
                    { 24, "אלקטרוניקה", 3 },
                    { 19, "פיזיקה", 4 },
                    { 20, "מתמטיקה", 4 },
                    { 21, "תורת החשמל", 4 },
                    { 22, "אנרגיות מתחדשות", 4 },
                    { 23, "אלקטרוניקה תקבילית", 4 },
                    { 25, "ביוכימיה", 5 },
                    { 26, "ביולוגיה מולקולארית והנדסה גנטית", 5 },
                    { 27, "כימיה כללית", 5 },
                    { 14, "קלימטולוגיה", 2 },
                    { 61, "פייתון", 14 }
          });

      migrationBuilder.InsertData(
          table: "Users",
          columns: new[] { "Id", "Discriminator", "FirstName", "LastName", "Mail", "Password", "Phone", "RoleId" },
          values: new object[] { 3, "Admin", "Maor", "Levy", "maor79855@gmail.com", "4g9q7V0h3ZajxUpPiYbgaA==", null, 1 });

      migrationBuilder.InsertData(
          table: "Users",
          columns: new[] { "Id", "CompanyAddress", "CompanyName", "ContactRole", "Discriminator", "FirstName", "LastName", "Mail", "Password", "Phone", "RoleId", "TypeOfBusiness" },
          values: new object[] { 2, "Jerusalem", "Elbit", "CTO", "Employer", "maor", "Levy", "maor1100@gmail.com", "4g9q7V0h3ZajxUpPiYbgaA==", null, 2, "HI" });

      migrationBuilder.InsertData(
          table: "Users",
          columns: new[] { "Id", "CardId", "CityId", "CollegeId", "DateOfBirth", "Discriminator", "FirstName", "LastName", "Linkedin", "Mail", "Password", "Phone", "RoleId", "StudyFinishYear", "StudyProgramId", "Alumnus_StudyStartYear", "WorkPlace" },
          values: new object[] { 1, "203053764", 3, 3, new DateTime(1993, 1, 29, 0, 0, 0, 0, DateTimeKind.Unspecified), "Alumnus", "Maor", "Levy", "https://www.linkedin.com/in/maor-levy-565237173/", "maor0749@gmail", "4g9q7V0h3ZajxUpPiYbgaA==", "0507985556", 3, "2020", 14, "2018", "מרכז חרידי להכשרה מקצועית" });

      migrationBuilder.InsertData(
          table: "Claim",
          columns: new[] { "Id", "Type", "UserId", "Value" },
          values: new object[,]
          {
                    { 7, "name", 3, "Maor" },
                    { 8, "role", 3, "Admin" },
                    { 9, "userId", 3, "3" },
                    { 4, "name", 2, "maor" },
                    { 5, "role", 2, "Employer" },
                    { 6, "userId", 2, "2" },
                    { 1, "name", 1, "Maor" },
                    { 2, "role", 1, "Alumnus" },
                    { 3, "userId", 1, "1" }
          });

      migrationBuilder.InsertData(
          table: "JobOffers",
          columns: new[] { "Id", "EmployerId", "JobDescription", "JobRequirements", "Logo", "MailCV", "Phone", "Publish", "TitleJob" },
          values: new object[] { 1, 2, "fvfvfvf", "sdcdscsdcsd", "Logo", "sh@gmail.com", "05079855556", true, "junior" });

      migrationBuilder.InsertData(
          table: "Teacher",
          columns: new[] { "Id", "AlumnusId", "Description", "MailForStudy", "Rate" },
          values: new object[] { 1, 1, "מרצה Full Stack במכללה 'מרכז החרדי להכשרה מקצועית', עיסוק עיקרי Angular. אשמח שנתקדם יחד :)", "maor0749@gmail", "90" });

      migrationBuilder.InsertData(
          table: "JobOffer_Cities",
          columns: new[] { "CityId", "JobOfferId" },
          values: new object[,]
          {
                    { 1, 1 },
                    { 2, 1 }
          });

      migrationBuilder.InsertData(
          table: "JobOffer_StudyPrograms",
          columns: new[] { "JobOfferId", "StudyProgramId" },
          values: new object[,]
          {
                    { 1, 2 },
                    { 1, 3 }
          });

      migrationBuilder.InsertData(
          table: "ModeStudy_Cities",
          columns: new[] { "CityId", "ModeStudyId", "TeacherId" },
          values: new object[] { 2, 1, 1 });

      migrationBuilder.InsertData(
          table: "TeacherCourses",
          columns: new[] { "Course_StudyProgramId", "TeacherId" },
          values: new object[,]
          {
                    { 1, 1 },
                    { 2, 1 },
                    { 3, 1 }
          });

      migrationBuilder.InsertData(
          table: "TeacherLanguages",
          columns: new[] { "LanguageId", "TeacherId" },
          values: new object[] { 1, 1 });

      migrationBuilder.CreateIndex(
          name: "IX_Articles_CategoryId",
          table: "Articles",
          column: "CategoryId");

      migrationBuilder.CreateIndex(
          name: "IX_Claim_UserId",
          table: "Claim",
          column: "UserId");

      migrationBuilder.CreateIndex(
          name: "IX_Course_StudyPrograms_StudyProgramId",
          table: "Course_StudyPrograms",
          column: "StudyProgramId");

      migrationBuilder.CreateIndex(
          name: "IX_JobOffer_Cities_JobOfferId",
          table: "JobOffer_Cities",
          column: "JobOfferId");

      migrationBuilder.CreateIndex(
          name: "IX_JobOffer_StudyPrograms_JobOfferId",
          table: "JobOffer_StudyPrograms",
          column: "JobOfferId");

      migrationBuilder.CreateIndex(
          name: "IX_JobOffers_EmployerId",
          table: "JobOffers",
          column: "EmployerId");

      migrationBuilder.CreateIndex(
          name: "IX_Logos_TeacherId",
          table: "Logos",
          column: "TeacherId",
          unique: true,
          filter: "[TeacherId] IS NOT NULL");

      migrationBuilder.CreateIndex(
          name: "IX_ModeStudy_Cities_CityId",
          table: "ModeStudy_Cities",
          column: "CityId");

      migrationBuilder.CreateIndex(
          name: "IX_ModeStudy_Cities_TeacherId",
          table: "ModeStudy_Cities",
          column: "TeacherId");

      migrationBuilder.CreateIndex(
          name: "IX_Teacher_AlumnusId",
          table: "Teacher",
          column: "AlumnusId",
          unique: true);

      migrationBuilder.CreateIndex(
          name: "IX_TeacherCourses_TeacherId",
          table: "TeacherCourses",
          column: "TeacherId");

      migrationBuilder.CreateIndex(
          name: "IX_TeacherLanguages_TeacherId",
          table: "TeacherLanguages",
          column: "TeacherId");

      migrationBuilder.CreateIndex(
          name: "IX_Users_CityId",
          table: "Users",
          column: "CityId");

      migrationBuilder.CreateIndex(
          name: "IX_Users_CollegeId",
          table: "Users",
          column: "CollegeId");

      migrationBuilder.CreateIndex(
          name: "IX_Users_RoleId",
          table: "Users",
          column: "RoleId");

      migrationBuilder.CreateIndex(
          name: "IX_Users_StudyProgramId",
          table: "Users",
          column: "StudyProgramId");
    }

    protected override void Down(MigrationBuilder migrationBuilder)
    {
      migrationBuilder.DropTable(
          name: "Articles");

      migrationBuilder.DropTable(
          name: "Claim");

      migrationBuilder.DropTable(
          name: "JobOffer_Cities");

      migrationBuilder.DropTable(
          name: "JobOffer_StudyPrograms");

      migrationBuilder.DropTable(
          name: "Logos");

      migrationBuilder.DropTable(
          name: "ModeStudy_Cities");

      migrationBuilder.DropTable(
          name: "TeacherCourses");

      migrationBuilder.DropTable(
          name: "TeacherLanguages");

      migrationBuilder.DropTable(
          name: "Categories");

      migrationBuilder.DropTable(
          name: "JobOffers");

      migrationBuilder.DropTable(
          name: "ModeStudies");

      migrationBuilder.DropTable(
          name: "Course_StudyPrograms");

      migrationBuilder.DropTable(
          name: "Languages");

      migrationBuilder.DropTable(
          name: "Teacher");

      migrationBuilder.DropTable(
          name: "Users");

      migrationBuilder.DropTable(
          name: "Cities");

      migrationBuilder.DropTable(
          name: "Colleges");

      migrationBuilder.DropTable(
          name: "Role");

      migrationBuilder.DropTable(
          name: "StudyPrograms");
    }
  }
}