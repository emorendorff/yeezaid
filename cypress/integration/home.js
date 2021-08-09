import { getByAltText } from "@testing-library/react"

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
  // it('Should be able to click yes', () => {
  //   cy.contains('Ye').click()
  // })

  // it('Should be able to add quotes to favorites', () => {
  //   cy.contains('Ye').click() 
  // })

  // it('Should be able to click yes and no buttons', () => {
  //   cy.get()
  // })

})

describe('Game play', () => {
  it('Should be able to click Ye to see if answer is right or wrong', () => {
  cy.get('.ye').click()
  cy.get('h3').should('have.length', 1)
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
  })





})

// it('Should be able to go back to a new quote from favorites', () => {
//   cy.get('button').contains('Back').click()
// })



