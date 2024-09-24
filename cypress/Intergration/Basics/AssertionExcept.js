

describe('except', () => {
    it('first', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

        //expect() to assert username
        cy.get('[placeholder="Username"]').then(($uname)=>{

            expect($uname).to.have.attr('name','username').to.have.attr('placeholder');

            cy.wrap($uname).type('Admin')

            cy.get('[placeholder="Password"]').then(($password)=>{

                expect($password).to.have.attr('placeholder')

                cy.wrap($password).type('admin123')

                cy.get('[type="submit"]').then(($login)=>{

                    expect($login).to.have.text(' Login ')
                    cy.wrap($login).click()

                 //for waiting browser 

                    cy.wait(2000)

                    cy.get('.oxd-userdropdown-name').click()

                    cy.get('.oxd-dropdown-menu').find('[role="menuitem"]').each(($ele)=>{

                        if($ele.text()==='Logout'){
                            cy.wrap($ele).click();
                        }
                    })
                })
            })
        }
        
        )
        
    });
});