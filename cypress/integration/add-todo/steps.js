import { When, Then } from "cypress-cucumber-preprocessor/steps";


When("I submit {string} for my new todo title", (title) => {
    cy.get(".new-todo").type('walking {ENTER}');
    cy.get("[data-cy=todo-item]>li").should('have.length', 1);
});


Then("I see that I have 1 item left", () => {
    cy.get("[data-cy=remaining-uncompleted-todo-count]").should('contain', 1);
});

