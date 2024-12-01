using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace LevelUpWebAPI.Migrations
{
    /// <inheritdoc />
    public partial class Second : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "UserName",
                table: "Graduates");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "UserName",
                table: "Graduates",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");
        }
    }
}
