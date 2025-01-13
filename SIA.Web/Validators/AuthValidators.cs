using SIA.Web.Models;
using System.ComponentModel.DataAnnotations;

namespace SIA.Web.Validators
{
    public static class AuthValidators
    {
        public static ICollection<string> ValidateAuthInput(AuthInputDto inputDto)
        {
            ICollection<string> result = new List<string>();

            if (inputDto == null)
            {
                result.Add("The input fields cannot be empty!");
            }
            else
            {
                EmailAddressAttribute emailAddressAttribute = new EmailAddressAttribute();
                if (!emailAddressAttribute.IsValid(inputDto.Email))
                {
                    result.Add("The given email is not valid");
                }

                if (string.IsNullOrEmpty(inputDto.Password) || inputDto.Password.Length < 4)
                {
                    result.Add("Your password should have at least 4 characters");
                }
            }

            return result;
        }
    }
}
