using AlumniOrtServer.Data.Entities;
using AlumniOrtServer.Extensions;
using AlumniOrtServer.Models;
using Microsoft.EntityFrameworkCore;
using Newtonsoft.Json;
using OrtAlumniWeb.AlumniOrtServer.Data.Entities;
using System;
using System.Collections.Generic;
using System.IO;


namespace AlumniOrtServer.Context
{
  public class AlumniDBContext : DbContext
  {
    public AlumniDBContext(DbContextOptions options) : base(options)
    {

    }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
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


      JsonToList<City> citiesToList = new JsonToList<City>();
      string pathCity = "Cities.data.json";
      List<City> cities = citiesToList.GetData(pathCity);
      modelBuilder.Entity<City>().HasData(cities);

      JsonToList<StudyProgram> studyProgramToList = new JsonToList<StudyProgram>();
      string pathSP = "StudyProgram.data.json";
      List<StudyProgram> studyPrograms = studyProgramToList.GetData(pathSP);
      modelBuilder.Entity<StudyProgram>().HasData(studyPrograms);

      JsonToList<College> collegeToList = new JsonToList<College>();
      string pathCollege = "Colleges.data.json";
      List<College> colleges = collegeToList.GetData(pathCollege);
      modelBuilder.Entity<College>().HasData(colleges);

      Alumnus alumnus = new Alumnus(1, "maor0749@gmail.com", "Maor", "Levy", MD5Service.Encrypt("Ml123456"), "0507985556", 3
              , 3, 14, "203053764", "2020", "https://www.linkedin.com/in/maor-levy-565237173/", "מרכז חרידי להכשרה מקצועית", 3, "2018", new DateTime(1993, 01, 29));

      modelBuilder.Entity<Alumnus>().HasData(alumnus);

      //shani
      /*Alumnus alumnus1 = new Alumnus(1, "maor0749@gmail.com", "Maor", "Levy", MD5Service.Encrypt("Ml123456"), "0507985556", 3
            , 3, 14, "203053764", "2020", "https://www.linkedin.com/in/maor-levy-565237173/", "מרכז חרידי להכשרה מקצועית", 3, "2018", new DateTime(1993, 01, 29));

       Alumnus alumnus2 = new Alumnus(2, "moshe_zini@gmail.com", "Moshe", "Zini", MD5Service.Encrypt("Moshe1991"), "05042284668", 54
            , 7, 3, "208404414", "2020", "https://www.linkedin.com/in/mozini/", "ברצלונה עיצוב בעמ", 3, "2016", new DateTime(1991, 04, 09));

       Alumnus alumnus3 = new Alumnus(3, "noaron24@gmail.com", "Noa ", "Ron", MD5Service.Encrypt("Noa26"), "054558878", 50
            , 5, 2, "204666626", "2024", "https://www.linkedin.com/in/noaron/", "יהודה אדריכלים", 3, "2020", new DateTime(1998, 02, 08));

       modelBuilder.Entity<Alumnus>().HasData(alumnus1, alumnus2, alumnus3);

       Student st1 = new Student(4, "galcohen98@gmail.com", "Gal", "Cohen", MD5Service.Encrypt("Cohen192"),"0574700298",69,4,6,"204502217", new DateTime(1998, 03, 04),"2023",4);
       Student st2 = new Student(5, "denishabbat20@gmail.com", "Deni", "Shabbat ", MD5Service.Encrypt("Shabbat206"), "0527788782", 19, 5, 2, "305305734", new DateTime(2001, 01, 03), "2024", 4);
       Student st3 = new Student(6, "netaneldov@gmail.com", "Netanel", "Dov ", MD5Service.Encrypt("Dov197"), "0505674998", 22, 7, 3, "306553324", new DateTime(1997, 03, 21), "2022", 4);

       modelBuilder.Entity<Student>().HasData(st1,st2,st3);*/

