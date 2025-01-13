using Microsoft.EntityFrameworkCore;
using SIA.Core.Contracts.Repository;
using SIA.Domain.Entities;

namespace SIA.Infrastructure.Repositories
{
    class CompanyProfileRepository(SiaDbContext dbContext) : ICompanyProfileRepository
    {
        private readonly SiaDbContext _dbContext = dbContext;

        public async Task AddAsync(CompanyProfile companyProfile)
        {
            await _dbContext.AddAsync(companyProfile);
            await _dbContext.SaveChangesAsync();
        }

        public async Task<CompanyProfile> GetByUserIdAsync(string userId)
        {
            return await _dbContext.Companies.FirstOrDefaultAsync(s => s.UserId == userId);
        }

        public async Task UpdateAsync(CompanyProfile companyProfile)
        {
            _dbContext.Update(companyProfile);
            await _dbContext.SaveChangesAsync();
        }
    }
}
