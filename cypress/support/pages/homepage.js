import HomePageLocator from './../locator/homepage';

class HomePage {
    selector = new HomePageLocator();

    navigateTo = (() => {
        cy.visit('/');
    });

    typeInputQuote = ((inputQuote) => {
        cy.get(this.selector.fieldQuote).click();
        cy.get(this.selector.fieldQuote).type(inputQuote);
    });

    colourSelect = ((colourSelect) => {
        cy.get(this.selector.fieldColour).select(colourSelect);
    });

    clickAddQuote = ((colourSelect) => {
        cy.get(this.selector.btnAddQuote).click();
    });

    clickTextQuote = (() => {
        cy.get(this.selector.textQuote).click();
    });

    assertTextQuote = ((expectedText) => {
        cy.get(this.selector.textQuote).should('have.text', expectedText);
    });

    assertPanelColourTextQuote = ((expectedColour) => {
        const expectedValue = `background-color: ${expectedColour.toLowerCase()};`;
        cy.get(this.selector.panelQuote)
            .should('have.attr', 'style', expectedValue);
    });

    assertURL = ((expectedURL) => {
        cy.url().should('eq', expectedURL);
    });

}

export default HomePage