import { before,Given,When,Then,And } from "cypress-cucumber-preprocessor/Steps";


//Given block in step definition
Given('open browser and enter form url',()=>{

cy.visit('https://v1.training-support.net/selenium/simple-form')

})

When('user enter firstname,lastname,email,cotact',()=>{

var str="shahid"
cy.get('#firstName').type(str)

cy.get('#lastName').type('Patel')

cy.get('#email').type('shahidpatel9132@gmail.com')

cy.get('#number').type('9689818231')


})

And('user click on submit',()=>{
    cy.get('[value="submit"]').click()

})



Then('Successful alert should be displayed with a message.',()=>{
cy.on('window:alert',(text)=>{
    expect(text).to.contains('Thank You for reaching out to us,')
})
})