let profileId = '';

describe('User visits profile page', () => {
    beforeEach(() => {
        cy.visit('');
        cy.login().then((data) => {
            profileId = data.id;
            cy.visit(`/profile/${data.id}`);
        });
    });
    afterEach(() => {
        cy.resetProfile(profileId);
    });
    it('and Profile Card opens successfully', () => {
        cy.getByTestId('ProfileCard.FirstNameInput').should(
            'have.value',
            'TestUser',
        );
        cy.getByTestId('ProfileCard.LastNameInput').should(
            'have.value',
            'TestUser',
        );
    });
    it('and User edits profile', () => {
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
