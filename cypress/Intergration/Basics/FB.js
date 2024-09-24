describe('FB Login', () => {

    it('Login', () => {
        cy.visit(`https://www.facebook.com/`)
        cy.get(`#email`).type(`9689818230`)
        cy.get(`[type="password"]`).type(`1245`)
        cy.get(`[type="submit"]`).click()
        
    });

    
    
});