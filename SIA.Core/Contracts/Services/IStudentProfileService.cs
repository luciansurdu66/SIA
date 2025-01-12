using Microsoft.AspNetCore.Http;
using SIA.Domain.Entities;
using System.Security.Claims;

namespace SIA.Core.Contracts.Services
{
    public interface IStudentProfileService
    {
        Task<StudentProfile> GetAsync(ClaimsPrincipal userClaimsPrincipal);
        Task<StudentProfile> UpdateAsync(ClaimsPrincipal userClaimsPrincipal, StudentProfile studentProfile, IFormFile profilePicture = null);
    }
}
