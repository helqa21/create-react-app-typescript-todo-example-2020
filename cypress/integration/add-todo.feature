Feature: Add a todo
    Scenario: Add my first todo
        Given I visit todo homepage
        When the homepage has loaded
        Given I have no todos
        When I submit "walking" for my new todo title
        Then I see that I have 1 item left
