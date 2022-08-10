Feature: Signup Address Book
    #Signup testing, invalid
    #   BUG No se presentan mensajes de error de sign up, simplemente no continua con el proceso
    #   Scenario Outline: As a user, I can't sign up with unvalid credentials

    #     Given I am on the Signup page
    #     When I Signup with '<username>' and '<password>'
    #     Then I should see a flash message saying <message>

    #     Examples:
    #       | username                 | password             | message                        |
    #       |                          |                      | Bad email or password.         |
    #       | xbanex@helloiconic.com   |                      | Bad email or password.         |
    #       | xbanex@helloiconic.com   | cgjfkfvy             | Bad email or password.         |
    #Signup testing, valid
    Scenario Outline: As a user, I can log with valid credentials

        Given I am on the Signup page
        When I Signup with '<username>' and '<password>'
        Then I should see dashboard screen

        Examples:
            | username               | password     |
            | xbanex@helloiconic.com | secret_sauce |

