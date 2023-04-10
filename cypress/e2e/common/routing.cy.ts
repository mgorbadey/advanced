import { selectByTestId } from 'cypress/helpers/selectByTestId';

describe('Routing', () => {
    describe('User is NOT authorized', () => {
        it('Visiting Main Page', () => {
            cy.visit('/');
            cy.get(selectByTestId('MainPage')).should('exist');
        });
        it('Redirect to Main Page', () => {
            cy.visit('/profile/1');
            cy.get(selectByTestId('MainPage')).should('exist');
        });
        it('Opening non-existing route', () => {
            cy.visit('/cljyeqv;iqyer');
            cy.get(selectByTestId('NotFoundPage')).should('exist');
        });
    });
    describe('User IS authorized', () => {
        beforeEach(() => {
            cy.login();
        });
        it('Redirect to Profile Page', () => {
            cy.visit('/profile/1');
            cy.get(selectByTestId('ProfilePage')).should('exist');
        });
        it('Redirect to Articles Page', () => {
            cy.visit('/articles');
            cy.get(selectByTestId('ArticlesPage')).should('exist');
        });
    });
});
