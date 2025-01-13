using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace SIA.Infrastructure.Migrations
{
    /// <inheritdoc />
    public partial class PropertyNameChanges : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "ProfilePicture",
                table: "Students",
                newName: "ProfilePictureData");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "ProfilePictureData",
                table: "Students",
                newName: "ProfilePicture");
        }
    }
}
