///<reference types="cypress-xpath" />
///<reference types="cypress"/>
describe('RightClick', () => {
    it.only('rightClick', () => {


        cy.visit('https://demo.guru99.com/test/simple_context_menu.html')

        cy.xpath('//span[contains(text(),"right click me")]').rightclick()
        
        cy.get('.context-menu-item').contains('Quit').click()

       cy.get('[ondblclick="myFunction()"]').dblclick()
        
    });

    
});