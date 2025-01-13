using Microsoft.Extensions.DependencyInjection;
using SIA.Core.Contracts.Services;
using SIA.Core.Features.Companies.Auth;
using SIA.Core.Features.Companies.Profile;
using SIA.Core.Features.Students.Auth;
using SIA.Core.Features.Students.Profile;

namespace SIA.Core
{
    public static class CoreServiceExtensions
    {
        public static IServiceCollection AddCoreServices(this IServiceCollection services)
        {
            services.AddScoped<IStudentAuthService, StudentAuthService>();
            services.AddScoped<IStudentProfileService, StudentProfileService>();
            services.AddScoped<ICompanyAuthService, CompanyAuthService>();
            services.AddScoped<ICompanyProfileService, CompanyProfileService>();
            return services;
        }
    }
}
