describe('Practice', () => {
    it.skip('checkUncheck', () => {

        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

        cy.url().should('include','AutomationPractice')
          //check all option
        cy.get('#checkBoxOption1').check().should('be.checked')
        cy.get('#checkBoxOption2').check().should('be.checked')
        cy.get('#checkBoxOption3').check().should('be.checked')

         //unchecking 

         cy.get('#checkBoxOption1').uncheck().should('not.be.checked')
        
    });


    it.skip('VisibleOrNot', () => {

        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

        cy.get('[name="show-hide"]').should('be.visible')
        cy.get('#hide-textbox').click()

        cy.get('[name="show-hide"]').should('not.be.visible')

        cy.get('#show-textbox')

        
    });

    it('RadioButton', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        
        cy.get('[value="radio1"]').should('not.be.checked').click().should('be.checked')
        cy.get('[value="radio2"]').should('not.be.checked').click().should('be.checked')
        cy.get('[value="radio3"]').should('not.be.checked').click().should('be.checked')
        
    });
});