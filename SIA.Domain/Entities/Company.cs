namespace SIA.Domain.Entities
{
    public class Company
    {
        public int Id { get; set; }
        public string UserId { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public string Field { get; set; }
        public string Location { get; set; }
        public bool IsActive { get; set; }

        // Entity Framework navigation properties
        public User User { get; set; }
        public ICollection<Internship> Internships { get; set; } = [];
    }
}
