using Microsoft.EntityFrameworkCore.Migrations;

namespace OrtAlumniWeb.AlumniOrtServer.Migrations
{
    public partial class addproperty_for_category : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "HebName",
                table: "Categories",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.UpdateData(
                table: "Categories",
                keyColumn: "Id",
                keyValue: 1,
                column: "HebName",
                value: "אירועים");

            migrationBuilder.UpdateData(
                table: "Categories",
                keyColumn: "Id",
                keyValue: 2,
                column: "HebName",
                value: "כללי");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "HebName",
                table: "Categories");
        }
    }
}
