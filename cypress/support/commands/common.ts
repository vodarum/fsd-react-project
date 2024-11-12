import { type Session } from '../../../src/entities/session';
import { type User } from '../../../src/entities/user';
import { APP_SESSION_LS_KEY } from '../../../src/shared/api/consts';
import { getApiEndpoint } from '../../helpers';

const getByTestId = (testId: string) => cy.get(`[data-testid="${testId}"]`);

const login = (username = 'vodarum', password = 'qwerty123') => {
    cy.request<Session>({
        method: 'POST',
        url: getApiEndpoint('login'),
        body: {
            username,
            password,
        },
    }).then(({ body }) => {
        window.localStorage.setItem(APP_SESSION_LS_KEY, JSON.stringify(body));
    });
};

const getUserById = (id: number) => {
    cy.request<User>({
        method: 'GET',
        url: getApiEndpoint(`users/${id}`),
    }).then(({ body }) => body);
};

export { getByTestId, getUserById, login };
