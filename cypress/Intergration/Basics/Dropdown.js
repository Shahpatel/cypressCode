describe('static', () => {
    it('First', () => {
        

        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
      //using value
        cy.get('#dropdown-class-example').select('option1').should('have.value','option1')

        //using Text
        cy.get('#dropdown-class-example').select('Option2').should('have.value','option2')

        //using index

        cy.get('#dropdown-class-example').select(3).should('have.value','option3')



    });

    it.only('Dynamic', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

        cy.get('#autocomplete[type="text"]').type('ind');

        cy.get('#ui-id-1').find('.ui-menu-item').each(($ele)=>{
        
            if($ele.text()=='India'){
                cy.wrap($ele).click()
            }

        })

        
    });
});