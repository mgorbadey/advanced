describe('User visits ArticlesPage', () => {
    beforeEach(() => {
        cy.login().then(() => {
            cy.visit('articles');
        });
    });

    it('and articles are successfully downloaded', () => {
        cy.getByTestId('ArticleList').should('exist');
        cy.getByTestId('ArticleListItem').should('have.length.at.least', 3);
    });
});
