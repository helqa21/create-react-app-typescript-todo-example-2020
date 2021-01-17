import { Then } from "cypress-cucumber-preprocessor/steps";

Then("I see todo homepage", () => {
    cy.get(".header").should("be.visible");
    cy.get("h1").should("contain", "todos");
});

