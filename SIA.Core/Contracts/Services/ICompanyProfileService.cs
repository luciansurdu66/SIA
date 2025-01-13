using SIA.Domain.Entities;
using System.Security.Claims;

namespace SIA.Core.Contracts.Services
{
    public interface ICompanyProfileService
    {
        Task<CompanyProfile> GetAsync(ClaimsPrincipal userClaimsPrincipal);
        Task<CompanyProfile> UpdateAsync(ClaimsPrincipal userClaimsPrincipal, CompanyProfile companyProfile);
    }
}
