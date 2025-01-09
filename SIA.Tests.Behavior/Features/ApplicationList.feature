Feature: List internship applications

  Scenario: Client views all applications
    Given a user that is logged in with a corporate account
    And they are on the corporate index page
    When the user clicks the view applications button
    Then the user will see all of the applications for all internships for their company