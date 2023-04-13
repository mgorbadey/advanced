export const updateProfile = (firstName: string, lastName: string) => {
    cy.getByTestId('EditableProfileCard.EditButton').click();
    cy.getByTestId('ProfileCard.FirstNameInput').clear().type(firstName);
    cy.getByTestId('ProfileCard.LastNameInput').clear().type(lastName);
    cy.getByTestId('EditableProfileCard.SaveButton').click();
};

export const resetProfile = (profileId: string) =>
    cy.request({
        method: 'PUT',
        url: `http://localhost:8000/profile/${profileId}`,
        headers: { Authorization: 'Auth' },
        body: {
            id: '4',
            firstname: 'TestUser',
            lastname: 'TestUser',
            age: 29,
            currency: 'USD',
            country: 'Russia',
            city: 'Moscow',
            username: 'user',
            avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgnL-6fb5PhgkCkH3odiqgPmhqoWm6HeRjwQ&usqp=CAU',
        },
    });

declare global {
    namespace Cypress {
        interface Chainable {
            updateProfile(firstName: string, lastName: string): Chainable<void>;
            resetProfile(profileId: string): Chainable<void>;
        }
    }
}
