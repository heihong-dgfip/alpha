describe('header-tools-links', () => {
    beforeEach(() => cy.visit('iframe.html?id=hearder-fr-header-tools-links--default&args=&viewMode=story'))
    it('should contain href', () => {
        cy.get('fr-header-tools-links').shadow().find('fr-link').each(($el)=>{
            expect($el).to.have.attr('href','#');
        })
    })

})