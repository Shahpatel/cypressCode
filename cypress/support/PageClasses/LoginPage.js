
class LoginPage{

    Enterurl(){

        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    }


    LoginT(){
        cy.get(`[name="username"]`).type(`Admin`)
        cy.get(`[type="password"]`).type(`admin123`)
      
        cy.get(`[type="submit"]`).click()
        
    }

    forgotPassword(){
        cy.get('.orangehrm-login-forgot-header').click()
        cy.get('[name="username"]').type('random')
        cy.get('[type="submit"]').click()
    }
}
export default LoginPage;