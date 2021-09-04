describe('Atlas Using BDD Gherkin Plain', () => {
    it('Navigate URL Web Atlas', () => {
        cy.visit('/');
        cy.url().should('eq', 'http://bdd.atlasid.tech/');
        cy.url().then((url) => {
            expect(url).to.equal('http://bdd.atlasid.tech/');
        });
    });

    it('Should Success Type in Quote based on Colour', () => {
        cy.visit('/');
        cy.url().should('eq', 'http://bdd.atlasid.tech/');
        cy.get('p[name="quoteText"]').click();
        
        cy.get('#inputQuote').click();
        cy.get('#inputQuote').type('Halo Nama Saya Dhony');

        cy.get('#colorSelect').select('Yellow');
        cy.get('#buttonAddQuote').click();

        cy.get('p[name="quoteText"]').should('have.text', 'Halo Nama Saya Dhony');
    });
    
});