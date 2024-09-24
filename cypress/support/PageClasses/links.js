
class Links{

    clickOnLink(linktext){

        cy.contains(linktext).click()
    }
}

export default Links;