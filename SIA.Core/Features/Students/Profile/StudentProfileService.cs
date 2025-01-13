using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using SIA.Core.Contracts.Repository;
using SIA.Core.Contracts.Services;
using SIA.Domain.Entities;
using System.Security.Claims;

namespace SIA.Core.Features.Students.Profile
{
    public class StudentProfileService(UserManager<User> userManager,
        IStudentProfileRepository studentProfileRepository) : IStudentProfileService
    {
        private readonly UserManager<User> _userManager = userManager;
        private readonly IStudentProfileRepository _studentProfileRepository = studentProfileRepository;

        public async Task<StudentProfile> GetAsync(ClaimsPrincipal userClaimsPrincipal)
        {
            User user = await _userManager.GetUserAsync(userClaimsPrincipal);
            if (user == null)
            {
                throw new UnauthorizedAccessException();
            }

            return await _studentProfileRepository.GetByUserIdAsync(user.Id);
        }

        public async Task<StudentProfile> UpdateAsync(ClaimsPrincipal userClaimsPrincipal, StudentProfile studentProfile, IFormFile profilePicture = null)
        {
            User user = await _userManager.GetUserAsync(userClaimsPrincipal);
            if (user == null)
            {
                throw new UnauthorizedAccessException();
            }

            StudentProfile existingStudentProfile = await _studentProfileRepository.GetByUserIdAsync(user.Id);
            SetStudentProfileData(existingStudentProfile, studentProfile, profilePicture);

            await _studentProfileRepository.UpdateAsync(existingStudentProfile);
            return await _studentProfileRepository.GetByUserIdAsync(user.Id);
        }

        private void SetStudentProfileData(StudentProfile existingStudentProfile, StudentProfile updatedStudentProfile, IFormFile profilePicture = null)
        {
            existingStudentProfile.Name = updatedStudentProfile.Name;
            existingStudentProfile.PhoneNumber = updatedStudentProfile.PhoneNumber;
            existingStudentProfile.Birthdate = updatedStudentProfile.Birthdate;
            existingStudentProfile.Location = updatedStudentProfile.Location;
            existingStudentProfile.StudyInstitution = updatedStudentProfile.StudyInstitution;
            existingStudentProfile.StudyDegree = updatedStudentProfile.StudyDegree;
            existingStudentProfile.ExpectedGraduationDate = updatedStudentProfile.ExpectedGraduationDate;
            existingStudentProfile.HighSchool = updatedStudentProfile.HighSchool;
            existingStudentProfile.HardSkills = updatedStudentProfile.HardSkills;
            existingStudentProfile.SoftSkills = updatedStudentProfile.SoftSkills;
            existingStudentProfile.PersonalProjects = updatedStudentProfile.PersonalProjects;
            existingStudentProfile.Achievements = updatedStudentProfile.Achievements;
            existingStudentProfile.ExtraActivities = updatedStudentProfile.ExtraActivities;
            existingStudentProfile.Languages = updatedStudentProfile.Languages;
            existingStudentProfile.CareerObjectives = updatedStudentProfile.CareerObjectives;
            existingStudentProfile.LinkedIn = updatedStudentProfile.LinkedIn;
            existingStudentProfile.Instagram = updatedStudentProfile.Instagram;
            existingStudentProfile.Facebook = updatedStudentProfile.Facebook;
            existingStudentProfile.Website = updatedStudentProfile.Website;

            if (profilePicture is not null)
            {
                using (MemoryStream stream = new())
                {
                    profilePicture.CopyTo(stream);
                    existingStudentProfile.ProfilePictureData = stream.ToArray();
                }
                existingStudentProfile.ProfilePictureType = Path.GetExtension(profilePicture.FileName);
            }
        }
    }
}
