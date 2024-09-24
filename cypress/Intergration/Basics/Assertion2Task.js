describe('Task1', () => {
    it('ContactUs', () => {

        cy.visit('https://automationteststore.com/')

        cy.get('[href="https://automationteststore.com/index.php?rt=content/contact"]').click()

        cy.url().should('include','contact')
        cy.get('[name="first_name"]').type('Shahid')
        cy.xpath('(//input)[4]').type('shahidpatel9185@gmail.com')

        cy.get('#ContactUsFrm_enquiry').type('Enqiury testing1234566')

        cy.get('[title="Submit"]').click()
             cy.xpath('//p[2]').should('include.text','Your enquiry has been successfully sent to the store owner!')



        
    });
});