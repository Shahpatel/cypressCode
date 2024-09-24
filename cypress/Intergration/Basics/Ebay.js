describe('Search', () => {
    it('SearchEbay', () => {

        cy.visit(`https://www.ebay.com/`)
        cy.get(`[placeholder="Search for anything"]`).type(`sneakers`)
        cy.get(`#gh-btn`).click()
        
    });
});