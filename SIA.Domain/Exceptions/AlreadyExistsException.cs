namespace SIA.Domain.Exceptions
{
    public class AlreadyExistsException : Exception
    {
        public AlreadyExistsException(string message) : base(message) { }
        public AlreadyExistsException() : base("The resource mentioned already exists.") { }
    }
}
