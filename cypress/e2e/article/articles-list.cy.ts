describe('User visits ArticlesPage', () => {
    beforeEach(() => {
        cy.login().then(() => {
            cy.visit('articles');
        });
    });
    describe('with real server', () => {
        it('and articles are successfully downloaded', () => {
            cy.getByTestId('ArticleList').should('exist');
            cy.getByTestId('ArticleListItem').should('have.length.at.least', 3);
        });
    });
    describe('with mocked data using fixtures', () => {
        it('and articles are successfully downloaded (with fixtures)', () => {
            cy.intercept('GET', '**/articles?*', { fixture: 'articles.json' });
            cy.getByTestId('ArticleList').should('exist');
            cy.getByTestId('ArticleListItem').should('have.length.at.least', 3);
        });
    });
});
