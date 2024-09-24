describe('file uploading ', () => {
    it('first', () => {
        
        cy.visit('https://the-internet.herokuapp.com/upload')

        cy.get('#file-upload').selectFile('C:/Users/shahi/Downloads/nature-3082832_1280.jpg')

         cy.get('#file-submit').click()
    });
});