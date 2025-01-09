namespace SIA.Domain.Entities
{
    public class Internship
    {
        public int Id { get; set; }
        public int CompanyId { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public string Position { get; set; }
        public string Requirements { get; set; }
        public DateTime StartDate { get; set; }
        public DateTime? EndDate { get; set; }
        public string Period { get; set; }
        public string Location { get; set; }
        public int NumberOfPositions { get; set; }
        public decimal Salary { get; set; }
        public string ApplicationProcess { get; set; }
        public DateTime ApplicationEndline { get; set; }
        public string AdditionalInfo { get; set; }

        // Entity Framework navigation properties
        public Company Company { get; set; }
        public ICollection<Application> Applications { get; set; } = [];
    }
}
