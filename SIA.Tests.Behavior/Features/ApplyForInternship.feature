Feature: Apply for internship

Scenario: Student applies to internship
	Given the user is logged in with a student account
	And the user is on the list announcements page
	When the user clicks the apply button
	And the user fills in all required information
	And the user clicks the finish application button
	Then the user's application is saved
	And the user is sent back to the list announcements

Scenario: Invalid student application
	Given the user is logged in with a student account
	And the user is on the list announcements page
	When the user clicks the apply button
	And the user fills in the required information incorrectly
	And the user clicks the finish application button
	Then the user gets an error message