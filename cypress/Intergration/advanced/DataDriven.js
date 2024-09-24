

describe('TestData Driven', () => {


    before(()=>{

        cy.fixture('example').then((data)=>{

            globalThis.data=data;
        })
    })
    it('Login', () => {
        cy.visit(`https://opensource-demo.orangehrmlive.com/web/index.php/auth/login`)
      cy.get(`[name="username"]`).type(data.uname)
      cy.get(`[type="password"]`).type(data.password)
  
      cy.get(`[type="submit"]`).click()
    });
});