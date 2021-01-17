import { Then } from "cypress-cucumber-preprocessor/steps";

Then("I handle filter links", () => {
    const filters = [
        {link:"Active", expectedLength:2},
        {link:"Completed", expectedLength:1},
        {link:"All", expectedLength:3}
    ]
    cy.wrap(filters)
        .each(filter => {
            cy.contains(filter.link).click();
            cy.get("[data-cy=todo-item]>li")
                .should('have.length', filter.expectedLength);
        });
    
});

Then("I clear completed todo", () => {
    cy.get("[data-cy=clear-completed-button]").click();
    cy.get("[data-cy=todo-item]>li")
        .should('have.length', 2);
});