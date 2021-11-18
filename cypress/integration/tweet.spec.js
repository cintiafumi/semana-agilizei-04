/// <reference types="cypress" />

describe('Tweet', () => {
  beforeEach(() => {
    cy.login()
    cy.visit('/')
  })

  it('should create a new tweet and delete it', () => {
    const tweet = 'Alexa is mine!'
    cy.get('textarea[placeholder="What\'s happening?"]').type(tweet)
    cy.contains('Tweet')
      .click()
      .then(() => {
        cy.contains(tweet).should('be.visible')
        cy.get('.tweet-stats').children('div:last').click()
      })
  })
})
