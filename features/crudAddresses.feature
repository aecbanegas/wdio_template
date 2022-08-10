Feature: CRUD for Address Book

    Scenario Outline: As a user, i ame able to access to my Address list
        Given I am on home screen
        When I click on the Address button at website header
        Then I am shown with address screen

    Scenario Outline: As a user, i am able to add various address to my Address Book

        Given I am on address screen
        When I login with <firstname>, <lastname>, <address1>, <address2>, <city>, <state>, <zip>, <countryy>, <birthday>, <color>, <age>, <website>, <phone>, <climb>, <dance>, <read> and <note>
        Then I should see a flash message saying <message>

        Examples:
            | username               | password | message                |
            |                        |          | Address was successfully created. |
            | xbanex@helloiconic.com |          | Bad email or password. |
            | xbanex@helloiconic.com | cgjfkfvy | Bad email or password. |