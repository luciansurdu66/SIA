using Microsoft.AspNetCore.Identity;

namespace SIA.Domain.Entities
{
    public class User : IdentityUser
    {
        public string LinkedIn { get; set; }
        public string Instagram { get; set; }
        public string Facebook { get; set; }
        public string Website { get; set; }

        // Entity Framework navigation properties
        public Student Student { get; set; }
        public Company Company { get; set; }
        public ICollection<Message> SentMessages { get; set; } = [];
        public ICollection<Message> ReceivedMessages { get; set; } = [];
    }
}
