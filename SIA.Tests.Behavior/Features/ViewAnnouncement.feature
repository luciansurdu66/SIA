Feature: View internship announcement

Scenario: Client view specific announcement
	Given a user that is logged in with a student account
	And they are on the list announcements page
	When the user clicks on an announcement
	Then They will see all relevant information for that announcement