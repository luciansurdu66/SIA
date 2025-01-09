using TechTalk.SpecFlow;

namespace SIA.Tests.Behavior.Steps
{
    [Binding]
    public class LoginIntoTheApplicationStepDefinitions
    {
        [Given(@"a user has a student account")]
        public void GivenAUserHasAStudentAccount()
        {
            throw new PendingStepException();
        }

        [When(@"the user inputs the username and password correctly")]
        public void WhenTheUserInputsTheUsernameAndPasswordCorrectly()
        {
            throw new PendingStepException();
        }

        [When(@"the user clicks the login button")]
        public void WhenTheUserClicksTheLoginButton()
        {
            throw new PendingStepException();
        }

        [Then(@"the user credentials are successfully checked")]
        public void ThenTheUserCredentialsAreSuccessfullyChecked()
        {
            throw new PendingStepException();
        }

        [Then(@"the user is redirected to the student index page")]
        public void ThenTheUserIsRedirectedToTheStudentIndexPage()
        {
            throw new PendingStepException();
        }

        [Given(@"a user has a company account")]
        public void GivenAUserHasACompanyAccount()
        {
            throw new PendingStepException();
        }

        [Then(@"the user is redirected to the company index page")]
        public void ThenTheUserIsRedirectedToTheCompanyIndexPage()
        {
            throw new PendingStepException();
        }

        [Given(@"the user inputs an incorrect set of username and password")]
        public void GivenTheUserInputsAnIncorrectSetOfUsernameAndPassword()
        {
            throw new PendingStepException();
        }

        [Then(@"the user credentials are unsuccessfully checked")]
        public void ThenTheUserCredentialsAreUnsuccessfullyChecked()
        {
            throw new PendingStepException();
        }

        [Then(@"the user gets an error message")]
        public void ThenTheUserGetsAnErrorMessage()
        {
            throw new PendingStepException();
        }
    }
}
