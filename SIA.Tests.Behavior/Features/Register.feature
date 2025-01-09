Feature: Register into the application

Scenario: Correct information provided
	Given a user is on the registration page
	When the user has completed all mandatory fields with correct information
	And the user clicks the complete registration button
	Then the user data is validated successfully
	And the user account is successfully created
	And the user is redirected to their student or corporate index page

Scenario: Incorrect information provided
	Given a user is on the registration page
	When the user has completed at least one mandatory incorrectly (empty or incorrect information)
	And the user clicks the complete registration button
	Then the user data is validated unsuccessfully
	And the user account is not created
	And the user gets an error message and remains on the page