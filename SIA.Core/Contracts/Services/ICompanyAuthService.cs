using SIA.Core.BusinessObjects;

namespace SIA.Core.Contracts.Services
{
    public interface ICompanyAuthService
    {
        Task RegisterCompany(AuthInput input);
        Task<string> LogInCompany(AuthInput input);
    }
}
