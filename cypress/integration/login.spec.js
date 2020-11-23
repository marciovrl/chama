/// <reference types="Cypress" />

describe('Login testcases', () => {
    beforeEach(() => {
        cy.visit('');
    });

    it('must have to login customer account', () => {
        cy.get('.login').click();
        cy.fixture('credentials').then((credentialsData) => {
            cy.login(credentialsData);
        });

        cy.get('.logout').should('be.visible');
        cy.contains('Welcome to your account').should('be.visible');
    });
});