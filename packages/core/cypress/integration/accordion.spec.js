describe('accordion', () => {
    beforeEach(() => cy.visit('iframe.html?id=accordions-fr-accordion--default&args=&viewMode=story'))
    it('should contain slot text', () => {
        cy.contains("Intitulé accordéon");
        cy.contains('Title');
        cy.contains('content');
    })
    it('aria-expanded = true', () => {
        cy.get('fr-accordion').shadow().find('button').should('have.attr', 'aria-expanded','false');
        cy.get('fr-accordion').shadow().find('button').click()
        cy.get('fr-accordion').shadow().find('button').should('have.attr', 'aria-expanded','true');
    })
})