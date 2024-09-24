
describe('Login', () => {
   
  
  it('Loign with valid data', () => {
    cy.visit(`https://opensource-demo.orangehrmlive.com/web/index.php/auth/login`)
    cy.get(`[name="username"]`).type(`Admin`)
    cy.get(`[type="password"]`).type(`admin123`)

    cy.get(`[type="submit"]`).click()
    
  });
it('Login with invvalid data', () => {
  cy.visit(`https://opensource-demo.orangehrmlive.com/web/index.php/auth/login`)
  cy.get(`[name="username"]`).type(`admin`)
  cy.get(`[type="password"]`).type(`admin1234`)

  cy.get(`[type="submit"]`).click()
  
});

});