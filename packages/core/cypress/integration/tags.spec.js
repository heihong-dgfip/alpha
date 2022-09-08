describe('tags', () => {
     beforeEach(() => cy.visit('iframe.html?id=tags-fr-tags--default&args=&viewMode=story'))
    it('should contain 3 fr-tag', () => {
        cy.get('fr-tags').shadow().find('fr-tag').should('have.length', 3)
    })
    it('should contain href', () => {
        cy.get('fr-tags').shadow().find('fr-tag').each(($el)=>{
            expect($el).to.have.attr('href','#');
        })
    })
})