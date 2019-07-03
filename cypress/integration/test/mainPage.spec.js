// **
// * Go to main page and verify if page content is loaded
// **
//
describe('Go to React Shopping Cart Website', () => {
    it('Navigate to Main Page', () => {
        cy.visit('/')
    })
    it('Check cart count is 0', () => {
        cy.get('.float-cart').should('contain','0')
    })
    it ('Check if page title matches', () => {
        cy.title().should('eq','React Shopping Cart') 
    })
})