describe('Assertion1', () => {
    it('Title Page', () => {

        // Visit the website
        cy.visit('https://v1.training-support.net/selenium/simple-form')

        // Assert that the URL includes "selenium"
        cy.url().should('include', 'selenium')

        // Check visibility of the "Simple Form" text using XPath
        cy.xpath("//*[contains(text(),'Simple Form')]").should('be.visible')

        //checking attribute placeholder firstName is present or not


        cy.get('#firstName').should('have.attr','placeholder','First Name')

 ///multiple assertion 
        cy.xpath(`//input[@placeholder="First Name"]`).type(`Shahid`).should('have.value','Shahid').should('have.attr','placeholder','First Name')
        
    });
});