      Article art1 = new Article(1, "כותרת", "תת כותרת", DateTime.Now, "נתיב תמונה", "שם תמונה", "פרטי מאמר", Constants.CategoryId.News, "מחבר");
      Article art2 = new Article(2, "2כותרת", "2תת כותרת", DateTime.Now.AddMinutes(2), "נתיב תמונה", "שם תמונה", "פרטי מאמר", Constants.CategoryId.News, "מחבר");
      //List<Article> arts = new List<Article> { art1, art2 };
      modelBuilder.Entity<Article>().HasData(new List<Article>{art1, art2});

      //shani
      /*//News_2
      Article art1 = new Article(1, "רמת הישגיות גבוהה", "מכללות ירוקות ברשת אורט", DateTime.Now.AddMinutes(5), "StaticFiles\\ImgArticles\\11_5_20244_10_45AM.jpg", "מכללות-ירוקות-ברשת-אורט-e1673509228417.jpg", "החלטת ממשלה 3419, מינואר 2018, בנושא רפורמה במערכת ההשכלה הטכנולוגית בישראל, העמידה את רשת מכללות אורט ישראל בפני אתגר משמעותי – גידול משמעותי במספר הלומדים, טיוב איכות ההוראה ורמת ההישגיות של הסטודנטים ושיפור ניכר באחוז המדופלמים. כיום, עם פתיחתה של שנת הלימודים , בעיצומו של יישום הרפורמה אנו עומדים עם 6 מכללות טכנולוגיות בפיקוח מהט, שמוגדרות כמכללות שברפורמה עם מספר גבוה של סטודנטים הלומדים במסלולי ההנדסאים של מהט ומשרד החינוך ושיפור משמעותי במדדים הפדגוגיים ובאחוזי הזכאות לדפלום. מתוכן, מכללות בראודה להנדסאים בכרמיאל, מכללת אורט סינגאלובסקי תל-אביב ומכללת אורט רחובות גם מוגדרות כמכללות ירוקות, דבר המקנה למכללות אלה חופש אקדמי לקבוע עד 25% מתכניות הלימוד הממלכתיות!", Constants.CategoryId.News, "Yshai Oliel");
      Article art2 = new Article(2, "מכללות אורט מחזקות את החוסן הלאומי", "קמפיין פרסומי חדש לשנת 2024  ", DateTime.Now.AddMinutes(7), "StaticFiles\\ImgArticles\\10_24_20244_9_51AM.jpg", "המילואימניקים-חוזרים-ללימודים_פברואר-2024_1.jpg", "מכללות אורט יוצאות בקונספט פרסומי חדש לשנת 2024 תחת הסלוגן ההנדסאים של אורט מחזקים את התעשייה בישראל. המלחמה והצרכים הביטחוניים הנרחבים של מדינת ישראל פגשו את התעשיות הביטחוניות בשיא של ביקושים והזמנות מכל העולם, עיתון כלכליסט מפרסם כי החברות הביטחוניות הגדולות כמו רפאל, התעשייה האווירית ואלביט מערכות דחו מאז תחילת המלחמה אספקת נשק בשווי כולל של  יותר מ-1.5 מיליארד דולר כדי להפנות משאבי ייצור וחומרי גלם לתמיכה בצורכי המלחמה של צהל. החברות נקלעו למצוקת כוח אדם חריפה עד שאלביט מערכות הציעה לעובדיה לשעבר שפרשו לגמלאות לשוב לסדנאות הייצור (כלכליסט, 14.01.2024), רפאל הודיעה שהיא מעוניינת לגייס עוד 2000 עובדים בשנה הקרובה וחברות נוספות פתחו במבצעי וגיוס נרחבים. מתוך ההבנה הזו, מכללות אורט נערכות לפתיחה נרחבת של כיתות הנדסאים נוספות, לרבות הזדמנות ייחודית לאנשי כוחות הביטחון להרוויח את השנה האקדמית.", Constants.CategoryId.News, "Edan Leshem");
      //Events_2
      Article art3 = new Article(3, "מקרטון למנגנון", "הפנינג מחלקות העיצוב השנתי של רשת מכללות אורט", DateTime.Now, "StaticFiles\\ImgArticles\\11_25_20244-21-30PM.jpeg", "WhatsApp-Image-2023-07-18-at-14.20.05-1-1536x865.jpeg", "ביום רביעי, 25/12/2024, בשעה 10:00 בבוקר התקיים הפנינג עיצוב חווייתי ומעניין -מקרטון למנגנון 3. ההפנינג מיועד לסטודנטים בשנת הלימודים הראשונה שלהם במכללות אורט בתחומי האדריכלות והעיצוב.זו השנה השלישית בה יקיימו המחלקות לאדריכלות ועיצוב אירוע יוצא דופן שאין דומה לו בארץ.מטרות העל לאירוע כזה היא צריבה תודעתית שרשת אורט ישראל הינה בית איכותי ללימודי אדריכלות ועיצוב, נטיעת גאוות יחידים בקרב הסגל והסטודנטים הדרך היא אתגר קבוצתי בדמות פיתוח מנגנונים דוגמת אוטומטות(בובות ודמויות מכניות), מבני מתח וכו', מנגנונים ואלמנטים מכאניים-דינאמיים משעשעים. עבודת צוות, העברת מסרים ורעיונות, חשיבה יצירתית ועוד..", Constants.CategoryId.Events, "Ilana Berger");
      Article art4 = new Article(4, "כנס החדשנות והיזמות", "נס החדשנות והיזמות של מכללות אורט לשנת 2024", DateTime.Now.AddMinutes(2), "StaticFiles\\ImgArticles\\7_1_20244_11_24AM.png", "840_480-כנס-חדשנות-2023-מכללות-אורט.png", "כנס החדשנות והיזמות של מכללות אורט לשנת 2024 התקיים ב-17/07/2024, במכללת אורט הרמלין בנתניה. הכנס, שיתקיים זו השנה החמישית , משלב בתוכו תחרות נושאת פרסים של כ- 70 פרוייקטים חדשניים בתחומי האלקטרוניקה, המכטרוניקה והתוכנה וכן פרוייקטים רב תחומיים.", Constants.CategoryId.Events, "Shahar Perkiss");
      //Education_3
      Article art5 = new Article(5, "איך לשפר את האנגלית?", "עשרה טיפים שיעזרו לכם בשיפור האנגלית ", DateTime.Now.AddMinutes(9), "StaticFiles\\ImgArticles\\5_22_2024_22_31PM.jpg", "img-i-can-learn-english.jpg", "מעוניינים ללמוד אנגלית או לשפר אותה? חלק גדול משימוש נכון בשפה הוא ההטמעה הטבעית שלה, אותה אפשר לבצע באמצעות פעולות יומיומיות בשעות הפנאי – בבוקר, בערב ואפילו בשעות הלילה. למשל: 1. האזנה לספר מוקלט 2. צפייה בתכניות טלוויזיה עם כתוביות באנגלית. 3. ללמוד אנגלית עם אפליקציות. 4. לדבר עם חברים. 5. קריאה באנגלית. 6. שירים באנגלית. 7.נסיעה לחול. לסיכום שימוש יומיומי בשפה האנגלית יאפשר לכם להטמיע אותה בחייכם וגם לשפר פלאים את יכולות הדיבור והכתיבה שלכם. ", Constants.CategoryId.Education, "Jonathan Erlich");
      Article art6 = new Article(6, "למידה אפקטיבית", "5 טיפים ללמידה אפקטיבית ", DateTime.Now.AddMinutes(11), "StaticFiles\\ImgArticles\\11_1_20244_23_05PM.jpg", "laptop-3087585_640.jpg", "סטודנטים? מחפשים את הדרך הדרך ללמוד בלי להירדם על הסיכומים? ריכזנו עבורכם כמה שיטות וטיפים פחות מוכרים ללמידה נכונה. 1. הזמן לא קובע. 2. לסוגים שונים של אנשים מתאים סוג שונה של למידה. 3. אל תשעממו את המוח שלכם, אבל גם אל תתישו אותו. 4. עשו פעילות גופנית. 5. הפכו את החומר לדיבייט.", Constants.CategoryId.Education, "Harel Levy");
      Article art7 = new Article(7, "טיפים למבחנים", "איך להצליח במבחנים ", DateTime.Now.AddMinutes(15), "StaticFiles\\ImgArticles\\10_25_20244_10_03AM.jpg","156858674_i.jpg", "תגיעו בזמן למבחן (מומלץ חצי שעה לפני מועד המבחן). קראו היטב את השאלות וסמנו בצבע הוראות ומילות מפתח (הצג, הסבר, השווה וכדומה). מבחנים אמריקאים - תענו קודם על השאלות הקלות שעוסקות בחומר בו אתם שולטים. במבחנים עם שאלות פתוחות – תענו קודם על השאלות בעלות ניקוד רב יותר. תכתבו בדף טיוטה שלד של תשובה הכולל את כל הנקודות אליהן תרצו להתייחס בתשובתכם. אל תבזבזו זמן על שאלות שאתם לא יודעים ושוות מעט נקודות. שימו לב למסיחים הכוללים ביטויים מוחלטים, כגון: תמיד או אף פעם לא. הדגישו את הביטויים הללו, כדי לא לפספס אותם. פתאום לא זוכרים חומר מסוים? לא להילחץ! תתחילו לרשום על דף טיוטה את כל המונחים/מושגים שעולים לכם לראש - הכול נמצא בראש שלכם, עם פעילות הכתיבה הלחץ ירד ותיזכרו שוב במה שלמדתם.", Constants.CategoryId.Education, "Hila Rosen");
      //List<Article> arts = new List<Article> { art1, art2 };
      modelBuilder.Entity<Article>().HasData(new List<Article> { art1, art2, art3, art4, art5, art6, art7 });*/




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

