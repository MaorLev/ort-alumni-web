using Microsoft.EntityFrameworkCore.Migrations;

namespace OrtAlumniWeb.AlumniOrtServer.Migrations
{
    public partial class added_propery_nameImg : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "OriginalImgName",
                table: "Articles",
                type: "nvarchar(max)",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "OriginalImgName",
                table: "Articles");
        }
    }
}
