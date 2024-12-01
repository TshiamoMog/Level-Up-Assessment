using System.ComponentModel.DataAnnotations;

namespace LevelUpWebAPI.DTOs
{
    public class GraduateDTO
    {
        public string FirstName { get; set; } = string.Empty;
        public string LastName { get; set; } = string.Empty;
        [EmailAddress]
        public string EmailAddress { get; set; } = string.Empty;
        public DateTime DateOfBirth { get; set; }
        public int Age { get; set; }
    }
}