      JsonToList<Language> languageToList = new JsonToList<Language>();
      string pathLanguage = "Language.data.json";
      List<Language> languages = languageToList.GetData(pathLanguage);
      modelBuilder.Entity<Language>().HasData(languages);

      
      Teacher teacher = new Teacher(1, "maor0749@gmail.com", "90",
        "מרצה Full Stack במכללה 'מרכז החרדי להכשרה מקצועית', עיסוק עיקרי Angular. אשמח שנתקדם יחד :)", 1);
      modelBuilder.Entity<Teacher>().HasData(teacher);

      TeacherLanguage teacherLanguage1 = new TeacherLanguage(1, 1);
      modelBuilder.Entity<TeacherLanguage>().HasData(teacherLanguage1);

      //shani
      /*
      Teacher teacher1 = new Teacher(1, "maor0749@gmail", "90",
        "מרצה Full Stack במכללה 'מרכז החרדי להכשרה מקצועית', עיסוק עיקרי Angular. אשמח שנתקדם יחד :)", 1);
      Teacher teacher2 = new Teacher(2, "noaron24@gmail.com", "100",
        "הי, אני נועה עובדת ביהודה אדריכלים עיסוק עיקרי מעצבת פניםץ אשמח לעבור יחד איתכם את התואר :)", 3);
      modelBuilder.Entity<Teacher>().HasData(teacher1, teacher2);

      TeacherLanguage teacherLanguage1 = new TeacherLanguage(1, 1);
      TeacherLanguage teacherLanguage2 = new TeacherLanguage(2, 1);
      modelBuilder.Entity<TeacherLanguage>().HasData(teacherLanguage1,teacherLanguage2);*/


