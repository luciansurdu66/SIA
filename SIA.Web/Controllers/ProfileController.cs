using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using SIA.Common.Constants;
using SIA.Core.Contracts.Services;
using SIA.Domain.Entities;
using SIA.Web.Helpers;
using SIA.Web.Models;

namespace SIA.Web.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ProfileController(IStudentProfileService studentProfileService,
        IMapper mapper) : ControllerBase
    {
        private readonly IStudentProfileService _studentProfileService = studentProfileService;
        private readonly IMapper _mapper = mapper;

        [HttpPut("student")]
        [Authorize(Roles = Roles.Student)]
        public async Task<IActionResult> UpdateStudentProfile([FromForm] StudentProfileDto studentProfileDto)
        {
            if (studentProfileDto is null)
            {
                return ResponseHandler.HandleResponse("Invalid request!");
            }
            else if (studentProfileDto.ProfilePicture is not null && (studentProfileDto.ProfilePicture.Length == 0 || !studentProfileDto.ProfilePicture.ContentType.Contains("image")))
            {
                return ResponseHandler.HandleResponse("Invalid Profile Picture!");
            }

            StudentProfile updatedStudentProfile = await _studentProfileService.UpdateAsync(User, _mapper.Map<StudentProfile>(studentProfileDto), studentProfileDto.ProfilePicture);
            return ResponseHandler.HandleResponse(_mapper.Map<StudentProfileDto>(updatedStudentProfile));
        }
    }
}
