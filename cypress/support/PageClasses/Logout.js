class Logout{


    logout(){
        cy.get('.oxd-userdropdown-tab').click()
        
        cy.get('.oxd-dropdown-menu').find('[role="menuitem"]').each(($ele)=>{

            if($ele.text()==='Logout'){
                cy.wrap($ele).click({force:true});
            }
        })
    }
}

export default Logout;