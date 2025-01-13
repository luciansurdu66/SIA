using SIA.Core.BusinessObjects;

namespace SIA.Core.Contracts.Services
{
    public interface IStudentAuthService
    {
        Task RegisterStudent(AuthInput input);
        Task<string> LogInStudent(AuthInput input);
    }
}
