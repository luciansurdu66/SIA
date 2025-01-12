namespace SIA.Domain.Entities
{
    public class CompanyProfile
    {
        public int Id { get; set; }
        public string UserId { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public string Field { get; set; }
        public string Location { get; set; }
        public bool IsActive { get; set; }
        public string LinkedIn { get; set; }
        public string Instagram { get; set; }
        public string Facebook { get; set; }
        public string Website { get; set; }

        // Entity Framework navigation properties
        public User User { get; set; }
        public ICollection<Internship> Internships { get; set; } = [];
    }
}
