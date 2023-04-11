describe('User visits Article Details page', () => {
    let currentArticle = '';
    beforeEach(() => {
        cy.login();
        cy.createArticle().then((article) => {
            currentArticle = article.id;
            cy.log(`Test Article with ID ${currentArticle} was successfully created!`);
            cy.visit(`articles/${article.id}`);
        });
    });
    afterEach(() => {
        cy.removeArticle(currentArticle);
        cy.log(`Test Article with ID ${currentArticle} was successfully deleted!`);
    });

    it('and sees article\'s content', () => {
        cy.getByTestId('ArticleDetails.Info').should('exist');
    });
    it('and sees recommendations', () => {
        cy.getByTestId('ArticleRecommendationsList').should('exist');
    });
    it('and leaves a comment', () => {
        cy.getByTestId('ArticleDetails.Info');
        cy.getByTestId('AddCommentForm').scrollIntoView();
        cy.addComment('Test comment');
        cy.getByTestId('CommentCard.Content').should('have.length', 1);
    });
    it('and gives a rating with feedback', () => {
        cy.getByTestId('ArticleDetails.Info');
        cy.getByTestId('RatingCard').scrollIntoView();
        cy.setRate(4, 'Test feedback');
        cy.get('[data-selected=true]').should('have.length', 4);
    });
});
