using Microsoft.AspNetCore.Mvc;
using System.Text.Json.Serialization;

namespace SIA.Web.Models
{
    public class GenericResponse
    {
        [JsonPropertyName("error")]
        public ProblemDetails ProblemDetails { get; set; }
        [JsonPropertyName("result")]
        public object Result { get; set; }

        public GenericResponse() { }

        public GenericResponse(object result, ProblemDetails problemDetails)
        {
            Result = result;
            ProblemDetails = problemDetails;
        }
    }

    public class GenericActionResult : IActionResult
    {
        private readonly GenericResponse _response;

        public GenericActionResult(GenericResponse response)
        {
            _response = response;
        }

        public GenericActionResult(object result)
        {
            _response = new GenericResponse
            {
                Result = result,
                ProblemDetails = null
            };
        }

        public GenericActionResult(ProblemDetails problemDetails)
        {
            _response = new GenericResponse
            {
                ProblemDetails = problemDetails,
                Result = null
            };
        }

        public GenericActionResult(object result, ProblemDetails problemDetails)
        {
            _response = new GenericResponse
            {
                Result = result,
                ProblemDetails = problemDetails,
            };
        }

        public async Task ExecuteResultAsync(ActionContext context)
        {
            var objectResult = new ObjectResult(_response)
            {
                StatusCode = _response.ProblemDetails?.Status ?? StatusCodes.Status200OK
            };

            await objectResult.ExecuteResultAsync(context);
        }
    }
}