      modelBuilder.Entity<Employer>()
      .HasMany<JobOffer>(j => j.JobOffers)
      .WithOne(e => e.Employer)
      .HasForeignKey(e => e.EmployerId);//checl if you have onDelte on foreign key in JobOffers


      Employer emp1 = new Employer(2, "maor1100@gmail.com", "maor", "Levy", MD5Service.Encrypt("Ml123456"), "CTO", "Elbit", "HI", "Jerusalem", 2);
      //shani
      //Employer emp1 = new Employer(7, "tova1100@gmail.com", "Tova", "Levy", MD5Service.Encrypt("Tl123456"), "CTO", "Elbit", "HI", "Jerusalem", 2);
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

      JsonToList<Course_StudyProgram> CoursestoList = new JsonToList<Course_StudyProgram>();
      string coursesPath = "Courses.data.json";
      List<Course_StudyProgram> courses = CoursestoList.GetData(coursesPath);

      modelBuilder.Entity<Course_StudyProgram>().HasData(courses);

      
      TeacherCourse teacherCourse1 = new TeacherCourse(1, 1);
      TeacherCourse teacherCourse2 = new TeacherCourse(1, 2);
      TeacherCourse teacherCourse3 = new TeacherCourse(1, 3);
      
      modelBuilder.Entity<TeacherCourse>().HasData(teacherCourse1, teacherCourse2, teacherCourse3);
       

