using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using SIA.Core.BusinessObjects;
using SIA.Core.Contracts.Services;
using SIA.Web.Helpers;
using SIA.Web.Models;
using SIA.Web.Validators;

namespace SIA.Web.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AccountsController(IStudentAuthService studentAuthService,
        ICompanyAuthService companyAuthService,
        IConfiguration configuration,
        IMapper mapper) : ControllerBase
    {
        private readonly IStudentAuthService _studentAuthService = studentAuthService;
        private readonly ICompanyAuthService _companyAuthService = companyAuthService;
        private readonly IConfiguration _configuration = configuration;
        private readonly IMapper _mapper = mapper;

        [HttpPost("student/register")]
        public async Task<IActionResult> RegisterStudent([FromBody] AuthInputDto inputDto)
        {
            ICollection<string> errors = AuthValidators.ValidateAuthInput(inputDto);
            if (errors.Any())
            {
                return ResponseHandler.HandleResponse(errors);
            }

            await _studentAuthService.RegisterStudent(_mapper.Map<AuthInput>(inputDto));
            return await SignInStudent(inputDto);
        }

        [HttpPost("student/login")]
        public async Task<IActionResult> SignInStudent([FromBody] AuthInputDto inputDto)
        {
            ICollection<string> errors = AuthValidators.ValidateAuthInput(inputDto);
            if (errors.Any())
            {
                return ResponseHandler.HandleResponse(errors);
            }

            string token = await _studentAuthService.LogInStudent(_mapper.Map<AuthInput>(inputDto));
            return ResponseHandler.HandleResponse(new { Token = token });
        }

        [HttpPost("company/register")]
        public async Task<IActionResult> RegisterCompany([FromBody] AuthInputDto inputDto)
        {
            ICollection<string> errors = AuthValidators.ValidateAuthInput(inputDto);
            if (errors.Any())
            {
                return ResponseHandler.HandleResponse(errors);
            }

            await _companyAuthService.RegisterCompany(_mapper.Map<AuthInput>(inputDto));
            return await SignInCompany(inputDto);
        }

        [HttpPost("company/login")]
        public async Task<IActionResult> SignInCompany([FromBody] AuthInputDto inputDto)
        {
            ICollection<string> errors = AuthValidators.ValidateAuthInput(inputDto);
            if (errors.Any())
            {
                return ResponseHandler.HandleResponse(errors);
            }

            string token = await _companyAuthService.LogInCompany(_mapper.Map<AuthInput>(inputDto));
            return ResponseHandler.HandleResponse(new { Token = token });
        }
    }
}