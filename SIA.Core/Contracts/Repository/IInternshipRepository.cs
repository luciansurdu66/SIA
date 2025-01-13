using SIA.Domain.Entities;

namespace SIA.Core.Contracts.Repository
{
    public interface IInternshipRepository
    {
        Task<ICollection<Internship>> GetAllAsync();
        Task<Internship> GetByIdAsync(int id);
        Task AddAsync(Internship internship);
        Task UpdateAsync(Internship internship);
        Task DeleteAsync(int id);
    }
}
