namespace SIA.Domain.Exceptions
{
    public class InvalidOperationException : Exception
    {
        public InvalidOperationException(string message) : base(message) { }
        public InvalidOperationException() : base("The operation you have tried is invalid!") { }
    }
}
