Feature: Forgot password flow

Scenario: Existent account for email
	Given a user is on the forgot password page
	And the user has an account associated with their email
	When the user inputs their email
	And the user clicks the forgot password button
	Then the user will get a confirmation message
	And the user will receive an email with the new randomly generated

Scenario: Invalid account for email
	Given a user is on the forgot password page
	And the user does not have an account associated with their email
	When the user inputs their email
	And the user clicks the forgot password button
	Then the user will get an error message that no account is associated with this email