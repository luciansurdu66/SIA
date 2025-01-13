namespace SIA.Common.Constants
{
    public static class ErrorMessages
    {
        public const string InvalidToken = "Your session has expired! Please login again";
        public const string Unauthorized = "You are not authorized to do this operation.";
        public const string UpdateError = "An error occured while updating the database.";
    }
    public static class ErrorTypes
    {
        public const string NotFound = "not-found-error";
        public const string AlreadyExists = "already-exists-error";
        public const string InvalidOperation = "invalid-operation-error";
        public const string Unauthorized = "unauthorized-error";
        public const string Forbidden = "forbidden-error";
        public const string InternalServerError = "internal-server-error";
    }

    public static class WarningTypes
    {
        public const string ApplicationWarning = "application-warning";
    }
}
