describe('Navigation', () => {
    it('First', () => {

        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

        cy.get('[href="https://rahulshettyacademy.com/documents-request"]').click()

        cy.get(':nth-child(4) > .new-navbar-highlighter').click()
        //cy.xpath('//a[@href="https://rahulshettyacademy.com/#/learning-path"]').click()

        //cy.get('[href="https://rahulshettyacademy.com/#/learning-path"]').click()

        cy.go('back')

        cy.go('forward')
     cy.wait(2000)
        cy.reload()



        
    });
});