      //shani
      /*
      TeacherCourse teacherCourse1 = new TeacherCourse(1, 46);
      TeacherCourse teacherCourse2 = new TeacherCourse(1, 47);
      TeacherCourse teacherCourse3 = new TeacherCourse(1, 49);

      TeacherCourse teacherCourse4 = new TeacherCourse(2, 6);
      TeacherCourse teacherCourse5 = new TeacherCourse(2, 7);
      TeacherCourse teacherCourse6 = new TeacherCourse(2, 8);

      modelBuilder.Entity<TeacherCourse>().HasData(teacherCourse1, teacherCourse2, teacherCourse3, teacherCourse4, teacherCourse5, teacherCourse6);
      */




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
      JobOffer_City JOC2 = new JobOffer_City(1, 2);
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

      JobOffer_StudyProgram JOP1 = new JobOffer_StudyProgram(1, 2);
      JobOffer_StudyProgram JOP2 = new JobOffer_StudyProgram(1, 3);
      modelBuilder.Entity<JobOffer_StudyProgram>().HasData(JOP1, JOP2);


      Admin adm = new Admin(3, "maor79855@gmail.com", "Maor", "Levy", MD5Service.Encrypt("Ml123456"), 1);
      modelBuilder.Entity<Admin>().HasData(adm);
      //shani
      /*
      Admin adm1 = new Admin(8, "chenraz01@gmail.com", "Chen", "Raz", MD5Service.Encrypt("Craz2304"), 1);
      Admin adm2 = new Admin(9, "adibaror06@gmail.com", "Adi", "BarOr", MD5Service.Encrypt("adib1701"), 1);
      modelBuilder.Entity<Admin>().HasData(adm1,adm2);*/





      //shani
      /*
      //Alumnus
      Claim claim1alu1 = new Claim(1, "name", alumnus1.FirstName, alumnus1.Id);
      Claim claim2alu1 = new Claim(2, "role", role3.Name, alumnus1.Id);
      Claim claim3alu1 = new Claim(3, "userId", alumnus1.Id.ToString(), alumnus1.Id);

      Claim claim1alu2 = new Claim(4, "name", alumnus2.FirstName, alumnus2.Id);
      Claim claim2alu2 = new Claim(5, "role", role3.Name, alumnus2.Id);
      Claim claim3alu2 = new Claim(6, "userId", alumnus2.Id.ToString(), alumnus2.Id);

      Claim claim1alu3 = new Claim(7, "name", alumnus3.FirstName, alumnus3.Id);
      Claim claim2alu3 = new Claim(8, "role", role3.Name, alumnus3.Id);
      Claim claim3alu3 = new Claim(8, "userId", alumnus3.Id.ToString(), alumnus3.Id);

     //Student
      Claim claim1st1 = new Claim(10, "name", st1.FirstName, st1.Id);
      Claim claim2st1 = new Claim(11, "role", role4.Name, st1.Id);
      Claim claim3st1 = new Claim(12, "userId", st1.Id.ToString(), st1.Id);

      Claim claim1st2 = new Claim(13, "name", st2.FirstName, st2.Id);
      Claim claim2st2 = new Claim(14, "role", role4.Name, st2.Id);
      Claim claim3st2 = new Claim(15, "userId", st2.Id.ToString(), st2.Id);

      Claim claim1st3 = new Claim(16, "name", st3.FirstName, st3.Id);
      Claim claim2st3 = new Claim(17, "role", role4.Name, st3.Id);
      Claim claim3st3 = new Claim(18, "userId", st3.Id.ToString(), st3.Id);

      //Admin
      Claim claim1adm1 = new Claim(19, "name", adm1.FirstName, adm1.Id);
      Claim claim2adm1 = new Claim(20, "role", role1.Name, adm1.Id);
      Claim claim3adm1 = new Claim(21, "userId", adm1.Id.ToString(), adm1.Id);

      Claim claim1adm2 = new Claim(22, "name", adm2.FirstName, adm2.Id);
      Claim claim2adm2 = new Claim(23, "role", role1.Name, adm2.Id);
      Claim claim3adm2 = new Claim(24, "userId", adm2.Id.ToString(), adm2.Id);

      //Employer
      Claim claim1emp = new Claim(25, "name", emp1.FirstName, emp1.Id);
      Claim claim2emp = new Claim(26, "role", role2.Name, emp1.Id);
      Claim claim3emp = new Claim(27, "userId", emp1.Id.ToString(), emp1.Id);
*/


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


