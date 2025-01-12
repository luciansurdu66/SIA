using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using SIA.Common.Constants;
using SIA.Core.BusinessObjects;
using SIA.Core.Contracts.Repository;
using SIA.Core.Contracts.Services;
using SIA.Domain.Entities;
using SIA.Domain.Exceptions;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace SIA.Core.Features.Students.Auth
{
    public class StudentAuthService(UserManager<User> userManager,
        SignInManager<User> signInManager,
        RoleManager<IdentityRole> roleManager,
        IStudentProfileRepository studentProfileRepository,
        IConfiguration configuration) : IStudentAuthService
    {
        private readonly UserManager<User> _userManager = userManager;
        private readonly SignInManager<User> _signInManager = signInManager;
        private readonly RoleManager<IdentityRole> _roleManager = roleManager;
        private readonly IStudentProfileRepository _studentProfileRepository = studentProfileRepository;
        private readonly IConfiguration _configuration = configuration;

        public async Task<string> LogInStudent(AuthInput input)
        {
            User user = await _userManager.FindByEmailAsync(input.Email);
            if (user is null)
            {
                throw new NotFoundException("There is no account associated with this e-mail");
            }

            var result = await _signInManager.PasswordSignInAsync(user, input.Password, isPersistent: true, lockoutOnFailure: false);
            if (!result.Succeeded)
            {
                throw new Domain.Exceptions.InvalidOperationException("The e-mail and password do not match!");
            }

            return await GenerateJwtToken(user);
        }

        public async Task RegisterStudent(AuthInput input)
        {
            User user = new User { UserName = input.Email, Email = input.Email };
            var result = await _userManager.CreateAsync(user, input.Password);
            if (!result.Succeeded)
            {
                throw new AlreadyExistsException($"An account with the e-mail {input.Email} already exists.");
            }

            user = await _userManager.FindByEmailAsync(input.Email);
            await _userManager.AddToRoleAsync(user, Roles.Student);

            StudentProfile studentProfile = new()
            {
                UserId = user.Id,
                User = user,
            };
            await _studentProfileRepository.AddAsync(studentProfile);
        }

        private async Task<string> GenerateJwtToken(User user)
        {
            var claims = new List<Claim>
            {
                new Claim(ClaimTypes.Email, user.Email),
                new Claim(JwtRegisteredClaimNames.Sub, user.Id),
                new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString()),
                //new Claim(JwtRegisteredClaimNames.Iat, DateTime.Now.ToString())
            };

            var userRoles = await _userManager.GetRolesAsync(user);
            foreach (var item in userRoles)
            {
                claims.Add(new Claim(ClaimTypes.Role, item));
            }

            var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_configuration["TokenSettings:SecretKey"]!));
            var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);

            var token = new JwtSecurityToken(
                _configuration["TokenSettings:Issuer"],
                _configuration["TokenSettings:Audience"],
                claims,
                expires: DateTime.Now.AddMinutes(30),
                signingCredentials: creds);

            return new JwtSecurityTokenHandler().WriteToken(token);
        }
    }
}
