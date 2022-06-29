using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace OrtAlumniWeb.AlumniOrtServer.Migrations
{
    public partial class init : Migration
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
                name: "City",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Name = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_City", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "College",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Name = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_College", x => x.Id);
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
                name: "StudyProgram",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Name = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_StudyProgram", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Articles",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Heading = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    SubHeading = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Date = table.Column<DateTime>(type: "datetime2", nullable: false),
                    Detail = table.Column<string>(type: "nvarchar(max)", nullable: true),
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
                name: "Course_StudyProgram",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    StudyProgramId = table.Column<int>(type: "int", nullable: false),
                    Name = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Course_StudyProgram", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Course_StudyProgram_StudyProgram_StudyProgramId",
                        column: x => x.StudyProgramId,
                        principalTable: "StudyProgram",
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
                        name: "FK_Users_City_CityId",
                        column: x => x.CityId,
                        principalTable: "City",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_Users_College_CollegeId",
                        column: x => x.CollegeId,
                        principalTable: "College",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_Users_Role_RoleId",
                        column: x => x.RoleId,
                        principalTable: "Role",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_Users_StudyProgram_StudyProgramId",
                        column: x => x.StudyProgramId,
                        principalTable: "StudyProgram",
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
                    Logo = table.Column<string>(type: "nvarchar(max)", nullable: true),
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
                        name: "FK_JobOffer_Cities_City_CityId",
                        column: x => x.CityId,
                        principalTable: "City",
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
                        name: "FK_JobOffer_StudyPrograms_StudyProgram_StudyProgramId",
                        column: x => x.StudyProgramId,
                        principalTable: "StudyProgram",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
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
                        name: "FK_ModeStudy_Cities_City_CityId",
                        column: x => x.CityId,
                        principalTable: "City",
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
                        name: "FK_TeacherCourses_Course_StudyProgram_Course_StudyProgramId",
                        column: x => x.Course_StudyProgramId,
                        principalTable: "Course_StudyProgram",
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
                    { 2, "General" },
                    { 1, "Events" }
                });

            migrationBuilder.InsertData(
                table: "City",
                columns: new[] { "Id", "Name" },
                values: new object[,]
                {
                    { 661, "מעגן " },
                    { 662, "מעגן מיכאל " },
                    { 663, "מעלה אדומים " },
                    { 664, "מעלה עמוס " },
                    { 665, "מעלה אפרים " },
                    { 666, "מעלה גמלא " },
                    { 667, "מעלה גלבוע " },
                    { 668, "מעלה החמישה " },
                    { 669, "מעלה עירון " },
                    { 670, "מעלה לבונה " },
                    { 671, "מעלה מכמש " },
                    { 672, "מעלות-תרשיחא " },
                    { 673, "מענית " },
                    { 674, "מעש " },
                    { 675, "מעברות " },
                    { 676, "מעגלים " },
                    { 677, "מעון " },
                    { 678, "מאור " },
                    { 679, "מעוז חיים " },
                    { 680, "מעין ברוך " },
                    { 681, "מעין צבי " },
                    { 682, "מבועים " },
                    { 683, "מגן " },
                    { 684, "מגן שאול " },
                    { 685, "מגל " },
                    { 686, "מגשימים " },
                    { 687, "מחניים " },
                    { 660, "לוזית " },
                    { 659, "לוטם " },
                    { 658, "לוטן " },
                    { 657, "לוחמי הגיטאות " },
                    { 629, "כסלון " },
                    { 630, "ח'ואלד (שבט) " },
                    { 631, "כנרת (מושבה) " },
                    { 632, "כנרת (קבוצה) " },
                    { 633, "כישור " },
                    { 634, "כסרא-סמיע " },
                    { 635, "כיסופים " },
                    { 636, "כוכב השחר " },
                    { 637, "כוכב מיכאל " }
                });

            migrationBuilder.InsertData(
                table: "City",
                columns: new[] { "Id", "Name" },
                values: new object[,]
                {
                    { 638, "כוכב יעקב " },
                    { 639, "כוכב יאיר " },
                    { 640, "כורזים " },
                    { 641, "כסיפה " },
                    { 688, "צוקים " },
                    { 642, "להב " },
                    { 644, "להבות חביבה " },
                    { 645, "לכיש " },
                    { 646, "לפיד " },
                    { 647, "לפידות " },
                    { 648, "לקיה " },
                    { 649, "לביא " },
                    { 650, "לבון " },
                    { 651, "להבים " },
                    { 652, "שריגים (לי-און) " },
                    { 653, "לימן " },
                    { 654, "לבנים " },
                    { 655, "לוד " },
                    { 656, "מצליח " },
                    { 643, "להבות הבשן " },
                    { 689, "מחנה יתיר " },
                    { 690, "מחסיה " },
                    { 691, "מג'ד אל-כרום " },
                    { 724, "מגידו " },
                    { 725, "מחולה " },
                    { 726, "מייסר " },
                    { 727, "מכורה " },
                    { 728, "מלאה " },
                    { 729, "מלילות " },
                    { 730, "מנחמיה " },
                    { 731, "מנרה " },
                    { 732, "מנוחה " },
                    { 733, "מירב " },
                    { 734, "מרחביה (מושב) " },
                    { 735, "מרחביה (קיבוץ) " },
                    { 736, "מרכז שפירא " },
                    { 737, "מרום גולן " },
                    { 738, "מירון " },
                    { 739, "מישר " },
                    { 740, "משהד " },
                    { 741, "מסילת ציון " },
                    { 742, "מסילות " }
                });

            migrationBuilder.InsertData(
                table: "City",
                columns: new[] { "Id", "Name" },
                values: new object[,]
                {
                    { 743, "מיתר " },
                    { 744, "מיטב " },
                    { 745, "מטולה " },
                    { 746, "מבשרת ציון " },
                    { 747, "מבוא ביתר " },
                    { 748, "קרית שמונה " },
                    { 749, "מבוא דותן " },
                    { 750, "מבוא חמה " },
                    { 723, "מגדים " },
                    { 722, "מפלסים " },
                    { 721, "מעונה " },
                    { 720, "מאיר שפיה " },
                    { 692, "מג'דל שמס " },
                    { 693, "מכחול " },
                    { 694, "מלכישוע " },
                    { 695, "מלכיה " },
                    { 696, "מנוף " },
                    { 697, "מנות " },
                    { 698, "מנשית זבדה " },
                    { 699, "מרגליות " },
                    { 700, "מסעדה " },
                    { 701, "מסעודין אל-עזאזמה " },
                    { 702, "משאבי שדה " },
                    { 703, "משען " },
                    { 704, "משכיות " },
                    { 628, "כרם יבנה (ישיבה) " },
                    { 705, "מסלול " },
                    { 707, "מסדה " },
                    { 708, "משואה " },
                    { 709, "משואות יצחק " },
                    { 710, "מטע " },
                    { 711, "מתן " },
                    { 712, "מתת " },
                    { 713, "מתתיהו " },
                    { 714, "מבקיעים " },
                    { 715, "מזכרת בתיה " },
                    { 716, "מזור " },
                    { 717, "מזרעה " },
                    { 718, "מצובה " },
                    { 719, "מי עמי " },
                    { 706, "מסד " },
                    { 627, "כרם שלום " }
                });

            migrationBuilder.InsertData(
                table: "City",
                columns: new[] { "Id", "Name" },
                values: new object[,]
                {
                    { 626, "כרם מהר\"ל " },
                    { 625, "כרם בן זמרה " },
                    { 534, "כדורי " },
                    { 535, "כפר ברא " },
                    { 536, "כפר כמא " },
                    { 537, "כפר כנא " },
                    { 538, "כפר מנדא " },
                    { 539, "כפר מצר " },
                    { 540, "כפר קאסם " },
                    { 541, "כפר יאסיף " },
                    { 542, "כחל " },
                    { 543, "כלנית " },
                    { 544, "כמון " },
                    { 545, "כנף " },
                    { 546, "כנות " },
                    { 547, "כאוכב אבו אל-היג'א " },
                    { 548, "כרי דשא " },
                    { 549, "כרכום " },
                    { 550, "כרמי יוסף " },
                    { 551, "כרמי צור " },
                    { 552, "כרמל " },
                    { 553, "כרמיאל " },
                    { 554, "כרמיה " },
                    { 555, "כפר אדומים " },
                    { 556, "כפר אחים " },
                    { 557, "כפר אביב " },
                    { 558, "כפר עבודה " },
                    { 559, "כפר עזה " },
                    { 560, "כפר ברוך " },
                    { 533, "כאבול " },
                    { 532, "כברי " },
                    { 531, "כעביה-טבאש-חג'אג'רה " },
                    { 530, "ג'נאביב (שבט) " },
                    { 501, "חולון " },
                    { 502, "חורשים " },
                    { 503, "חוסן " },
                    { 504, "הושעיה " },
                    { 505, "חוג'ייראת (ד'הרה) " },
                    { 506, "חולתה " },
                    { 507, "חוקוק " },
                    { 508, "חורה " },
                    { 509, "חורפיש " }
                });

            migrationBuilder.InsertData(
                table: "City",
                columns: new[] { "Id", "Name" },
                values: new object[,]
                {
                    { 511, "הוזייל (שבט) " },
                    { 512, "אעבלין " },
                    { 513, "איבים " },
                    { 514, "אבטין " },
                    { 561, "כפר ביאליק " },
                    { 515, "עידן " },
                    { 517, "אילניה " },
                    { 518, "עילוט " },
                    { 519, "עמנואל " },
                    { 520, "עיר אובות " },
                    { 521, "עספיא " },
                    { 522, "איתמר " },
                    { 523, "ג'ת " },
                    { 524, "ג'לג'וליה " },
                    { 525, "ירושלים " },
                    { 526, "ג'ש (גוש חלב) " },
                    { 527, "ג'סר א-זרקא " },
                    { 528, "ג'דיידה-מכר " },
                    { 529, "ג'ולס " },
                    { 516, "אכסאל " },
                    { 562, "כפר ביל\"ו " },
                    { 563, "כפר בן נון " },
                    { 564, "כפר בלום " },
                    { 597, "כפר ראש הנקרה " },
                    { 598, "כפר רוזנואלד (זרעית) " },
                    { 599, "כפר רופין " },
                    { 600, "כפר רות " },
                    { 601, "כפר סבא " },
                    { 602, "כפר שמאי " },
                    { 603, "כפר שמריהו " },
                    { 604, "כפר שמואל " },
                    { 605, "כפר סילבר " },
                    { 606, "כפר סירקין " },
                    { 607, "כפר סאלד " },
                    { 608, "כפר תפוח " },
                    { 609, "כפר תבור " },
                    { 596, "כפר פינס " },
                    { 610, "כפר טרומן " },
                    { 612, "כפר ויתקין " },
                    { 613, "כפר ורבורג " },
                    { 614, "כפר ורדים " },
                    { 615, "כפר יעבץ " }
                });

            migrationBuilder.InsertData(
                table: "City",
                columns: new[] { "Id", "Name" },
                values: new object[,]
                {
                    { 616, "כפר יחזקאל " },
                    { 617, "כפר יהושע " },
                    { 618, "כפר יונה " },
                    { 619, "כפר זיתים " },
                    { 620, "כפר זוהרים " },
                    { 621, "כליל " },
                    { 622, "כמהין " },
                    { 623, "כרמים " },
                    { 624, "כרם בן שמן " },
                    { 611, "כפר אוריה " },
                    { 751, "מבוא חורון " },
                    { 595, "כפר נטר " },
                    { 593, "כפר מונש " },
                    { 565, "כפר דניאל " },
                    { 566, "כפר עציון " },
                    { 567, "כפר גלים " },
                    { 568, "כפר גדעון " },
                    { 569, "כפר גלעדי " },
                    { 570, "כפר גליקסון " },
                    { 571, "כפר חב\"ד " },
                    { 572, "כפר החורש " },
                    { 573, "כפר המכבי " },
                    { 574, "כפר הנגיד " },
                    { 575, "כפר חנניה " },
                    { 576, "כפר הנשיא " },
                    { 577, "כפר הנוער הדתי " },
                    { 594, "כפר מרדכי " },
                    { 578, "כפר האורנים " },
                    { 580, "כפר הרא\"ה " },
                    { 581, "כפר חרוב " },
                    { 582, "כפר חסידים א' " },
                    { 583, "כפר חסידים ב' " },
                    { 584, "כפר חיים " },
                    { 585, "כפר הס " },
                    { 586, "כפר חיטים " },
                    { 587, "כפר חושן " },
                    { 588, "כפר קיש " },
                    { 589, "כפר מל\"ל " },
                    { 590, "כפר מסריק " },
                    { 591, "כפר מימון " },
                    { 592, "כפר מנחם " },
                    { 579, "כפר הרי\"ף " }
                });

            migrationBuilder.InsertData(
                table: "City",
                columns: new[] { "Id", "Name" },
                values: new object[,]
                {
                    { 752, "מבוא מודיעים " },
                    { 753, "מבואות ים " },
                    { 754, "מצדות יהודה " },
                    { 915, "פרדסיה " },
                    { 916, "פרוד " },
                    { 917, "פטיש " },
                    { 918, "פדיה " },
                    { 919, "פדואל " },
                    { 920, "פדויים " },
                    { 921, "פלך " },
                    { 922, "פני חבר " },
                    { 923, "פקיעין (בוקייעה) " },
                    { 924, "פקיעין חדשה " },
                    { 925, "פרזון " },
                    { 926, "פרי גן " },
                    { 927, "פסגות " },
                    { 928, "פתח תקווה " },
                    { 929, "פתחיה " },
                    { 930, "פצאל " },
                    { 931, "פורת " },
                    { 932, "פוריה עילית " },
                    { 933, "קרית שלמה " },
                    { 934, "פוריה - כפר עבודה " },
                    { 935, "פוריה - נווה עובד " },
                    { 936, "קבועה (שבט) " },
                    { 937, "קדרים " },
                    { 938, "קדימה-צורן " },
                    { 939, "קלנסווה " },
                    { 940, "קליה " },
                    { 941, "קרני שומרון " },
                    { 914, "פרדס חנה-כרכור " },
                    { 913, "פארן " },
                    { 912, "פלמחים " },
                    { 911, "פעמי תש\"ז " },
                    { 883, "נופים " },
                    { 884, "נופית " },
                    { 885, "נוגה " },
                    { 886, "נוקדים " },
                    { 887, "נורדיה " },
                    { 888, "נוב " },
                    { 889, "נורית " },
                    { 890, "אודם " }
                });

            migrationBuilder.InsertData(
                table: "City",
                columns: new[] { "Id", "Name" },
                values: new object[,]
                {
                    { 891, "אופקים " },
                    { 892, "עופר " },
                    { 893, "עופרה " },
                    { 894, "אוהד " },
                    { 895, "עולש " },
                    { 942, "קוואעין (שבט) " },
                    { 896, "אומן " },
                    { 898, "אומץ " },
                    { 899, "אור עקיבא " },
                    { 900, "אור הגנוז " },
                    { 901, "סח'נין " },
                    { 902, "אור הנר " },
                    { 903, "אור יהודה " },
                    { 904, "אורה " },
                    { 905, "אורנים " },
                    { 906, "אורנית " },
                    { 907, "אורות " },
                    { 908, "אורטל " },
                    { 909, "עתניאל " },
                    { 910, "עוצם " },
                    { 897, "עומר " },
                    { 943, "קצרין " },
                    { 944, "קדר " },
                    { 945, "קדמה " },
                    { 978, "רמת השופט " },
                    { 979, "רמת מגשימים " },
                    { 980, "רמת רחל " },
                    { 981, "רמת רזיאל " },
                    { 982, "רמת ישי " },
                    { 983, "רמת יוחנן " },
                    { 984, "רמת צבי " },
                    { 985, "ראמה " },
                    { 986, "רמלה " },
                    { 987, "רמות " },
                    { 988, "רמות השבים " },
                    { 989, "רמות מאיר " },
                    { 990, "רמות מנשה " },
                    { 977, "רמת השרון " },
                    { 991, "רמות נפתלי " },
                    { 993, "רקפת " },
                    { 994, "ראס עלי " },
                    { 995, "רביד " }
                });

            migrationBuilder.InsertData(
                table: "City",
                columns: new[] { "Id", "Name" },
                values: new object[,]
                {
                    { 996, "רעים " },
                    { 997, "רגבים " },
                    { 998, "רגבה " },
                    { 999, "ריחן " },
                    { 1000, "רחוב " },
                    { 1001, "רחובות " },
                    { 1002, "ריחאניה " },
                    { 1003, "ריינה " },
                    { 1004, "רכסים " },
                    { 1005, "רשפים " },
                    { 992, "רנן " },
                    { 882, "נופך " },
                    { 976, "רמת הכובש " },
                    { 974, "רמת דוד " },
                    { 946, "קדומים " },
                    { 947, "קלע " },
                    { 948, "קלחים " },
                    { 949, "קיסריה " },
                    { 950, "קשת " },
                    { 951, "קטורה " },
                    { 952, "קבוצת יבנה " },
                    { 953, "קדמת צבי " },
                    { 954, "קדרון " },
                    { 955, "קרית ענבים " },
                    { 956, "קרית ארבע " },
                    { 957, "קרית אתא " },
                    { 958, "קרית ביאליק " },
                    { 975, "רמת גן " },
                    { 959, "קרית עקרון " },
                    { 961, "קרית מלאכי " },
                    { 962, "קרית מוצקין " },
                    { 963, "קרית נטפים " },
                    { 964, "קרית אונו " },
                    { 965, "קרית ים " },
                    { 966, "קרית יערים " },
                    { 967, "קרית יערים(מוסד) " },
                    { 968, "קוממיות " },
                    { 969, "קורנית " },
                    { 970, "קודייראת א-צאנע(שבט) " },
                    { 971, "רעננה " },
                    { 972, "רהט " },
                    { 973, "רם-און " }
                });

            migrationBuilder.InsertData(
                table: "City",
                columns: new[] { "Id", "Name" },
                values: new object[,]
                {
                    { 960, "קרית גת " },
                    { 881, "נועם " },
                    { 880, "ניצנים " },
                    { 879, "ניצני סיני " },
                    { 787, "מודיעין עילית " },
                    { 788, "מודיעין-מכבים-רעות " },
                    { 789, "מולדת " },
                    { 790, "מורן " },
                    { 791, "מורשת " },
                    { 792, "מוצא עילית " },
                    { 793, "מגאר " },
                    { 794, "מוקייבלה " },
                    { 795, "נעלה " },
                    { 796, "נען " },
                    { 797, "נאעורה " },
                    { 798, "נעמ\"ה " },
                    { 799, "אשבל " },
                    { 786, "מזרע " },
                    { 800, "חמדת " },
                    { 802, "שיטים " },
                    { 803, "נחלה " },
                    { 804, "נהלל " },
                    { 805, "נחליאל " },
                    { 806, "נחם " },
                    { 807, "נהריה " },
                    { 808, "נחף " },
                    { 809, "קרית טבעון " },
                    { 810, "נחשולים " },
                    { 811, "נחשון " },
                    { 812, "נחשונים " },
                    { 813, "נצאצרה (שבט) " },
                    { 814, "נטף " },
                    { 801, "נחל עוז " },
                    { 815, "נטור " },
                    { 785, "מצפה יריחו " },
                    { 783, "מצפה רמון " },
                    { 755, "מיצר " },
                    { 756, "מצר " },
                    { 757, "מעיליא " },
                    { 758, "מדרך עוז " },
                    { 759, "מדרשת בן גוריון " },
                    { 760, "מדרשת רופין " }
                });

            migrationBuilder.InsertData(
                table: "City",
                columns: new[] { "Id", "Name" },
                values: new object[,]
                {
                    { 761, "מגדל " },
                    { 762, "מגדל העמק " },
                    { 763, "מגדל עוז " },
                    { 764, "מגדלים " },
                    { 765, "מכמנים " },
                    { 766, "מכמורת " },
                    { 767, "מקווה ישראל " },
                    { 784, "מצפה שלם " },
                    { 768, "משגב עם " },
                    { 770, "משמר איילון " },
                    { 771, "משמר דוד " },
                    { 772, "משמר העמק " },
                    { 773, "משמר הנגב " },
                    { 774, "משמר השרון " },
                    { 775, "משמר השבעה " },
                    { 776, "משמר הירדן " },
                    { 777, "משמרות " },
                    { 778, "משמרת " },
                    { 779, "מבטחים " },
                    { 780, "מצפה " },
                    { 781, "מצפה אבי\"ב " },
                    { 782, "מצפה נטופה " },
                    { 769, "משגב דב " },
                    { 500, "חולית " },
                    { 816, "נווה " },
                    { 818, "נוף הגליל " },
                    { 851, "נווה אור " },
                    { 852, "נווה ים " },
                    { 853, "נווה ימין " },
                    { 854, "נווה ירק " },
                    { 855, "נווה זוהר " },
                    { 856, "נצר סרני " },
                    { 857, "ניל\"י " },
                    { 858, "ניר עם " },
                    { 859, "ניר עקיבא " },
                    { 860, "ניר בנים " },
                    { 861, "ניר דוד (תל עמל) " },
                    { 862, "ניר אליהו " },
                    { 863, "ניר עציון " },
                    { 850, "נווה שלום " },
                    { 864, "ניר גלים " },
                    { 866, "ניר משה " }
                });

            migrationBuilder.InsertData(
                table: "City",
                columns: new[] { "Id", "Name" },
                values: new object[,]
                {
                    { 867, "ניר עוז " },
                    { 868, "ניר יפה " },
                    { 869, "ניר ישראל " },
                    { 870, "ניר יצחק " },
                    { 871, "ניר צבי " },
                    { 872, "נערן " },
                    { 873, "נירים " },
                    { 874, "נירית " },
                    { 875, "ניצן " },
                    { 876, "ניצן ב' " },
                    { 877, "ניצנה (קהילת חינוך) " },
                    { 878, "ניצני עוז " },
                    { 865, "ניר ח\"ן " },
                    { 817, "נצרת " },
                    { 849, "נווה מבטח " },
                    { 847, "נווה אילן " },
                    { 819, "נאות גולן " },
                    { 820, "נאות הכיכר " },
                    { 821, "נאות מרדכי " },
                    { 822, "נעורים " },
                    { 823, "נגבה " },
                    { 824, "נחלים " },
                    { 825, "נהורה " },
                    { 826, "נחושה " },
                    { 827, "ניין " },
                    { 828, "נס עמים " },
                    { 829, "נס הרים " },
                    { 830, "נס ציונה " },
                    { 831, "נשר " },
                    { 848, "נווה מיכאל " },
                    { 832, "נטע " },
                    { 834, "נתניה " },
                    { 835, "נתיב העשרה " },
                    { 836, "נתיב הגדוד " },
                    { 837, "נתיב הל\"ה " },
                    { 838, "נתיב השיירה " },
                    { 839, "נתיבות " },
                    { 840, "נטועה " },
                    { 841, "נבטים " },
                    { 842, "נווה אטי\"ב " },
                    { 843, "נווה אבות " },
                    { 844, "נווה דניאל " }
                });

            migrationBuilder.InsertData(
                table: "City",
                columns: new[] { "Id", "Name" },
                values: new object[,]
                {
                    { 845, "נווה איתן " },
                    { 846, "נווה חריף " },
                    { 833, "נטעים " },
                    { 499, "חגלה " },
                    { 510, "חוסנייה " },
                    { 497, "הודיה " },
                    { 157, "ברעם " },
                    { 158, "ברק " },
                    { 159, "ברקת " },
                    { 160, "ברקן " },
                    { 161, "ברקאי " },
                    { 162, "בסמ\"ה " },
                    { 163, "בסמת טבעון " },
                    { 164, "בת עין " },
                    { 165, "בת הדר " },
                    { 166, "בת חצור " },
                    { 167, "בת חפר " },
                    { 168, "בת חן " },
                    { 169, "בת שלמה " },
                    { 170, "בת ים " },
                    { 171, "בצרה " },
                    { 172, "באר אורה " },
                    { 173, "באר שבע " },
                    { 174, "באר טוביה " },
                    { 175, "באר יעקב " },
                    { 176, "בארי " },
                    { 177, "בארות יצחק " },
                    { 178, "בארותיים " },
                    { 179, "בית ג'ן " },
                    { 180, "בן עמי " },
                    { 181, "בן שמן (מושב) " },
                    { 182, "בן שמן (כפר נוער) " },
                    { 183, "בן זכאי " },
                    { 156, "בר יוחאי " },
                    { 184, "בניה " },
                    { 155, "בר גיורא " },
                    { 153, "בחן " },
                    { 126, "אשדות יעקב (מאוחד) " },
                    { 127, "אשרת " },
                    { 128, "אשקלון " },
                    { 129, "עטאוונה (שבט) " },
                    { 130, "עטרת " }
                });

            migrationBuilder.InsertData(
                table: "City",
                columns: new[] { "Id", "Name" },
                values: new object[,]
                {
                    { 131, "עתלית " },
                    { 132, "אטרש (שבט) " },
                    { 133, "עצמון שגב " },
                    { 134, "עבדון " },
                    { 135, "אבנת " },
                    { 136, "אביאל " },
                    { 137, "שדרות " },
                    { 138, "אביעזר " },
                    { 139, "אביגדור " },
                    { 140, "אביחיל " },
                    { 141, "אביטל " },
                    { 142, "אביבים " },
                    { 143, "אבני איתן " },
                    { 144, "אבני חפץ " },
                    { 145, "אבשלום " },
                    { 146, "אבטליון " },
                    { 147, "עיינות " },
                    { 148, "איילת השחר " },
                    { 149, "עזריה " },
                    { 150, "אזור " },
                    { 151, "עזריאל " },
                    { 152, "עזריקם " },
                    { 154, "בלפוריה " },
                    { 185, "בני עטרות " },
                    { 186, "בני עי\"ש " },
                    { 187, "בני ברק " },
                    { 220, "בית חלקיה " },
                    { 221, "בית חורון " },
                    { 222, "בית לחם הגלילית " },
                    { 223, "בית מאיר " },
                    { 224, "בית נחמיה " },
                    { 225, "בית נקופה " },
                    { 226, "בית ניר " },
                    { 227, "בית אורן " },
                    { 228, "בית עובד " },
                    { 229, "בית קמה " },
                    { 230, "בית קשת " },
                    { 498, "חופית " },
                    { 232, "בית רימון " },
                    { 233, "בית שאן " },
                    { 234, "בית שערים " },
                    { 235, "בית שמש " }
                });

            migrationBuilder.InsertData(
                table: "City",
                columns: new[] { "Id", "Name" },
                values: new object[,]
                {
                    { 236, "בית שקמה " },
                    { 237, "בית עוזיאל " },
                    { 238, "בית ינאי " },
                    { 239, "בית יהושע " },
                    { 240, "בית יצחק-שער חפר " },
                    { 241, "בית יוסף " },
                    { 242, "בית זית " },
                    { 243, "בית זיד " },
                    { 244, "בית זרע " },
                    { 245, "בית צבי " },
                    { 246, "ביתר עילית " },
                    { 219, "בית הלל " },
                    { 218, "בית חירות " },
                    { 217, "בית חשמונאי " },
                    { 216, "בית השיטה " },
                    { 188, "בני דרום " },
                    { 189, "בני דרור " },
                    { 190, "בני נצרים " },
                    { 191, "בני ראם " },
                    { 192, "בני יהודה " },
                    { 193, "בני ציון " },
                    { 194, "בקעות " },
                    { 195, "בקוע " },
                    { 196, "ברכה " },
                    { 197, "ברכיה " },
                    { 198, "ברור חיל " },
                    { 199, "ברוש " },
                    { 200, "בית אלפא " },
                    { 125, "אשדות יעקב (איחוד) " },
                    { 201, "בית עריף " },
                    { 203, "בית ברל " },
                    { 204, "בית דגן " },
                    { 205, "בית אל " },
                    { 206, "בית אלעזרי " },
                    { 207, "בית עזרא " },
                    { 208, "בית גמליאל " },
                    { 209, "בית גוברין " },
                    { 210, "בית הערבה " },
                    { 211, "בית העמק " },
                    { 212, "בית הגדי " },
                    { 213, "בית הלוי " },
                    { 214, "בית חנן " }
                });

            migrationBuilder.InsertData(
                table: "City",
                columns: new[] { "Id", "Name" },
                values: new object[,]
                {
                    { 215, "בית חנניה " },
                    { 202, "בית אריה " },
                    { 247, "בצת " },
                    { 124, "אשדוד " },
                    { 122, "עשרת " },
                    { 32, "אל סייד " },
                    { 33, "סעוה " },
                    { 34, "שלומית " },
                    { 35, "כחלה " },
                    { 36, "מצפה אילן " },
                    { 37, "גני טל " },
                    { 38, "נצר חזני " },
                    { 39, "אבו תלול " },
                    { 40, "באר גנים " },
                    { 41, "מחנה הילה " },
                    { 42, "מחנה תל נוף " },
                    { 43, "מחנה יהודית " },
                    { 44, "מחנה מרים " },
                    { 45, "מחנה יפה " },
                    { 46, "מחנה יוכבד " },
                    { 47, "מחנה טלי " },
                    { 48, "קציר " },
                    { 49, "אעצם (שבט) " },
                    { 50, "אבירים " },
                    { 51, "אבו עבדון (שבט) " },
                    { 52, "אבו עמאר (שבט) " },
                    { 53, "אבו עמרה (שבט) " },
                    { 54, "אבו גוש " },
                    { 55, "אבו ג'ווייעד (שבט) " },
                    { 56, "אבו קורינאת (שבט) " },
                    { 57, "אבו קרינאת (יישוב) " },
                    { 58, "אבו רובייעה (שבט) " },
                    { 31, "אום בטין " },
                    { 59, "אבו רוקייק (שבט) " },
                    { 30, "דריג'את " },
                    { 28, "קצר א-סר " },
                    { 1, "רחוב " },
                    { 2, "רחובות " },
                    { 3, "ריחאניה " },
                    { 4, "ריינה " },
                    { 5, "רכסים " },
                    { 6, "בחר עיר" }
                });

            migrationBuilder.InsertData(
                table: "City",
                columns: new[] { "Id", "Name" },
                values: new object[,]
                {
                    { 7, "באקה אל-גרביה " },
                    { 8, "באר מילכה " },
                    { 9, "אלעד " },
                    { 10, "נווה זיו " },
                    { 11, "עין חוד " },
                    { 12, "ח'ואלד " },
                    { 13, "יתיר " },
                    { 14, "אחוזת ברק " },
                    { 15, "כמאנה " },
                    { 16, "חברון " },
                    { 17, "נגוהות " },
                    { 18, "ברוכין " },
                    { 19, "נוף איילון " },
                    { 20, "ראס אל-עין " },
                    { 21, "שמשית " },
                    { 22, "כדיתה " },
                    { 23, "אל-עזי " },
                    { 24, "מרחב עם " },
                    { 25, "רוח מדבר " },
                    { 26, "גבעות בר " },
                    { 27, "תראבין א-צאנע(ישוב) " },
                    { 29, "ביר הדאג' " },
                    { 60, "אבו סנאן " },
                    { 61, "אבו סריחאן (שבט) " },
                    { 62, "אדמית " },
                    { 95, "אלומה " },
                    { 96, "אלומות " },
                    { 97, "אמציה " },
                    { 98, "עמיר " },
                    { 99, "אמירים " },
                    { 100, "עמיעד " },
                    { 101, "עמיעוז " },
                    { 102, "עמינדב " },
                    { 103, "עמיקם " },
                    { 104, "גדרה " },
                    { 105, "אמנון " },
                    { 106, "עמקה " },
                    { 107, "עמוקה " },
                    { 108, "אניעם " },
                    { 109, "ערערה " },
                    { 110, "ערערה-בנגב " },
                    { 111, "ערד " }
                });

            migrationBuilder.InsertData(
                table: "City",
                columns: new[] { "Id", "Name" },
                values: new object[,]
                {
                    { 112, "עראמשה " },
                    { 113, "ארבל " },
                    { 114, "ארגמן " },
                    { 115, "אריאל " },
                    { 116, "ערב אל נעים " },
                    { 117, "עראבה " },
                    { 118, "ארסוף " },
                    { 119, "ערוגות " },
                    { 120, "אסד (שבט) " },
                    { 121, "אספר " },
                    { 94, "עלומים " },
                    { 93, "עלמון " },
                    { 92, "אלמוג " },
                    { 91, "אלמגור " },
                    { 63, "עדנים " },
                    { 64, "אדרת " },
                    { 65, "אדירים " },
                    { 66, "עדי " },
                    { 67, "אדורה " },
                    { 68, "אפיניש (שבט) " },
                    { 69, "אפק " },
                    { 70, "אפיק " },
                    { 71, "אפיקים " },
                    { 72, "עפולה " },
                    { 73, "עגור " },
                    { 74, "אחווה " },
                    { 75, "אחיעזר " },
                    { 123, "אשלים " },
                    { 76, "אחיהוד " },
                    { 78, "אחיטוב " },
                    { 79, "אחוזם " },
                    { 80, "עכו " },
                    { 81, "אל-עריאן " },
                    { 82, "עלי זהב " },
                    { 83, "אלפי מנשה " },
                    { 84, "אלון הגליל " },
                    { 85, "אלון שבות " },
                    { 86, "אלוני אבא " },
                    { 87, "אלוני הבשן " },
                    { 88, "אלוני יצחק " },
                    { 89, "אלונים " },
                    { 90, "עלמה " }
                });

            migrationBuilder.InsertData(
                table: "City",
                columns: new[] { "Id", "Name" },
                values: new object[,]
                {
                    { 77, "אחיסמך " },
                    { 248, "בענה " },
                    { 231, "בית רבן " },
                    { 250, "ביר אל-מכסור " },
                    { 407, "גינוסר " },
                    { 408, "גיתה " },
                    { 409, "גיתית " },
                    { 410, "גבעת אבני " },
                    { 411, "גבעת ברנר " },
                    { 412, "גבעת אלה " },
                    { 413, "גבעת השלושה " },
                    { 414, "גבעת חיים (איחוד) " },
                    { 415, "גבעת חיים (מאוחד) " },
                    { 416, "גבעת ח\"ן " },
                    { 417, "גבעת כ\"ח " },
                    { 418, "גבעת ניל\"י " },
                    { 419, "גבעת עוז " },
                    { 420, "גבעת שפירא " },
                    { 421, "גבעת שמש " },
                    { 422, "גבעת שמואל " },
                    { 423, "גבעת יערים " },
                    { 424, "גבעת ישעיהו " },
                    { 425, "גבעת יואב " },
                    { 426, "גבעת זאב " },
                    { 427, "גבעתיים " },
                    { 428, "גבעתי " },
                    { 429, "גבעולים " },
                    { 430, "גבעון החדשה " },
                    { 431, "גיזו " },
                    { 432, "גונן " },
                    { 433, "גורן " },
                    { 406, "גיניגר " },
                    { 434, "גורנות הגליל " },
                    { 405, "גינתון " },
                    { 403, "גילון " },
                    { 376, "גנות הדר " },
                    { 377, "גת רימון " },
                    { 378, "גת (קיבוץ) " },
                    { 379, "גזית " },
                    { 380, "גיאה " },
                    { 381, "גאליה " },
                    { 382, "גאולי תימן " }
                });

            migrationBuilder.InsertData(
                table: "City",
                columns: new[] { "Id", "Name" },
                values: new object[,]
                {
                    { 383, "גאולים " },
                    { 384, "גפן " },
                    { 385, "גליל ים " },
                    { 386, "גרופית " },
                    { 387, "גשר " },
                    { 388, "גשר הזיו " },
                    { 389, "גשור " },
                    { 390, "גבע " },
                    { 249, "בנימינה-גבעת עדה " },
                    { 392, "גבע בנימין " },
                    { 393, "גברעם " },
                    { 394, "גבת " },
                    { 395, "גבים " },
                    { 396, "גבולות " },
                    { 397, "גזר " },
                    { 398, "ע'ג'ר " },
                    { 399, "גיבתון " },
                    { 400, "גדעונה " },
                    { 401, "גילת " },
                    { 402, "גלגל " },
                    { 404, "גמזו " },
                    { 435, "הבונים " },
                    { 436, "חד-נס " },
                    { 437, "הדר עם " },
                    { 470, "הוואשלה (שבט) " },
                    { 471, "היוגב " },
                    { 472, "חצר בארותיים " },
                    { 473, "חצב " },
                    { 474, "חצרים " },
                    { 475, "כפר קרע " },
                    { 476, "חצבה " },
                    { 477, "חזון " },
                    { 478, "חצור הגלילית " },
                    { 479, "חצור-אשדוד " },
                    { 480, "הזורעים " },
                    { 481, "הזורע " },
                    { 482, "חצרות חולדה " },
                    { 483, "חצרות כ\"ח " },
                    { 484, "חפצי-בה " },
                    { 485, "חלץ " },
                    { 486, "חמד " },
                    { 487, "חרב לאת " }
                });

            migrationBuilder.InsertData(
                table: "City",
                columns: new[] { "Id", "Name" },
                values: new object[,]
                {
                    { 488, "חרמש " },
                    { 489, "חירות " },
                    { 490, "הרצליה " },
                    { 491, "חבר " },
                    { 492, "חיבת ציון " },
                    { 493, "הילה " },
                    { 494, "חיננית " },
                    { 495, "הוד השרון " },
                    { 496, "הודיות " },
                    { 469, "חבצלת השרון " },
                    { 468, "חספין " },
                    { 467, "הסוללים " },
                    { 466, "חשמונאים " },
                    { 438, "חדרה " },
                    { 439, "חדיד " },
                    { 440, "חפץ חיים " },
                    { 441, "חגי " },
                    { 442, "חגור " },
                    { 443, "הגושרים " },
                    { 444, "החותרים " },
                    { 445, "חיפה " },
                    { 446, "נוה צוף " },
                    { 447, "חלוץ " },
                    { 448, "המעפיל " },
                    { 449, "חמדיה " },
                    { 450, "חמאם " },
                    { 375, "גנות " },
                    { 451, "חמרה " },
                    { 453, "חנתון " },
                    { 454, "חניאל " },
                    { 455, "העוגן " },
                    { 456, "האון " },
                    { 457, "הר אדר " },
                    { 458, "הר עמשא " },
                    { 459, "הר גילה " },
                    { 460, "הראל " },
                    { 461, "הררית " },
                    { 462, "חרשים " },
                    { 463, "הרדוף " },
                    { 464, "חריש " },
                    { 465, "חרוצים " },
                    { 452, "חניתה " }
                });

            migrationBuilder.InsertData(
                table: "City",
                columns: new[] { "Id", "Name" },
                values: new object[,]
                {
                    { 374, "גני יוחנן " },
                    { 391, "גבע כרמל " },
                    { 372, "גני הדר " },
                    { 282, "דורות " },
                    { 283, "דוב\"ב " },
                    { 284, "אפרת " },
                    { 285, "עיילבון " },
                    { 286, "עין אל-אסד " },
                    { 287, "עין מאהל " },
                    { 288, "עין נקובא " },
                    { 289, "עין קנייא " },
                    { 290, "עין ראפה " },
                    { 291, "אלעזר " },
                    { 292, "אל-רום " },
                    { 293, "אילת " },
                    { 373, "גני תקווה " },
                    { 295, "אלי-עד " },
                    { 296, "אליפז " },
                    { 297, "אליפלט " },
                    { 298, "אלישמע " },
                    { 299, "אילון " },
                    { 300, "אלון מורה " },
                    { 301, "אילות " },
                    { 302, "אלקנה " },
                    { 303, "אלקוש " },
                    { 304, "אליכין " },
                    { 305, "אליקים " },
                    { 306, "אלישיב " },
                    { 307, "אמונים " },
                    { 308, "עין איילה " },
                    { 281, "דור " },
                    { 309, "עין דור " },
                    { 280, "דולב " },
                    { 278, "דימונה " },
                    { 251, "ביריה " },
                    { 252, "ביתן אהרן " },
                    { 253, "בטחה " },
                    { 254, "ביצרון " },
                    { 255, "בני דקלים " },
                    { 256, "בועיינה-נוג'ידאת " },
                    { 257, "בוקעאתא " },
                    { 258, "חולדה " }
                });

            migrationBuilder.InsertData(
                table: "City",
                columns: new[] { "Id", "Name" },
                values: new object[,]
                {
                    { 259, "בורגתה " },
                    { 260, "בוסתן הגליל " },
                    { 261, "דבוריה " },
                    { 262, "דפנה " },
                    { 263, "דחי " },
                    { 264, "דאלית אל-כרמל " },
                    { 265, "דליה " },
                    { 266, "דלתון " },
                    { 267, "דן " },
                    { 268, "דברת " },
                    { 269, "דגניה א' " },
                    { 270, "דגניה ב' " },
                    { 271, "דייר אל-אסד " },
                    { 272, "דייר חנא " },
                    { 273, "דייר ראפאת " },
                    { 274, "דמיידה " },
                    { 275, "דקל " },
                    { 276, "דבירה " },
                    { 277, "דבורה " },
                    { 279, "דישון " },
                    { 310, "עין גדי " },
                    { 294, "עלי " },
                    { 312, "עין הבשור " },
                    { 345, "אבן מנחם " },
                    { 346, "אבן ספיר " },
                    { 347, "אבן שמואל " },
                    { 348, "אבן יהודה " },
                    { 349, "גלעד (אבן יצחק) " },
                    { 350, "עברון " },
                    { 351, "אייל " },
                    { 352, "עץ אפרים " },
                    { 353, "עזר " },
                    { 354, "עזוז " },
                    { 355, "פסוטה " },
                    { 356, "פוריידיס " },
                    { 357, "געש " },
                    { 358, "געתון " },
                    { 311, "עין גב " },
                    { 360, "גדות " },
                    { 361, "גלאון " },
                    { 362, "גן הדרום " },
                    { 363, "גן השומרון " }
                });

            migrationBuilder.InsertData(
                table: "City",
                columns: new[] { "Id", "Name" },
                values: new object[,]
                {
                    { 364, "גן חיים " },
                    { 365, "גן נר " },
                    { 366, "גן שלמה " },
                    { 367, "גן שמואל " },
                    { 368, "גן שורק " },
                    { 369, "גן יבנה " },
                    { 370, "גן יאשיה " },
                    { 371, "גני עם " },
                    { 344, "אתגר " },
                    { 343, "איתנים " },
                    { 359, "גדיש " },
                    { 341, "אשתאול " },
                    { 342, "איתן " },
                    { 313, "עין העמק " },
                    { 314, "עין החורש " },
                    { 315, "עין המפרץ " },
                    { 316, "עין הנצי\"ב " },
                    { 317, "עין חרוד (איחוד) " },
                    { 318, "עין חרוד (מאוחד) " },
                    { 319, "עין השלושה " },
                    { 320, "עין השופט " },
                    { 321, "עין חצבה " },
                    { 322, "עין הוד " },
                    { 324, "עין כרם-בי\"ס חקלאי " },
                    { 325, "עין כרמל " },
                    { 326, "עין שריד " },
                    { 323, "עין עירון " },
                    { 328, "עין תמר " },
                    { 340, "אשכולות " },
                    { 339, "אשחר " },
                    { 338, "אשל הנשיא " },
                    { 327, "עין שמר " },
                    { 336, "ארז " },
                    { 335, "ענב " },
                    { 337, "אשבול " },
                    { 333, "עין צורים " },
                    { 332, "עין זיוון " },
                    { 331, "עין יהב " },
                    { 330, "עין יעקב " },
                    { 329, "עין ורד " },
                    { 334, "עינת " }
                });

            migrationBuilder.InsertData(
                table: "College",
                columns: new[] { "Id", "Name" },
                values: new object[] { 2, "אורט רחובות" });

            migrationBuilder.InsertData(
                table: "College",
                columns: new[] { "Id", "Name" },
                values: new object[,]
                {
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
                    { 1, "עברית" },
                    { 3, "ערבית" },
                    { 4, "צרפתית" },
                    { 5, "רוסית" },
                    { 2, "אנגלית" }
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
                    { 1, "Admin" },
                    { 2, "Employer" },
                    { 3, "Alumnus" }
                });

            migrationBuilder.InsertData(
                table: "StudyProgram",
                columns: new[] { "Id", "Name" },
                values: new object[,]
                {
                    { 1, "אחר" },
                    { 16, "תעשייה וניהול" },
                    { 15, "מכשור רפואי" },
                    { 14, "תוכנה" },
                    { 13, "קירור ומיזוג אוויר" },
                    { 12, "עיצוב תעשייתי" },
                    { 11, "עיצוב מדיה" },
                    { 9, "כימיה תרופתית" },
                    { 8, "טכנולוגיות מים" },
                    { 7, "חשמל" },
                    { 6, "בניין/אזרחית" },
                    { 4, "אלקטרוניקה" },
                    { 3, "אדריכלות נוף" },
                    { 2, "אדריכלות ועיצוב פנים" },
                    { 10, "מכונות" },
                    { 5, "ביוטכנולוגיה" }
                });

            migrationBuilder.InsertData(
                table: "Course_StudyProgram",
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
                table: "Course_StudyProgram",
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
                values: new object[] { 1, "203053764", 525, 3, new DateTime(1993, 1, 29, 0, 0, 0, 0, DateTimeKind.Unspecified), "Alumnus", "Maor", "Levy", "https://www.linkedin.com/in/maor-levy-565237173/", "maor0749@gmail", "4g9q7V0h3ZajxUpPiYbgaA==", "0507985556", 3, "2020", 14, "2018", "מרכז חרידי להכשרה מקצועית" });

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
                columns: new[] { "Id", "AlumnusId", "Description", "Logo", "MailForStudy", "Rate" },
                values: new object[] { 1, 1, "מרצה Full Stack במכללה 'מרכז החרדי להכשרה מקצועית', עיסוק עיקרי Angular. אשמח שנתקדם יחד :)", "defaultLogo.jpg", "maor0749@gmail", "90" });

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
                    { 1, 1 },
                    { 1, 2 }
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
                name: "IX_Course_StudyProgram_StudyProgramId",
                table: "Course_StudyProgram",
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
                name: "Course_StudyProgram");

            migrationBuilder.DropTable(
                name: "Languages");

            migrationBuilder.DropTable(
                name: "Teacher");

            migrationBuilder.DropTable(
                name: "Users");

            migrationBuilder.DropTable(
                name: "City");

            migrationBuilder.DropTable(
                name: "College");

            migrationBuilder.DropTable(
                name: "Role");

            migrationBuilder.DropTable(
                name: "StudyProgram");
        }
    }
}
