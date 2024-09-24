describe('Alert', () => {
    it('First', () => {

        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

        var name="shahid"   //creating variable
        cy.get('#name').type(name)
       // cy.get('#alertbtn').click()

        cy.on('window:alert',(vari)=>{

            expect(vari).to.contain(name)
        })

    
        cy.get('#alertbtn').click()
        
        
    });

    it.only('confirm', () => {

        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

        cy.get('#confirmbtn').click()

        cy.on('window:confirm',(alert)=>{
            expect(alert).to.contain('Hello , Are you sure you want to confirm?')

            return false; //if you want to cancel 
           // return true; // if you want to click on ok
        })



        
    });
});