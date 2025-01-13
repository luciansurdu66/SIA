using SIA.Domain.Entities;

namespace SIA.Core.Contracts.Repository
{
    public interface ICompanyProfileRepository
    {
        Task<CompanyProfile> GetByUserIdAsync(string userId);
        Task AddAsync(CompanyProfile studentProfile);
        Task UpdateAsync(CompanyProfile studentProfile);
    }
}
