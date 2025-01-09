using TechTalk.SpecFlow;

namespace SIA.Tests.Behavior.Steps
{
    [Binding]
    public class ForgotPasswordFlowStepDefinitions
    {
        [Given(@"a user is on the forgot password page")]
        public void GivenAUserIsOnTheForgotPasswordPage()
        {
            throw new PendingStepException();
        }

        [Given(@"the user has an account associated with their email")]
        public void GivenTheUserHasAnAccountAssociatedWithTheirEmail()
        {
            throw new PendingStepException();
        }

        [When(@"the user inputs their email")]
        public void WhenTheUserInputsTheirEmail()
        {
            throw new PendingStepException();
        }

        [When(@"the user clicks the forgot password button")]
        public void WhenTheUserClicksTheForgotPasswordButton()
        {
            throw new PendingStepException();
        }

        [Then(@"the user will get a confirmation message")]
        public void ThenTheUserWillGetAConfirmationMessage()
        {
            throw new PendingStepException();
        }

        [Then(@"the user will receive an email with the new randomly generated")]
        public void ThenTheUserWillReceiveAnEmailWithTheNewRandomlyGenerated()
        {
            throw new PendingStepException();
        }

        [Given(@"the user does not have an account associated with their email")]
        public void GivenTheUserDoesNotHaveAnAccountAssociatedWithTheirEmail()
        {
            throw new PendingStepException();
        }

        [Then(@"the user will get an error message that no account is associated with this email")]
        public void ThenTheUserWillGetAnErrorMessageThatNoAccountIsAssociatedWithThisEmail()
        {
            throw new PendingStepException();
        }
    }
}
