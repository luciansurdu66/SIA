using SIA.Common.Constants;

namespace SIA.Domain.Entities
{
    public class Message
    {
        public int Id { get; set; }
        public string SenderUserId { get; set; }
        public string ReceiverUserId { get; set; }
        public string Text { get; set; }
        public DateTime SentAt { get; set; }
        public MessageStatus Status { get; set; }

        // Entity Framework navigation properties
        public User SenderUser { get; set; }
        public User ReceiverUser { get; set; }
    }
}
