import { mockLoginState } from '../__mocks__';
import { loginReducer, loginActions } from './';

describe('loginSlice', () => {
    test('should work with empty state', () => {
        expect(
            loginReducer(
                undefined,
                loginActions.setUsername(mockLoginState.username),
            ),
        ).toEqual({
            username: mockLoginState.username,
            password: '',
            loading: false,
        });
    });

    test('setUsername', () => {
        const newUsername = 'qwerty123';

        expect(
            loginReducer(mockLoginState, loginActions.setUsername(newUsername)),
        ).toEqual({
            ...mockLoginState,
            username: newUsername,
        });
    });

    test('setPassword', () => {
        const newPassword = 'qwerty123';

        expect(
            loginReducer(mockLoginState, loginActions.setPassword(newPassword)),
        ).toEqual({
            ...mockLoginState,
            password: newPassword,
        });
    });
});
