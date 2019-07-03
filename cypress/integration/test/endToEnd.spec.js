// **
// Check end to end workflow from Main page till checkout Option
// **
//
describe('End to End Test', () => {
    
    it('Go to Main Page', () => {
        cy.visit('/')
    })

    it('select any Size', () => {
        cy.get('[type=checkbox]')
        .each(($el,index,$list) => {
            if (index === 6)
            {
                cy.wrap($el).check({force: true})
            }
        })
        cy.wait(1000)
    })

    it('Add any Product to Cart', () => {
        cy.get('.shelf-item')
        .each(($el,index,$list) => {
            if (index === 2)
            {
                cy.wrap($el).click()
            }
        })
    })

    it('Checkout from Cart', () => {
        cy.get('.buy-btn').click()
    })
})