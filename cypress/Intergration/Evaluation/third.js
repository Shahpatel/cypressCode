describe('Ebay', () => {
    it('first', () => {

        //1: opening url 
        cy.visit('https://www.ebay.com/')
          
        //2: clicking of advanced

        cy.get('#gh-as-a').click()

        //3: 
          //searching Laptop
          cy.get('#_nkw').type('laptop')
 

        
        //selecting keyword
        cy.get('[name="_in_kw"]').select('2')

       //selecting the category
        cy.get('[data-testid="s0-1-17-4[0]-7[3]-_sacat"]').select('58058')

        cy.get('[name="LH_TitleDesc"]').check()
      // 

      //filtering price

      cy.get('[id="s0-1-17-5[2]-[0]-"]').check()

      cy.get('[aria-label="Enter minimum price range value, $"]').type('50')
      cy.get('[aria-label="Enter maximum price range value, $"]').type('2000')

      //using radio button 
      cy.get('[class="adv-fieldset__format"]')
      cy.contains('Accepts offers').click()//.should('be.checked')

      //marking on new condition

      cy.get('.adv-fieldset__condition').contains('New').click()

      //
      //cy.get('[class="adv-fieldset__showResults"]').contains('Free returns').click()

        cy.get('[name="LH_FR"]').check()

        //4: clicking on Using advanced search options

          //cy.get('[href="/help/buying/search-tips/advanced-search?id=4049"]').invoke('removeAttr','target').click()

          //assertion Customer Service
         // cy.get('#s0-72-captcha-ui > iframe').click()
          //cy.get('[class="no-touch gh-1199 gh-979"]').contains("Customer Service")
          //cy.contains("Customer Service").should('be.visible')

          // 6: coming back to main page

        

          //filtering out 

          //location
           cy.get('.field__label--end').contains('US Only').click()
          //price range

          cy.get('[id="s0-1-17-5[2]-[0]-"]').check()

      cy.get('[aria-label="Enter minimum price range value, $"]').type('50')
      cy.get('[aria-label="Enter maximum price range value, $"]').type('2000')
          //condition
          cy.get('.adv-fieldset__condition').contains('New').click()
      

          //7:sumbiting search button

          cy.xpath('(//button[@class="btn btn--primary"])[2]').click()

          //8: assertion 

          cy.get('.srp-save-null-search__heading').contains('No exact matches found').should('be.visible')

          

    });
});