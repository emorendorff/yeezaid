describe('Landing Page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  it('Should have a picture of Kanye', () => {
    cy.get('[alt="kanye face icon"]')
    .should('be.visible')
  })

  it('Should see a title displayed and description of the game', () => {
    cy.get('h1').contains('Yeezaid What Now?')
    cy.get('h2').contains('Satire or Statement?')
  })

  it('Should have a play button to enter the page', () => {
    cy.get('.play-btn').contains('Play').click()
  })

  it('Should have a favorites section in navigation', () => {
    cy.get('.fav-link').contains('My Favorite Yeezaids')
  })
})
