Feature: todo homepage
    Scenario: visit todo homepage
        Given I visit todo homepage
        When the homepage has loaded
        Then I see todo homepage

