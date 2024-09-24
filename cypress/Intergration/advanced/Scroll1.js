describe('Scrolling', () => {
    it('Scrolliong down', () => {
        cy.visit('https://www.google.com/')

        cy.get('#APjFqb').type('masai{enter}')
         
        //scrolling down
        cy.scrollTo(0,6000)

        cy.scrollTo(0,-1000)

        cy.contains('Maasai people').scrollIntoView()
        
    });
});