Feature: Login Demo QA Book
  #Login testing, invalid
  Scenario Outline: As a user, I can't log with unvalid credentials

    Given I am on the login page
    When I login with '<username>' and '<password>'
    Then I should see a flash message saying <message>

    Examples:
      | username               | password | message                       |
      |                        |          | red input both                |
      | xbanex                 |          | red input pass                |
      |                        | cgjfkfvy | red input user                |
      | xbanex                 | cgjfkfvy | Invalid username or password! |
  #Login testing, valid
  # When log validate https://demoqa.com/profile
  Scenario Outline: As a user, I can log with valid credentials

    Given I am on the login page
    When I login with '<username>' and '<password>'
    Then I should see home screen

    Examples:
      | username   | password     |
      | correct    | correct      |

