using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace SIA.Infrastructure.Migrations
{
    /// <inheritdoc />
    public partial class InternshipChanges : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "ApplicationEndline",
                table: "Internships",
                newName: "ApplicationDeadline");

            migrationBuilder.AddColumn<bool>(
                name: "IsActive",
                table: "Internships",
                type: "boolean",
                nullable: false,
                defaultValue: false);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "IsActive",
                table: "Internships");

            migrationBuilder.RenameColumn(
                name: "ApplicationDeadline",
                table: "Internships",
                newName: "ApplicationEndline");
        }
    }
}
