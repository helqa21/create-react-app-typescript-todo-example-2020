import { Given, When } from "cypress-cucumber-preprocessor/steps";

Given("I visit todo homepage", () => {
    cy.visit("/");
});

When("the homepage has loaded", () => {
    cy.get(".todoapp").should("be.visible");
});

Given("I see that I have 1 item left", () => {
    cy.get("[data-cy=remaining-uncompleted-todo-count]").should('contain', 1);
});

Given("I have no todos", () => {
    cy.clearLocalStorage();
    
});

When("I submit {string} for my new todo title", (title) => {
    const items = [ 
        {title: "cooking", expectedLength:1},
        {title: "shopping", expectedLength:2}, 
        {title: "cleaning", expectedLength:3}
    ]
    cy.wrap(items)
        .each(todo => {
            cy.get(".new-todo")
                .type(todo.title)
                .type('{ENTER}');
            cy.get("[data-cy=todo-item]>li").should('have.length', todo.expectedLength);
        })
    
});

Given("I have 3 items left", () => {
    cy.get("[data-cy=remaining-uncompleted-todo-count]").should('contain', 3);
});

When("I have only 2 items left", () => {
    cy.get("[data-cy=remaining-uncompleted-todo-count]").should('contain', 2);
});

When("I check {string} completed", () => {
    cy.get("[data-cy=todo-item]>li").contains("cooking")
    cy.get(':nth-child(3) > [data-testid=todo-item] > [data-testid=view] > [data-cy=todo-item-complete-check]').click()
    
});