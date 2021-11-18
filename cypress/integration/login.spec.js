/// <reference types="cypress" />

describe('Login', () => {
  beforeEach(() => {
    cy.intercept(
      {
        method: 'GET',
        hostname: 'res.cloudinary.com',
      },
      {
        statusCode: 200,
        fixture: 'download',
      }
    ).as('cloudnary')
  })

  it('should authenticate user with valid credentials and redirect to feed page', () => {
    cy.login()

    cy.visit('/')

    cy.get('nav ul li').should('be.visible').and('have.length', 6)
  })
})
