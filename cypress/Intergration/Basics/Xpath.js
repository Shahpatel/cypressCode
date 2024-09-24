describe('xpathLogin', () => {
    it('login', () => {
        cy.visit(`https://v1.training-support.net/selenium/simple-form`)
        cy.xpath(`//input[@placeholder="First Name"]`).type(`Shahid`)
        cy.xpath(`//input[@placeholder="Last Name"]`).type(`Patel`)
        cy.xpath(`//input[@type="email"]`).type(`shahidpatel9185@gmail.com`)
        cy.xpath(`//input[@id="number"]`) .type(`9689818230`)
        
        cy.xpath(`//textarea[@rows="2"]`).type(`hello`)
        cy.xpath(`//input[@type="submit"]`).click()
    });
});