using Microsoft.EntityFrameworkCore;
using SIA.Core.Contracts.Repository;
using SIA.Domain.Entities;

namespace SIA.Infrastructure.Repositories
{
    public class StudentProfileRepository(SiaDbContext dbContext) : IStudentProfileRepository
    {
        private readonly SiaDbContext _dbContext = dbContext;

        public async Task AddAsync(StudentProfile studentProfile)
        {
            await _dbContext.AddAsync(studentProfile);
            await _dbContext.SaveChangesAsync();
        }

        public async Task<StudentProfile> GetByUserIdAsync(string userId)
        {
            return await _dbContext.Students.FirstOrDefaultAsync(s => s.UserId == userId);
        }

        public async Task UpdateAsync(StudentProfile studentProfile)
        {
            _dbContext.Update(studentProfile);
            await _dbContext.SaveChangesAsync();
        }
    }
}
