using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using SIA.Core.Contracts.Repository;
using SIA.Infrastructure.Repositories;

namespace SIA.Infrastructure
{
    public static class InfrastructureServiceExtensions
    {
        public static IServiceCollection AddInsfrastructureServices(this IServiceCollection services, IConfiguration configuration)
        {
            #region Database
            services.AddDbContext<SiaDbContext>(opts =>
            {
                var connectionString = configuration.GetConnectionString("DefaultConnection");
                opts.UseNpgsql(connectionString);
            });
            #endregion

            #region Repository
            services.AddScoped<IStudentProfileRepository, StudentProfileRepository>();
            #endregion

            #region Third Parties

            #endregion

            return services;
        }
    }
}
