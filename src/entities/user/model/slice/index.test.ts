import { mockSession, mockUserState } from '../__mocks__';
import { UserState } from '../types';
import { userReducer, userActions } from './';

describe('userSlice', () => {
    test('should work with empty state', () => {
        expect(
            userReducer(undefined, userActions.setSession(mockSession)),
        ).toEqual({
            ...mockUserState,
            session: mockSession,
        });
    });

    test('setSession', () => {
        const newSession: UserState['session'] = {
            userId: 2,
            token: 'qwerty456',
        };

        expect(
            userReducer(
                {
                    ...mockUserState,
                    session: mockSession,
                },
                userActions.setSession(newSession),
            ),
        ).toEqual({
            ...mockUserState,
            session: newSession,
        });
    });

    test('resetSession', () => {
        expect(
            userReducer(
                {
                    ...mockUserState,
                    session: mockSession,
                },
                userActions.resetSession(),
            ),
        ).toEqual(mockUserState);
    });
});
