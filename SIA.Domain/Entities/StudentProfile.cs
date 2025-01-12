namespace SIA.Domain.Entities
{
    public class StudentProfile
    {
        public int Id { get; set; }
        public string UserId { get; set; }
        public string Name { get; set; }
        public string PhoneNumber { get; set; }
        public DateTime? Birthdate { get; set; }
        public string ProfilePictureType { get; set; }
        public byte[] ProfilePictureData { get; set; }
        public string Location { get; set; }
        public string StudyInstitution { get; set; }
        public string StudyDegree { get; set; }
        public DateTime? ExpectedGraduationDate { get; set; }
        public string HighSchool { get; set; }
        public string HardSkills { get; set; }
        public string SoftSkills { get; set; }
        public string PersonalProjects { get; set; }
        public string Achievements { get; set; }
        public string ExtraActivities { get; set; }
        public string Languages { get; set; }
        public string CareerObjectives { get; set; }
        public string LinkedIn { get; set; }
        public string Instagram { get; set; }
        public string Facebook { get; set; }
        public string Website { get; set; }

        // Entity Framework navigation properties
        public User User { get; set; }
        public ICollection<Application> Applications { get; set; } = [];
    }
}
