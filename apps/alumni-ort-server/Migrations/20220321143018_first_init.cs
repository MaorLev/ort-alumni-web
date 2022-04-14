using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace AlumniOrtServer.Migrations
{
    public partial class first_init : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
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
                table: "City",
                columns: new[] { "Id", "Name" },
                values: new object[,]
                {
                    { 1, "אונליין" },
                    { 2, "ירושלים" },
                    { 3, "בית מאיר" }
                });

            migrationBuilder.InsertData(
                table: "College",
                columns: new[] { "Id", "Name" },
                values: new object[] { 1, "אורט" });

            migrationBuilder.InsertData(
                table: "Languages",
                columns: new[] { "Id", "Name" },
                values: new object[,]
                {
                    { 1, "אנגלית" },
                    { 2, "צרפתית" }
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
                    { 1, "Admin" },
                    { 2, "Employer" },
                    { 3, "Alumnus" },
                    { 4, "Student" }
                });

            migrationBuilder.InsertData(
                table: "StudyProgram",
                columns: new[] { "Id", "Name" },
                values: new object[,]
                {
                    { 1, "בנייין" },
                    { 2, "תוכנה" }
                });

            migrationBuilder.InsertData(
                table: "Course_StudyProgram",
                columns: new[] { "Id", "Name", "StudyProgramId" },
                values: new object[,]
                {
                    { 1, "C Sharp", 1 },
                    { 2, "SQL", 1 },
                    { 3, "Autocad", 2 }
                });

            migrationBuilder.InsertData(
                table: "Users",
                columns: new[] { "Id", "Discriminator", "FirstName", "LastName", "Mail", "Password", "Phone", "RoleId" },
                values: new object[] { 3, "Admin", "admin", "sdsd", "csdcdc", "z2jwOXzgP4Y=", null, 1 });

            migrationBuilder.InsertData(
                table: "Users",
                columns: new[] { "Id", "CompanyAddress", "CompanyName", "ContactRole", "Discriminator", "FirstName", "LastName", "Mail", "Password", "Phone", "RoleId", "TypeOfBusiness" },
                values: new object[] { 2, "Jerusalem", "Elbit", "CTO", "Employer", "maor", "Levy", "maor1100@gmail.com", "X65h2+5fsJo=", null, 2, "HI" });

            migrationBuilder.InsertData(
                table: "Users",
                columns: new[] { "Id", "CardId", "CityId", "CollegeId", "DateOfBirth", "Discriminator", "FirstName", "LastName", "Linkedin", "Mail", "Password", "Phone", "RoleId", "StudyFinishYear", "StudyProgramId", "Alumnus_StudyStartYear", "WorkPlace" },
                values: new object[] { 1, "dcdscdscsd", 1, 1, new DateTime(2022, 3, 21, 16, 30, 16, 875, DateTimeKind.Local).AddTicks(1517), "Alumnus", "Maor", "Levy", "cdscdscsd", "danny@gmail", "vS/2fLmGDSw=", "054231", 3, "sdcsdcsd", 1, "2015", "dcsdcsd" });

            migrationBuilder.InsertData(
                table: "Claim",
                columns: new[] { "Id", "Type", "UserId", "Value" },
                values: new object[,]
                {
                    { 7, "name", 3, "admin" },
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
                values: new object[] { 1, 1, "dcscsdc", "sdcdscs", "sdcdscsd", "43" });

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
                values: new object[] { 2, 1 });

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
