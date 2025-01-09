namespace SIA.Domain.Entities
{
    public class Document
    {
        public int Id { get; set; }
        public int ApplicationId { get; set; }
        public Application Application { get; set; }
        public string FileName { get; set; }
        public string FileType { get; set; }
        public byte[] FileData { get; set; }
    }
}
