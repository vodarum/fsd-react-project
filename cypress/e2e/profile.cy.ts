import { getApiEndpoint } from '../helpers';

describe('profile edit', () => {
    const user = {
        id: 1,
        username: 'vodarum',
        password: 'qwerty123',
        firstName: 'Nashvar',
        lastName: 'Vodarum',
        birthday: '1993-08-13',
        currency: 'RUB',
        country: 'Russia',
        city: 'Волгоград',
        avatar: 'https://us.123rf.com/450wm/whitecity/whitecity2403/whitecity240301752/227835211-lion-in-sunglasses-vector-illustration-of-a-lion-with-sunglasses.jpg?ver=6',
        roles: ['admin'],
    } as const;
    const newFirstName = 'newFirstName';
    const newLastName = 'newLastName';

    beforeEach(() => {
        cy.login();
        cy.visit('/profile');
    });

    afterEach(() => {
        cy.request<void>({
            method: 'PUT',
            url: getApiEndpoint(`users/${user.id}`),
            headers: {
                authorization: 'token',
            },
            body: user,
        });
    });

    it('form fields contain correct values', () => {
        ['firstName', 'lastName', 'birthday', 'country', 'city'].forEach(
            (key) =>
                cy
                    .getByTestId(`ProfileCard.${key.toLowerCase()}`)
                    .should('have.value', user[key]),
        );
    });

    it('saves changes', () => {
        cy.getByTestId('ProfileButtonBar.edit').click();
        cy.getByTestId('ProfileCard.firstname').clear().type(newFirstName);
        cy.getByTestId('ProfileCard.lastname').clear().type(newLastName);
        cy.getByTestId('ProfileButtonBar.save').click();
        cy.getByTestId('ProfileCard.firstname').should(
            'have.value',
            newFirstName,
        );
        cy.getByTestId('ProfileCard.lastname').should(
            'have.value',
            newLastName,
        );
    });

    it('undoes changes', () => {
        cy.getByTestId('ProfileButtonBar.edit').click();
        cy.getByTestId('ProfileCard.firstname').clear().type(newFirstName);
        cy.getByTestId('ProfileCard.lastname').clear().type(newLastName);
        cy.getByTestId('ProfileButtonBar.cancel').click();
        cy.getByTestId('ProfileCard.firstname').should(
            'have.value',
            user.firstName,
        );
        cy.getByTestId('ProfileCard.lastname').should(
            'have.value',
            user.lastName,
        );
    });
});
