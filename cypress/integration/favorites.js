describe('Favorties view', () => {
  it('Should display no favorites yet if no favorites are added', () => {
    cy.visit('http://localhost:3000/favorites')
    cy.get('h3').contains('No favorites yet')
  })

  it('Should have a back to home button to take users back to game', () => {
    cy.get('a').contains('Back to Home').click()
  })

  it('User should be able to click title to navigate to landing page', () => {
    cy.visit('http://localhost:3000/favorites')
    cy.get('h1').contains('Yeezaid What Now?').click()
  })

})

