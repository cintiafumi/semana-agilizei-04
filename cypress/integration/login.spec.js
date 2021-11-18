/// <reference types="cypress" />

describe('Login', () => {
  it('should authenticate user with valid credentials and redirect to feed page', () => {
    cy.intercept({
      method: 'GET',
      hostname: 'res.cloudinary.com'
    }, {
      statusCode: 200,
      fixture: 'download'
    }).as('cloudnary')

    cy.visit('/')

    cy.get('input[type=email]').type('testeagilizei@mail.com')
    cy.get('input[type=password]').type('Qwerty333')
    cy.get('button[type=submit]').click()

    cy.get('nav ul li').should('be.visible').and('have.length', 6)
  });
});