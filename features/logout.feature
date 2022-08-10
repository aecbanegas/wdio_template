Feature: Logout Address Book
  #Logout testing, user must be previously logged.
  Scenario Outline: As a user, I can log out

    Given I am logged in Address Book
    When I log out
    Then I should see dashboard of a non-logged user
