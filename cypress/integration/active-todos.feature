Feature: Active todos
    Scenario: Test active todos
        Given I visit todo homepage
        When the homepage has loaded
        And I submit "chores" for my new todo title
        Given I have 3 items left
        When I click on active button
        Then I have 3 items left