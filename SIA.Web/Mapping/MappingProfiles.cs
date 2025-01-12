using AutoMapper;
using SIA.Core.BusinessObjects;
using SIA.Domain.Entities;
using SIA.Web.Models;

namespace SIA.Web.Mapping
{
    public class MappingProfiles : Profile
    {
        public MappingProfiles()
        {
            CreateMap<AuthInputDto, AuthInput>();

            CreateMap<StudentProfile, StudentProfileDto>()
                .ForMember(dest => dest.ProfilePicture, opts => opts.Ignore())
                .ReverseMap();
        }
    }
}
