namespace SIA.Web.Models
{
    public class InternshipBaseDto
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public DateTime ApplicationDeadline { get; set; }
        public bool IsActive { get; set; }
    }

    public class InternshipDto : InternshipBaseDto
    {
        public string Position { get; set; }
        public string Requirements { get; set; }
        public DateTime StartDate { get; set; }
        public DateTime? EndDate { get; set; }
        public string Period { get; set; }
        public string Location { get; set; }
        public int NumberOfPositions { get; set; }
        public decimal Salary { get; set; }
        public string ApplicationProcess { get; set; }
        public string AdditionalInfo { get; set; }
    }
}
