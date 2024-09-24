describe('V1', () => {
    it('Login', () => {

        cy.visit(`https://v1.training-support.net/selenium/simple-form`)
        cy.get(`[placeholder="First Name"]`).type(`Shahid`)
        cy.get(`#lastName`).type(`1234`)
        cy.get(`#email`).type(`shahidpatel@gmail.com`)
        cy.get(`#number`).type(`9689818230`)
        cy.get(`[rows="2"]`).type(`hi hello`)
        cy.get(`[onclick="simpleFormSubmit()"]`).click()
        
    });
});