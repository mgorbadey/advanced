import { EditableProfileCard } from '../../src/features/editableProfileCard';
import { TestProvider } from '../../src/shared/lib/tests/componentRender/componentRender';

describe('EditableProfileCard.cy.tsx', () => {
    beforeEach('Render component', () => {
        cy.intercept('GET', '**/profile/*', { fixture: 'profile.json' });
        cy.mount(
            <TestProvider
                options={{ initialState: { user: { authData: { id: '1' } } } }}
            >
                <EditableProfileCard id="1" />
            </TestProvider>,
        );
    });
    it('Component rendered and has data in inputs as per tests', () => {
        cy.getByTestId('ProfileCard.FirstNameInput').should(
            'have.value',
            'TestUser',
        );
        cy.getByTestId('ProfileCard.LastNameInput').should(
            'have.value',
            'TestUser',
        );
    });
    it('User edits profile', () => {
        const newFirstName = 'NewFirstName';
        const newLastName = 'NewLastName';
        cy.updateProfile(newFirstName, newLastName);
        cy.getByTestId('ProfileCard.FirstNameInput').should(
            'have.value',
            'NewFirstName',
        );
        cy.getByTestId('ProfileCard.LastNameInput').should(
            'have.value',
            'NewLastName',
        );
    });
});
