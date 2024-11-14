describe('article', () => {
    let articleId: number;

    beforeEach(() => {
        cy.login();
        cy.visit(`/articles/${articleId}`);
    });

    describe('with requests', () => {
        before(() => {
            cy.createArticle().then((article) => {
                articleId = article.id;
            });
        });

        after(() => {
            cy.deleteArticle(articleId);
        });

        it('renders article', () => {
            cy.getByTestId('ArticleDetails').should('exist');
            cy.getByTestId('ArticleDetails.title').should('exist');
        });
    });

    describe('with stubs', () => {
        before(() => {
            cy.createArticle().then((article) => {
                articleId = article.id;
            });
        });

        after(() => {
            cy.deleteArticle(articleId);
        });

        beforeEach(() => {
            cy.fixture('article.json').then((json) => {
                cy.intercept('GET', '**/articles/*', {
                    ...json,
                    id: articleId,
                });
            });
        });

        it('adds comment', () => {
            const commentText = 'Some article comment';
            cy.getByTestId('CommentForm').scrollIntoView();
            cy.getByTestId('CommentForm.input').type(commentText);
            cy.getByTestId('CommentForm.send').click();
            cy.getByTestId('CommentList.items').should('have.length', 1);
        });

        it('sets rating', () => {
            cy.getByTestId('ArticleRating').scrollIntoView();
            cy.getByTestId('RatingStar.1').should('exist');
            cy.getByTestId('RatingStar.1.Filled').should('not.exist');
            cy.getByTestId('RatingCard.Input').should('not.exist');
            cy.getByTestId('RatingStar.4').click();
            cy.getByTestId('RatingCard.Input').should('exist');
            cy.getByTestId('RatingCard.Close').click();
            cy.getByTestId('RatingStar.1.Filled').should('exist');
            cy.getByTestId('RatingStar.2.Filled').should('exist');
            cy.getByTestId('RatingStar.3.Filled').should('exist');
            cy.getByTestId('RatingStar.4.Filled').should('exist');
            cy.getByTestId('RatingStar.5.Filled').should('not.exist');
        });
    });
});
