using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using SIA.Common.Constants;
using SIA.Domain.Exceptions;
using SIA.Web.Models;
using System.Net;
using System.Text.Json;

namespace SIA.Web.Middleware
{
    public class ErrorHandlerMiddleware : IMiddleware
    {
        public async Task InvokeAsync(HttpContext context, RequestDelegate next)
        {
            try
            {
                await next(context);
            }
            catch (Exception exception)
            {
                var response = context.Response;
                response.ContentType = "application/json";

                ProblemDetails error;
                switch (exception)
                {
                    case NotFoundException ex:
                        {
                            error = new ProblemDetails()
                            {
                                Detail = ex.Message,
                                Status = StatusCodes.Status404NotFound,
                                Type = ErrorTypes.NotFound
                            };
                            break;
                        }
                    case AlreadyExistsException ex:
                        {
                            error = new ProblemDetails()
                            {
                                Detail = ex.Message,
                                Status = StatusCodes.Status400BadRequest,
                                Type = ErrorTypes.AlreadyExists
                            };
                            break;
                        }
                    case Domain.Exceptions.InvalidOperationException ex:
                        {
                            error = new ProblemDetails()
                            {
                                Detail = ex.Message,
                                Status = StatusCodes.Status400BadRequest,
                                Type = ErrorTypes.InvalidOperation
                            };
                            break;
                        }
                    case SecurityTokenException _:
                    case SecurityTokenArgumentException _:
                        {
                            error = new ProblemDetails()
                            {
                                Detail = ErrorMessages.InvalidToken,
                                Status = StatusCodes.Status401Unauthorized,
                                Type = ErrorTypes.Unauthorized
                            };
                            break;
                        }
                    case DbUpdateConcurrencyException _:
                    case DbUpdateException _:
                        {
                            error = new ProblemDetails()
                            {
                                Detail = ErrorMessages.UpdateError,
                                Status = StatusCodes.Status500InternalServerError,
                                Type = ErrorTypes.InternalServerError
                            };
                            break;
                        }
                    case UnauthorizedAccessException _:
                        {
                            error = new ProblemDetails()
                            {
                                Detail = ErrorMessages.Unauthorized,
                                Status = StatusCodes.Status401Unauthorized,
                                Type = ErrorTypes.Unauthorized
                            };
                            break;
                        }
                    default:
                        error = new ProblemDetails()
                        {
                            Detail = exception.Message,
                            Status = StatusCodes.Status500InternalServerError,
                            Type = ErrorTypes.InternalServerError,
                        };
                        break;
                }

                var result = JsonSerializer.Serialize(new GenericResponse(null, error));
                context.Response.StatusCode = error.Status.GetValueOrDefault((int)HttpStatusCode.InternalServerError);
                await response.WriteAsync(result);
            }
        }
    }
}
