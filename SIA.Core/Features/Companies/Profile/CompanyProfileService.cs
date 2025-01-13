using Microsoft.AspNetCore.Identity;
using SIA.Core.Contracts.Repository;
using SIA.Core.Contracts.Services;
using SIA.Domain.Entities;
using System.Security.Claims;

namespace SIA.Core.Features.Companies.Profile
{
    public class CompanyProfileService(UserManager<User> userManager,
        ICompanyProfileRepository companyProfileRepository) : ICompanyProfileService
    {
        private readonly UserManager<User> _userManager = userManager;
        private readonly ICompanyProfileRepository _companyProfileRepository = companyProfileRepository;

        public async Task<CompanyProfile> GetAsync(ClaimsPrincipal userClaimsPrincipal)
        {
            User user = await _userManager.GetUserAsync(userClaimsPrincipal);
            if (user == null)
            {
                throw new UnauthorizedAccessException();
            }

            return await _companyProfileRepository.GetByUserIdAsync(user.Id);
        }

        public async Task<CompanyProfile> UpdateAsync(ClaimsPrincipal userClaimsPrincipal, CompanyProfile companyProfile)
        {
            User user = await _userManager.GetUserAsync(userClaimsPrincipal);
            if (user == null)
            {
                throw new UnauthorizedAccessException();
            }

            CompanyProfile existingCompanyProfile = await _companyProfileRepository.GetByUserIdAsync(user.Id);
            SetCompanyProfileData(existingCompanyProfile, companyProfile);

            await _companyProfileRepository.UpdateAsync(existingCompanyProfile);
            return await _companyProfileRepository.GetByUserIdAsync(user.Id);
        }

        private void SetCompanyProfileData(CompanyProfile existingCompanyProfile, CompanyProfile updatedCompanyProfile)
        {
            existingCompanyProfile.Name = updatedCompanyProfile.Name;
            existingCompanyProfile.Description = updatedCompanyProfile.Description;
            existingCompanyProfile.Field = updatedCompanyProfile.Field;
            existingCompanyProfile.Location = updatedCompanyProfile.Location;
            existingCompanyProfile.IsActive = updatedCompanyProfile.IsActive;
            existingCompanyProfile.LinkedIn = updatedCompanyProfile.LinkedIn;
            existingCompanyProfile.Instagram = updatedCompanyProfile.Instagram;
            existingCompanyProfile.Facebook = updatedCompanyProfile.Facebook;
            existingCompanyProfile.Website = updatedCompanyProfile.Website;
        }
    }
}