      Category cat1 = new Category(Constants.CategoryId.Events, Constants.CategoryName.Events);
      Category cat2 = new Category(Constants.CategoryId.News, Constants.CategoryName.News);
      Category cat3 = new Category(Constants.CategoryId.Education, Constants.CategoryName.Education);
      modelBuilder.Entity<Category>().HasData(cat1, cat2, cat3);

      modelBuilder.Entity<Logo>()
            .ToTable("Logos")
            .HasDiscriminator();

      modelBuilder.Entity<Logo>(entity =>
      {
        entity.Property(e => e.Size)
            .HasColumnType("decimal(18,2)")
            .HasPrecision(18, 2);
      });
      modelBuilder.Entity<Teacher>()
          .HasOne<TeacherLogo>(l => l.Logo)
          .WithOne(t => t.Teacher);
    }

    public virtual DbSet<City> Cities { get; set; }
    public virtual DbSet<College> Colleges { get; set; }

    public virtual DbSet<StudyProgram> StudyPrograms { get; set; }
    public virtual DbSet<Course_StudyProgram> Course_StudyPrograms { get; set; }
    public DbSet<Language> Languages { get; set; }
    public DbSet<Employer> Employers { get; set; }
    public DbSet<Student> Students { get; set; }
    public DbSet<Alumnus> Alumni { get; set; }
    public DbSet<Admin> Admins { get; set; }

    public DbSet<Teacher> Teachers { get; set; }

    public DbSet<JobOffer> JobOffers { get; set; }

    public DbSet<TeacherLanguage> TeacherLanguages { get; set; }

    public DbSet<TeacherCourse> TeacherCourses { get; set; }
    public DbSet<ModeStudy_City> ModeStudy_Cities { get; set; }
    public DbSet<ModeStudy> ModeStudies { get; set; }
    public DbSet<JobOffer_City> JobOffer_Cities { get; set; }
    public DbSet<JobOffer_StudyProgram> JobOffer_StudyPrograms { get; set; }
    public DbSet<User> Users { get; set; }

    public virtual DbSet<Role> Role { get; set; }
    public virtual DbSet<Claim> Claim { get; set; }
    public virtual DbSet<Article> Articles { get; set; }
    public virtual DbSet<Category> Categories { get; set; }

    public virtual DbSet<TeacherLogo> TeacherLogo { get; set; }

  }
}
class JsonToList<T>
{
  public List<T> GetData(string path)
  {
    var folderName = Path.Combine("StaticFiles\\JsonData", path);
    var pathToSave = Path.Combine(Directory.GetCurrentDirectory(), folderName);
    string jsonFromFile;
    using (StreamReader reader = new StreamReader(pathToSave))
    {
      jsonFromFile = reader.ReadToEnd();
    }
    return JsonConvert.DeserializeObject<List<T>>(jsonFromFile);
  }
}