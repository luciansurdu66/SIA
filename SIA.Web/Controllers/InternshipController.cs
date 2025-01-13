using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using SIA.Common.Constants;
using SIA.Web.Helpers;
using SIA.Web.Models;

namespace SIA.Web.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class InternshipController : ControllerBase
    {
        [HttpGet]
        public IActionResult RetrieveInternships()
        {
            return ResponseHandler.HandleResponse(true);
        }

        [HttpGet("company/{id}")]
        public IActionResult RetrieveCompanyInternships([FromRoute] int companyId)
        {
            return ResponseHandler.HandleResponse(true);
        }

        [HttpGet("{id}")]
        public IActionResult RetrieveInternship([FromRoute] int internshipId)
        {
            return ResponseHandler.HandleResponse(true);
        }

        [HttpPost]
        [Authorize(Roles = Roles.Company)]
        public IActionResult AddInternship([FromBody] InternshipDto internshipDto)
        {
            return ResponseHandler.HandleResponse(true);
        }

        [HttpPut]
        [Authorize(Roles = Roles.Company)]
        public IActionResult UpdateInternship([FromBody] InternshipDto internshipDto)
        {
            return ResponseHandler.HandleResponse(true);
        }

        [HttpDelete("{id}")]
        [Authorize(Roles = Roles.Company)]
        public IActionResult DeleteInternship([FromRoute] int internshipId)
        {
            return ResponseHandler.HandleResponse(true);
        }
    }
}
