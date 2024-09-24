
describe('Hooks', () => {
            beforeEach(()=>{

            cy.visit(`https://opensource-demo.orangehrmlive.com/web/index.php/auth/login`)
            cy.get(`[name="username"]`).type(`Admin`)
            cy.get(`[type="password"]`).type(`admin123`)
    
            cy.get(`[type="submit"]`).click()
        });
   

        it('Admin test', () => {
          cy.contains('Admin').click();

            
        });

        after(()=>{
            cy.get('[src="/web/index.php/pim/viewPhoto/empNumber/7"]').click()
            cy.xpath('(//a[@role="menuitem"])[4]').click()
        })
        
    });