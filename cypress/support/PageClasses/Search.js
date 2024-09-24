
class Search{

    searchT(searchText){
        cy.get('[placeholder="Search"]').type(searchText)
        cy.contains(searchText).click();
    }
}

export default Search;