Feature: Todos can be completed
    Scenario: Complete todos
        Given I visit todo homepage
        When the homepage has loaded
        When I submit "chores" for my new todo title
        Given I have 3 items left
        When I check "cooking" completed
        Then I have only 2 items left

