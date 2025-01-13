namespace SIA.Web.Models
{
    public class StudentProfileDto
    {
        public string Name { get; set; }
        public string PhoneNumber { get; set; }
        public DateTime? Birthdate { get; set; }
        public IFormFile ProfilePicture { get; set; }
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
    }
}
