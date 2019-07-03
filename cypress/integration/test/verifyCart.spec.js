// **
// * Verify cart values
// **
//
describe('Verify Cart Values', () => {

    it('Go to Main Page', () => {
        cy.visit('/')
    })

    it('Click on any Product to add to Cart', () => {
        cy.get('.shelf-item')
        .each(($el,index,$list) => {
            if (index === 2)
            {
                cy.wrap($el).click()
            }
        })
    })
})