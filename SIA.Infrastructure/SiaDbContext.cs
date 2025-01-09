using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using SIA.Domain.Entities;

namespace SIA.Infrastructure
{
    public class SiaDbContext(DbContextOptions<SiaDbContext> options) : IdentityDbContext<User>(options)
    {
        public DbSet<Company> Companies { get; set; }
        public DbSet<Student> Students { get; set; }
        public DbSet<Message> Messages { get; set; }
        public DbSet<Internship> Internships { get; set; }
        public DbSet<Application> Applications { get; set; }
        public DbSet<Document> Documents { get; set; }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);

            builder.Entity<Internship>()
                .HasOne(i => i.Company)
                .WithMany(c => c.Internships)
                .HasForeignKey(i => i.CompanyId);

            builder.Entity<Application>()
                .HasOne(a => a.Intership)
                .WithMany(i => i.Applications)
                .HasForeignKey(a => a.InternshipId);

            builder.Entity<Application>()
                .HasOne(a => a.Student)
                .WithMany(s => s.Applications)
                .HasForeignKey(a => a.StudentId);

            builder.Entity<Document>()
                .HasOne(d => d.Application)
                .WithMany(a => a.Documents)
                .HasForeignKey(d => d.ApplicationId);

            builder.Entity<User>()
                .HasOne(u => u.Student)
                .WithOne(s => s.User)
                .HasForeignKey<Student>(s => s.UserId);

            builder.Entity<User>()
                .HasOne(u => u.Company)
                .WithOne(s => s.User)
                .HasForeignKey<Company>(s => s.UserId);

            builder.Entity<Message>()
                .HasOne(m => m.SenderUser)
                .WithMany(u => u.SentMessages)
                .HasForeignKey(m => m.SenderUserId);

            builder.Entity<Message>()
                .HasOne(m => m.ReceiverUser)
                .WithMany(u => u.ReceivedMessages)
                .HasForeignKey(m => m.ReceiverUserId);
        }
    }
}
