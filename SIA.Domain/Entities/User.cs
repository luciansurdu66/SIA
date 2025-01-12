using Microsoft.AspNetCore.Identity;

namespace SIA.Domain.Entities
{
    public class User : IdentityUser
    {
        // Entity Framework navigation properties
        public StudentProfile StudentProfile { get; set; }
        public CompanyProfile CompanyProfile { get; set; }
        public ICollection<Message> SentMessages { get; set; } = [];
        public ICollection<Message> ReceivedMessages { get; set; } = [];
    }
}
