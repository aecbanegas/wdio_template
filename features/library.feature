Feature: Book Management Library

  Scenario Outline: As a user, I can go to Bookstore

    Given I am on the profile page
    When I click on book store button
    Then I should see books screen

  Scenario Outline: As a user, I can search for books

    Given I am on the books page
    When I search for <book>
    Then I am able to see the results of my search by <book>

    Examples:
      | book   |
      | learn  |
      | git    |
      | design |
      | xbanex |

  Scenario Outline: As a user, I can add books to my personal library

    Given I am on the books page
    When I add a book to my personal library
    Then I should see the book at my personal library

  # When log validate https://demoqa.com/profile
  Scenario Outline: As a user, I can delete books from my personal library

    Given I am on the profile page
    When I delete a book from my personal library
    Then I should see the book is not more at my personal library

