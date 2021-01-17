import { Then } from "cypress-cucumber-preprocessor/steps";

Then("I have only 2 items left", () => {
    cy.get("[data-cy=remaining-uncompleted-todo-count]").should('contain', 2);
});