/// <reference types="Cypress" />

describe('Confirm my order', () => {
  beforeEach(() => {
    cy.visit('');
  });

  it('must confirm order after add product to a cart and login', () => {
    cy.addProdutcToCart();
    cy.fixture('credentials').then((credentialsData) => {
      cy.login(credentialsData);
    });
    cy.doOrder();

    cy.get('.alert-success').should('be.visible');
    cy.contains('Your order on My Store is complete.').should('be.visible');
  });
});
