Feature: Login Address Book
  #Login testing, invalid
  Scenario Outline: As a user, I can't log with unvalid credentials

    Given I am on the login page
    When I login with '<username>' and '<password>'
    Then I should see a flash message saying <message>

    Examples:
      | username               | password | message                |
      |                        |          | Bad email or password. |
      | xbanex@helloiconic.com |          | Bad email or password. |
      | xbanex@helloiconic.com | cgjfkfvy | Bad email or password. |
  #Login testing, valid
  Scenario Outline: As a user, I can log with valid credentials

    Given I am on the login page
    When I login with '<username>' and '<password>'
    Then I should see home screen

    Examples:
      | username               | password     |
      | xbanex@helloiconic.com | secret_sauce |

