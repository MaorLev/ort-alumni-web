using System;
using System.Text;
using AlumniOrtServer.Context;
using AlumniOrtServer.Data.Middleware;
using AlumniOrtServer.Jwt.Configuration;
using AlumniOrtServer.Jwt.JwtManagers;
using AlumniOrtServer.Models.AlumnusModel;
using AlumniOrtServer.Services;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.IdentityModel.Tokens;
using Newtonsoft.Json;
using Newtonsoft.Json.Serialization;


using System.IO;


using Microsoft.AspNetCore.Http;


using Microsoft.Extensions.FileProviders;
using Microsoft.AspNetCore.Http.Features;
using OrtAlumniWeb.AlumniOrtServer.Services.Interfaces;
using OrtAlumniWeb.AlumniOrtServer.Services;

namespace AlumniOrtServer
{
    public class Startup
    {
        // This method gets called by the runtime. Use this method to add services to the container.
        // For more information on how to configure your application, visit https://go.microsoft.com/fwlink/?LinkID=398940
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddControllers().AddNewtonsoftJson(options =>
                       options.SerializerSettings.ReferenceLoopHandling = ReferenceLoopHandling.Ignore
            );

            services.Configure<FormOptions>(o => {
                o.ValueLengthLimit = int.MaxValue;
                o.MultipartBodyLengthLimit = int.MaxValue;
                o.MemoryBufferThreshold = int.MaxValue;
            });
            var jwtConfig = Configuration.GetSection("JwtConfig").Get<JwtTokenConfig>();

            services.AddSingleton(jwtConfig);
            services.AddAuthentication(x =>
            {
                x.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
                x.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
            }).AddJwtBearer(x =>
            {
                x.RequireHttpsMetadata = true;
                x.SaveToken = true;
                x.TokenValidationParameters = new TokenValidationParameters
                {
                    ValidateIssuer = true,
                    ValidIssuer = jwtConfig.Issuer,//all the parameters for validate
                    ValidateIssuerSigningKey = true,
                    IssuerSigningKey = new SymmetricSecurityKey(Encoding.ASCII.GetBytes(jwtConfig.Secret)),
                    ValidAudience = jwtConfig.Audience,
                    ValidateAudience = true,
                    ValidateLifetime = true,
                    ClockSkew = TimeSpan.FromMinutes(1)
                };
            });

            services.AddScoped<IJwtManager, JwtManager>();
            services.AddCors(options =>
            {
                options.AddPolicy("EnableCORS", builder =>
                {
                    builder.AllowAnyOrigin()
                    .AllowAnyHeader()
                    .AllowAnyMethod();
                });
            });
            services.Configure<FormOptions>(o =>
            {
                o.ValueLengthLimit = int.MaxValue;
                o.MultipartBodyLengthLimit = int.MaxValue;
                o.MemoryBufferThreshold = int.MaxValue;
            });

            services.AddDbContext<AlumniDBContext>(options => options.UseSqlServer(Configuration.GetConnectionString("default")));
            services.AddScoped<IStudentService,StudentService>();
            services.AddScoped<IAlumnusService, AlumnusService>();
            services.AddScoped<ITeacherService, TeacherService>();
            services.AddScoped<IEmployerService, EmployerService>();
            services.AddScoped<IJobOfferService, JobOfferService>();
            services.AddScoped<IAdminService, AdminService>();
            services.AddScoped<IClaimService, ClaimService>();
            services.AddScoped<IAuthService, AuthService>();
            services.AddScoped<IArticleService, ArticleService>();
            services.AddScoped<IImgService, ImgService>();
        }



        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            app.UseHttpsRedirection();
            app.UseStaticFiles();
            app.UseStaticFiles(new StaticFileOptions()
            {
                FileProvider = new PhysicalFileProvider(Path.Combine(Directory.GetCurrentDirectory(), @"StaticFiles")),
                RequestPath = new PathString("/StaticFiles")
            });
            app.UseCors("EnableCORS");



            app.UseRouting();


            app.UseAuthentication();
            app.UseMiddleware<AllowedCorsMiddleware>();//alowed server coneection way middleware

            app.UseAuthorization();//for authorize usually in cotroller using


            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
/*                endpoints.MapGet("/", async context =>
                {
                    await context.Response.WriteAsync("Hello World!");
                });*/
            });
        }
    }
}
