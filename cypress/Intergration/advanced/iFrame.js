describe('iframe', () => {
    it('first', () => {

        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

        cy.frameLoaded('#courses-iframe')

        cy.iframe().contains('JOIN NOW').click();
       
        
       
    });

    it('second', () => {
        cy.visit('https://v1.training-support.net/selenium/iframes')

        //cy.frameLoaded('[src="/selenium/frame1"]')
     cy.iframe('iframe[src="/selenium/frame1"]').find('#actionButton').first().click()   
        
    });
});