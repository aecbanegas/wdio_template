Feature: Logout from QA Demo Book
  #Logout testing, user must be previously logged.
  Scenario Outline: As a user, I can log out

    Given I am on the profile page
    When I log out
    Then I should see login screen
