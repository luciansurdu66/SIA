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
        ICompanyProfileService companyProfileService,
        IMapper mapper) : ControllerBase
    {
        private readonly IStudentProfileService _studentProfileService = studentProfileService;
        private readonly ICompanyProfileService _companyProfileService = companyProfileService;
        private readonly IMapper _mapper = mapper;

        [HttpGet("student")]
        [Authorize(Roles = Roles.Student)]
        public async Task<IActionResult> RetrieveStudentProfile()
        {
            StudentProfile studentProfile = await _studentProfileService.GetAsync(User);
            return ResponseHandler.HandleResponse(_mapper.Map<StudentProfileDto>(studentProfile));
        }

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

        [HttpGet("company")]
        [Authorize(Roles = Roles.Company)]
        public async Task<IActionResult> RetrieveCompanyProfile()
        {
            CompanyProfile companyProfile = await _companyProfileService.GetAsync(User);
            return ResponseHandler.HandleResponse(_mapper.Map<CompanyProfileDto>(companyProfile));
        }

        [HttpPut("company")]
        [Authorize(Roles = Roles.Company)]
        public async Task<IActionResult> UpdateCompanyProfile([FromBody] CompanyProfileDto companyProfileDto)
        {
            if (companyProfileDto is null)
            {
                return ResponseHandler.HandleResponse("Invalid request!");
            }

            CompanyProfile updatedCompanyProfile = await _companyProfileService.UpdateAsync(User, _mapper.Map<CompanyProfile>(companyProfileDto));
            return ResponseHandler.HandleResponse(_mapper.Map<StudentProfileDto>(updatedCompanyProfile));
        }
    }
}
