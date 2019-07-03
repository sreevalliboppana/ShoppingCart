// **
// * Check sizes available in Shopping Page.
// **
//
describe('Check Shopping Sizes', () => {

    it('Go to Main Page', () => {
        cy.visit('/')
    })

    it('Check XS Size', () => {
        cy.get('.checkmark').contains('XS')
    })

    it('Check S Size', () => {
        cy.get('.checkmark').contains('S')
    })

    it('Check M Size', () => {
        cy.get('.checkmark').contains('M')
    })

    it('Check ML Size', () => {
        cy.get('.checkmark').contains('ML')
    })

    it('Check L Size', () => {
        cy.get('.checkmark').contains('L')
    })

    it('Check XL Size', () => {
        cy.get('.checkmark').contains('XL')
    })

    it('Check XXL Size', () => {
        cy.get('.checkmark').contains('XXL')
    })
})