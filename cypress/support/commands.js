/// <reference types="cypress" />

// ***********************************************************
// This command is for login in the website.
// ***********************************************************
Cypress.Commands.add('login', (credentials) => {
  cy.get('#email').type(credentials.name);
  cy.get('#passwd').type(credentials.password);
  cy.get('#SubmitLogin').click();
});

// ***********************************************************
// This command is for add product in to cart and do checkout.
// ***********************************************************
Cypress.Commands.add('addProdutcToCart', () => {
  cy.get("a[data-id-product= '1']").click({ multiple: true, force: true });
  cy.get("[title='Proceed to checkout']").click();
  cy.get('.cart_navigation > .button > span').click();
});

// ***********************************************************
// This command is for complete all the steps of the checkout.
// ***********************************************************
Cypress.Commands.add('doOrder', () => {
  cy.get("[name='processAddress']").click();
  cy.get('#cgv').check();
  cy.get("[name='processCarrier']").click();
  cy.get("[title='Pay by check.']").click();
  cy.get('.button').contains('I confirm my order').click();
});
