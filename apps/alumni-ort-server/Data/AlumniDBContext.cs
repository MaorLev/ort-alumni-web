using AlumniOrtServer.Data.Entities;
using AlumniOrtServer.Extensions;
using AlumniOrtServer.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AlumniOrtServer.Context
{
    public class AlumniDBContext : DbContext
    {
        public AlumniDBContext(DbContextOptions options) : base(options)
        {

        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
      //                                  !!Remember you can loads cities and same others ear with has data!!
            base.OnModelCreating(modelBuilder);

            modelBuilder.Entity<User>()
                .ToTable("Users")
                .HasDiscriminator();


            modelBuilder.Entity<Student>()
                .Property(u => u.CardId)
                .HasColumnName("CardId");

            modelBuilder.Entity<Alumnus>()
                .Property(u => u.CardId)
                .HasColumnName("CardId");

            modelBuilder.Entity<Student>()
                .Property(u => u.DateOfBirth).HasColumnType("date")
                .HasColumnName("DateOfBirth");

            modelBuilder.Entity<Alumnus>()
                .Property(u => u.DateOfBirth).HasColumnType("date")
                .HasColumnName("DateOfBirth");

            modelBuilder.Entity<Student>()
                .Property(u => u.CityId)
                .HasColumnName("CityId");

            modelBuilder.Entity<Alumnus>()
                .Property(u => u.CityId)
                .HasColumnName("CityId");

            modelBuilder.Entity<Student>()
                .Property(u => u.CollegeId)
                .HasColumnName("CollegeId");

            modelBuilder.Entity<Alumnus>()
                .Property(u => u.CollegeId)
                .HasColumnName("CollegeId");

            modelBuilder.Entity<Student>()
                .Property(u => u.StudyProgramId)
                .HasColumnName("StudyProgramId");

            modelBuilder.Entity<Alumnus>()
                .Property(u => u.StudyProgramId)
                .HasColumnName("StudyProgramId");

            modelBuilder.Entity<User>()
            .HasOne<Role>(s => s.Role)
            .WithMany(ad => ad.Users)
            .HasForeignKey(fk => fk.RoleId
            );

            Role role1 = new Role(1, "Admin");
            Role role2 = new Role(2, "Employer");
            Role role3 = new Role(3, "Alumnus");
            Role role4 = new Role(4, "Student");
            modelBuilder.Entity<Role>().HasData(role1, role2, role3, role4);

            modelBuilder.Entity<User>()
                .HasMany(u => u.Claims)
                .WithOne(c => c.User)
                .HasForeignKey(c => c.UserId);
                //.OnDelete(DeleteBehavior.Restrict);



            modelBuilder.Entity<Student>()
            .HasOne(c => c.City)
            .WithMany()
            .OnDelete(DeleteBehavior.Restrict);            
            
            modelBuilder.Entity<Alumnus>()
            .HasOne(c => c.City)
            .WithMany()
            .OnDelete(DeleteBehavior.Restrict);


            modelBuilder.Entity<Student>()
            .HasOne(s => s.StudyProgram)
            .WithMany()
            .OnDelete(DeleteBehavior.Restrict);            
            
            modelBuilder.Entity<Alumnus>()
            .HasOne(s => s.StudyProgram)
            .WithMany()
            .OnDelete(DeleteBehavior.Restrict);


            modelBuilder.Entity<Student>()
            .HasOne(co => co.College)
            .WithMany()
            .OnDelete(DeleteBehavior.Restrict);            
            
            modelBuilder.Entity<Alumnus>()
            .HasOne(co => co.College)
            .WithMany()
            .OnDelete(DeleteBehavior.Restrict);


            modelBuilder.Entity<Alumnus>()
             .HasOne(t => t.teacher)
             .WithOne(a => a.Alumanus)
             .HasForeignKey<Teacher>(a => a.AlumnusId)
             .OnDelete(DeleteBehavior.Restrict); 

            City city1 = new City(1, "אונליין");
            City city2 = new City(2, "ירושלים");
            City city3 = new City(3, "בית מאיר");
            modelBuilder.Entity<City>().HasData(city1, city2, city3);
            StudyProgram studyProgram1 = new StudyProgram(2, "תוכנה");
            StudyProgram studyProgram2 = new StudyProgram(1, "בנייין");
            modelBuilder.Entity<StudyProgram>().HasData(studyProgram2, studyProgram1);

            College college = new College(1, "אורט");

            modelBuilder.Entity<College>().HasData(college);

           Alumnus alumnus = new Alumnus(1,"danny@gmail", "Maor", "Levy", MD5Service.Encrypt("1234"), "054231", 1
                , 1,1, "dcdscdscsd", "sdcsdcsd", "cdscdscsd", "dcsdcsd", 3, "2015",DateTime.Now);
            modelBuilder.Entity<Alumnus>().HasData(alumnus);

            modelBuilder.Entity<TeacherLanguage>()
                .HasKey(tl => new { tl.LanguageId, tl.TeacherId });
            modelBuilder.Entity<TeacherLanguage>()
                .HasOne(tl => tl.Teacher)
                .WithMany(t => t.TeacherLanguages)
                .HasForeignKey(tl => tl.TeacherId);
                //.OnDelete(DeleteBehavior.Restrict);
            modelBuilder.Entity<TeacherLanguage>()
                .HasOne(tl => tl.Language)
                .WithMany(l => l.TeacherLanguages)
                .HasForeignKey(tl => tl.LanguageId)
                .OnDelete(DeleteBehavior.Restrict);

            Language language1 = new Language(1, "אנגלית");
            Language language2 = new Language(2, "צרפתית");


            modelBuilder.Entity<Language>().HasData(language1, language2);

            Teacher teacher = new Teacher(1, "sdcdscsd", "sdcdscs", "43", "dcscsdc",1);
            modelBuilder.Entity<Teacher>().HasData(teacher);

            TeacherLanguage teacherLanguage1 = new TeacherLanguage(1, 2);
            modelBuilder.Entity<TeacherLanguage>().HasData(teacherLanguage1);


            modelBuilder.Entity<Employer>()
            .HasMany<JobOffer>(j => j.JobOffers)
            .WithOne(e => e.Employer)
            .HasForeignKey(e => e.EmployerId);//checl if you have onDelte on foreign key in JobOffers


            Employer emp1 = new Employer(2, "maor1100@gmail.com", "maor", "Levy", MD5Service.Encrypt("2882"), "CTO", "Elbit", "HI", "Jerusalem", 2);
            modelBuilder.Entity<Employer>().HasData(emp1);

            JobOffer JO1 = new JobOffer(1, "junior", "sh@gmail.com", "fvfvfvf", "sdcdscsdcsd", true, "05079855556", "Logo", 2);
            modelBuilder.Entity<JobOffer>().HasData(JO1);




            modelBuilder.Entity<TeacherCourse>()
.HasKey(tc => new { tc.Course_StudyProgramId, tc.TeacherId });
            modelBuilder.Entity<TeacherCourse>()
                .HasOne(tc => tc.Teacher)
                .WithMany(t => t.TeacherCourses)
                .HasForeignKey(tl => tl.TeacherId);
            //.OnDelete(DeleteBehavior.Restrict);
            modelBuilder.Entity<TeacherCourse>()
                .HasOne(tl => tl.Course_StudyProgram)
                .WithMany(l => l.TeacherCourses)
                .HasForeignKey(tl => tl.Course_StudyProgramId)
                .OnDelete(DeleteBehavior.Restrict);
            modelBuilder.Entity<Course_StudyProgram>()
            .HasOne(cs => cs.studyProgram)
            .WithMany(l => l.Course_StudyProgram)
            .HasForeignKey(tl => tl.StudyProgramId)
            .OnDelete(DeleteBehavior.Restrict);



            Course_StudyProgram course1 = new Course_StudyProgram(1,1 ,"C Sharp");
            Course_StudyProgram course3 = new Course_StudyProgram(2,1 ,"SQL");
            Course_StudyProgram course2 = new Course_StudyProgram(3,2 ,"Autocad");

            modelBuilder.Entity<Course_StudyProgram>().HasData(course1, course2, course3);

            TeacherCourse teacherCourse1 = new TeacherCourse(1, 1);
            TeacherCourse teacherCourse2 = new TeacherCourse(1, 2);
            TeacherCourse teacherCourse3 = new TeacherCourse(1, 3);

            modelBuilder.Entity<TeacherCourse>().HasData(teacherCourse1, teacherCourse2, teacherCourse3);





            modelBuilder.Entity<ModeStudy_City>()
            .HasKey(mc => new { mc.ModeStudyId, mc.CityId, mc.TeacherId });
            modelBuilder.Entity<ModeStudy_City>()
                .HasOne(tc => tc.Teacher)
                .WithMany(t => t.ModeStudy_Cities)
                .HasForeignKey(tl => tl.TeacherId);
            //.OnDelete(DeleteBehavior.Restrict);

            modelBuilder.Entity<ModeStudy_City>()
                .HasOne(tc => tc.City)
                .WithMany(t => t.ModeStudy_Cities)
                .HasForeignKey(tl => tl.CityId)
                .OnDelete(DeleteBehavior.Restrict);
            modelBuilder.Entity<ModeStudy_City>()
                .HasOne(tc => tc.ModeStudy)
                .WithMany(t => t.ModeStudy_Cities)
                .HasForeignKey(tl => tl.ModeStudyId)
                .OnDelete(DeleteBehavior.Restrict);

            ModeStudy mode1 = new ModeStudy() { ModeStudyId = 1, Name = "Frontally" };
            ModeStudy mode2 = new ModeStudy() { ModeStudyId = 2, Name = "Online" };
            modelBuilder.Entity<ModeStudy>().HasData(mode1, mode2);
            //ModeStudy_City modecity1 = new ModeStudy_City(2, ModeStudyEnum.Frontally, 1);
            ModeStudy_City modecity1 = new ModeStudy_City() { CityId = 2, ModeStudyId = 1, TeacherId = 1 };
            modelBuilder.Entity<ModeStudy_City>().HasData(modecity1);

            modelBuilder.Entity<JobOffer_City>()
.HasKey(tc => new { tc.CityId, tc.JobOfferId });
            modelBuilder.Entity<JobOffer_City>()
                .HasOne(tc => tc.JobOffer)
                .WithMany(t => t.JobOffer_Cities)
                .HasForeignKey(tl => tl.JobOfferId);
            //.OnDelete(DeleteBehavior.Restrict);
            modelBuilder.Entity<JobOffer_City>()
                .HasOne(tl => tl.City)
                .WithMany(l => l.JobOffer_Cities)
                .HasForeignKey(tl => tl.CityId)
                .OnDelete(DeleteBehavior.Restrict);


            JobOffer_City JOC1 = new JobOffer_City(1, 1);
            JobOffer_City JOC2 = new JobOffer_City(1,2);
            modelBuilder.Entity<JobOffer_City>().HasData(JOC1, JOC2);

            modelBuilder.Entity<JobOffer_StudyProgram>()
.HasKey(tc => new { tc.StudyProgramId, tc.JobOfferId });
            modelBuilder.Entity<JobOffer_StudyProgram>()
                .HasOne(tc => tc.JobOffer)
                .WithMany(t => t.JobOffer_StudyPrograms)
                .HasForeignKey(tl => tl.JobOfferId);
            //.OnDelete(DeleteBehavior.Restrict);
            modelBuilder.Entity<JobOffer_StudyProgram>()
                .HasOne(tl => tl.StudyProgram)
                .WithMany(l => l.JobOffer_StudyPrograms)
                .HasForeignKey(tl => tl.StudyProgramId)
                .OnDelete(DeleteBehavior.Restrict);

            JobOffer_StudyProgram JOP1 = new JobOffer_StudyProgram(1, 1);
            JobOffer_StudyProgram JOP2 = new JobOffer_StudyProgram(1, 2);
            modelBuilder.Entity<JobOffer_StudyProgram>().HasData(JOP1,JOP2);


            Admin adm = new Admin(3, "csdcdc", "admin", "sdsd", MD5Service.Encrypt("123"), 1);

            modelBuilder.Entity<Admin>().HasData(adm);

            Claim claim1alu = new Claim(1, "name", alumnus.FirstName, alumnus.Id);
            Claim claim2alu = new Claim(2, "role", role3.Name, alumnus.Id);
            Claim claim3alu = new Claim(3, "userId", alumnus.Id.ToString(), alumnus.Id);
           
            Claim claim1emp = new Claim(4, "name", emp1.FirstName, emp1.Id);
            Claim claim2emp = new Claim(5, "role", role2.Name, emp1.Id);
            Claim claim3emp = new Claim(6, "userId", emp1.Id.ToString(), emp1.Id);

            Claim claim1adm = new Claim(7, "name", adm.FirstName, adm.Id);
            Claim claim2adm = new Claim(8, "role", role1.Name, adm.Id);
            Claim claim3adm = new Claim(9, "userId", adm.Id.ToString(), adm.Id);

            modelBuilder.Entity<Claim>().HasData(claim1alu, claim2alu, claim3alu,
                claim1emp, claim2emp, claim3emp, claim1adm, claim2adm, claim3adm);
        }

        public DbSet<Employer> Employers { get; set; }
        public DbSet<Student> Students { get; set; }//virtual attention
        public DbSet<Alumnus> Alumni { get; set; }
        public DbSet<Admin> Admins { get; set; }

        public DbSet<Teacher> Teachers { get; set; }
        //public DbSet<City> Cities { get; set; }

        public DbSet<JobOffer> JobOffers { get; set; }

        public DbSet<TeacherLanguage> TeacherLanguages { get; set; }
        public DbSet<Language> Languages { get; set; }

        public DbSet<TeacherCourse> TeacherCourses { get; set; }
        //public DbSet<Course_StudyProgram> Course_StudyPrograms { get; set; }
        //public DbSet<Course> Courses { get; set; }
        public DbSet<ModeStudy_City> ModeStudy_Cities { get; set; }
        public DbSet<ModeStudy> ModeStudies { get; set; }
        public DbSet<JobOffer_City> JobOffer_Cities { get; set; }
        public DbSet<JobOffer_StudyProgram> JobOffer_StudyPrograms { get; set; }
        public DbSet<User> Users { get; set; }

        public virtual DbSet<Role> Role { get; set; }
        public virtual DbSet<Claim> Claim { get; set; }





    }
}
