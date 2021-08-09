/* eslint-disable no-undef */
describe('Home Page View', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/home')
  })

  it('Should GET Kanye quotes', () => {
    cy.intercept(
      {
        method: "GET",
        url: 'https://api.kanye.rest/',
      },
      {
        status: 201, 
        body: [
          {quote: "I am running for President of the United States"},
        ],
      }
    )
  })

  it('Should GET Trump quotes', () => {
    cy.intercept(
      {
        method: "GET",
        url: 'https://api.whatdoestrumpthink.com/api/v1/quotes/random',
      },
      {
        status: 201,
        body: {
          message: "I could stand in the middle of Fifth Avenue and shoot somebody, and I wouldn't lose any voters",}
      },
    )
  })

  it('Should have a quote displayed', () => {
    cy.get('h3').should('have.length', 1)
  })

  it('Should have yes and no buttons to choose correct quote', () => {
    cy.get('button').contains('Ye')
    cy.get('button').contains('Ne')
  })
})

describe('Game play', () => {
  it('Should be able to click Ye to see if answer is right or wrong', () => {
  cy.get('.ye').click()
  cy.get('h3').should('have.length', 1)
})

  it('Should be able to add quote to favorites if it is a Kanye quote', () => {
    cy.get('button').contains('Add to Favorite Yeezaids').click()
  })

  it('Should be able to click a button to play again', () => {
    cy.get('button').contains('play again').click()
  })

  it('Should get new quotes after play again', () => {
    cy.intercept(
      {
        method: "GET",
        url: 'https://api.kanye.rest/',
      },
      {
        status: 201, 
        body: [
          {quote: "I am running for President of the United States"},
        ],
      }
    )
    cy.intercept(
      {
        method: "GET",
        url: 'https://api.whatdoestrumpthink.com/api/v1/quotes/random',
      },
      {
        status: 201,
        body: {
          message: "I could stand in the middle of Fifth Avenue and shoot somebody, and I wouldn't lose any voters",}
      },
    )
    cy.get('h3').should('have.length', 1)
  })

  it('Should be able to click Ne to see if answer is right or wrong', () => {
    cy.get('.ne').click()
    cy.get('h3').should('have.length', 1)
  })

  it('Should be able to play again with new quote after clicking play again', () => {
    cy.get('button').contains('play again').click()
    
    cy.intercept(
        {
          method: "GET",
          url: 'https://api.kanye.rest/',
        },
        {
          status: 201, 
          body: [
            {quote: "I am running for President of the United States"},
          ],
        }
      )
    cy.intercept(
        {
          method: "GET",
          url: 'https://api.whatdoestrumpthink.com/api/v1/quotes/random',
        },
        {
          status: 201,
          body: {
            message: "I could stand in the middle of Fifth Avenue and shoot somebody, and I wouldn't lose any voters",}
        },
      )
    })

    it('Should have a new quote displayed', () => {
      cy.get('h3').should('have.length', 1)
    })
  })




