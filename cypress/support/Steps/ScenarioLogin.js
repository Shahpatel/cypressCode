import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";

Given('open the browser and enter url', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
});

When ('enter username as {word}', (username) => {
    cy.get('[name="username"]').type(username);
});

And('enter password as {word}', (password) => {
    cy.get('[type="password"]').type(password);
});

And('click on submit', () => {
    cy.get('[type="submit"]').click();
});

Then('Login should be Successful', () => {
   // cy.url().should('include', '/dashboard'); // Example assertion

   cy.get('[class="oxd-text oxd-text--p oxd-alert-content-text"]').contains('Invalid credentials')
});
