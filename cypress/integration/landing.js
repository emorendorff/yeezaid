describe('Landing Page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  it('Should have a picture of Kanye', () => {
    cy.get('[alt="kanye face icon"]')
    .should('be.visible')
  })
})
