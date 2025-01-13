using SIA.Domain.Entities;

namespace SIA.Core.Contracts.Repository
{
    public interface IStudentProfileRepository
    {
        Task<StudentProfile> GetByUserIdAsync(string userId);
        Task AddAsync(StudentProfile studentProfile);
        Task UpdateAsync(StudentProfile studentProfile);
    }
}
