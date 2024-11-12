describe('routing', () => {
    describe('for unauthorized user', () => {
        it('renders MainPage', () => {
            cy.visit('/');
            cy.getByTestId('mainPage').should('exist');
        });

        it('redirects to MainPage', () => {
            cy.visit('/profile');
            cy.getByTestId('mainPage').should('exist');
        });

        it('redirects to NotFoundPage', () => {
            cy.visit('/non-existent-route');
            cy.getByTestId('notFoundPage').should('exist');
        });
    });

    describe('for authorized user', () => {
        beforeEach(() => {
            cy.login();
        });

        it('renders ProfilePage', () => {
            cy.visit('/profile');
            cy.getByTestId('profilePage').should('exist');
        });

        it('redirects to NotFoundPage', () => {
            cy.visit('/non-existent-route');
            cy.getByTestId('notFoundPage').should('exist');
        });
    });
});
