Feature: Filtering todos
    Scenario: Test if todos filters work
        Given I visit todo homepage
        And the homepage has loaded
        And I submit "chores" for my new todo title
        And I have 3 items left
        When I check "cooking" completed
        And I have only 2 items left
        Then I handle filter links
        Then I clear completed todo
