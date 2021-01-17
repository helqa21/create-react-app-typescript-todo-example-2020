import { When } from "cypress-cucumber-preprocessor/steps";

When("I click on active button", () => {
    cy.get("[data-cy=active-filter]").click();
    
});

