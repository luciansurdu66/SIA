Feature: Login into the application

Scenario: Correct student login info
	Given a user has a student account
	When the user inputs the username and password correctly
	And the user clicks the login button
	Then the user credentials are successfully checked
	And the user is redirected to the student index page

Scenario: Correct company login info
	Given a user has a company account
	When the user inputs the username and password correctly
	And the user clicks the login button
	Then the user credentials are successfully checked
	And the user is redirected to the company index page

Scenario: Incorrect login info
	Given the user inputs an incorrect set of username and password
	When the user clicks the login button
	Then the user credentials are unsuccessfully checked
	And the user gets an error message