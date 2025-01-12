using Microsoft.AspNetCore.Mvc;
using SIA.Common.Constants;
using SIA.Web.Models;

namespace SIA.Web.Helpers
{
    public static class ResponseHandler
    {
        public static GenericActionResult HandleResponse(object response)
        {
            return new GenericActionResult(response);
        }

        public static GenericActionResult HandleResponse(string errorMessage)
        {
            var problemDetails = new ProblemDetails
            {
                Status = StatusCodes.Status500InternalServerError,
                Type = ErrorTypes.InternalServerError,
                Title = "An error has occured",
                Detail = errorMessage
            };
            return new GenericActionResult(problemDetails);
        }

        public static GenericActionResult HandleResponse(ICollection<string> errorMessages)
        {
            var problemDetails = new ProblemDetails
            {
                Status = StatusCodes.Status400BadRequest,
                Type = ErrorTypes.InvalidOperation,
                Title = "The request was invalid",
                Detail = "Multiple errors were found",
            };
            problemDetails.Extensions.Add("Errors", errorMessages);
            return new GenericActionResult(problemDetails);
        }

        public static GenericActionResult HandleResponse(object response, string warningMessage)
        {
            var problemDetails = new ProblemDetails
            {
                Status = StatusCodes.Status200OK,
                Type = WarningTypes.ApplicationWarning,
                Title = "Request passed with warnings",
                Detail = warningMessage
            };
            return new GenericActionResult(response, problemDetails);
        }

        public static GenericActionResult HandleUnauthorizedResponse(string message = "")
        {
            var problemDetails = new ProblemDetails
            {
                Status = StatusCodes.Status401Unauthorized,
                Type = ErrorTypes.Unauthorized,
                Title = "You are not authorized",
                Detail = string.IsNullOrEmpty(message) ? "You are not authorized for this operation" : message
            };
            return new GenericActionResult(problemDetails);
        }
    }
}
