import HomePage from './../../support/pages/homepage';
const homePage = new HomePage();
describe('Atlas Using BDD Gherkin Page Object', () => {
    it('Navigate URL Web Atlas ', () => {
        homePage.navigateTo();
        homePage.assertURL('http://bdd.atlasid.tech/');
    });

    it('Should Success Type in Quote based on Colour', () => {
        const homePage = new HomePage();
        homePage.navigateTo();
        homePage.clickTextQuote();

        homePage.typeInputQuote('Dhony');
        homePage.colourSelect('Blue');
        homePage.clickAddQuote();

        homePage.assertTextQuote('Dhony');
        homePage.assertPanelColourTextQuote('Blue');
    });
    
});