

import LoginPage from "../../../support/PageClasses/LoginPage";
import Logout from "../../../support/PageClasses/Logout";
import Links from "../../../support/PageClasses/links";

import Search from "../../../support/PageClasses/Search";
describe('POM', () => {
    
    // we have create object of all the classes

    const loginobj=new LoginPage();

    const logoutobj=new Logout();

    const link=new Links();

    const search=new Search();

    it('test-1', () => {

        //enter url

        loginobj.Enterurl();

        //login
        loginobj.LoginT();

        cy.wait(3000)
        search.searchT('Buzz')
  
        //click on links

        link.clickOnLink('Admin')

        //logout
    logoutobj.logout();

        
    });
});