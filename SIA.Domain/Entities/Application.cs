using SIA.Common.Constants;

namespace SIA.Domain.Entities
{
    public class Application
    {
        public int Id { get; set; }
        public int StudentId { get; set; }
        public int InternshipId { get; set; }
        public ApplicationStatus Status { get; set; }
        public string Feedback { get; set; }
        public DateTime SubmissionDate { get; set; }

        // Entity Framework navigation properties
        public StudentProfile Student { get; set; }
        public Internship Intership { get; set; }
        public ICollection<Document> Documents { get; set; } = [];
    }
}
