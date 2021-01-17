Feature: multiple todos
    Scenario: Add multiple todos
        Given I visit todo homepage
        When the homepage has loaded
        Given I have no todos
        When I submit "chores" for my new todo title
        Then I have 3 items left

