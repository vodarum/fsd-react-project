import { mockInitialAppState, mockUsers, mockUserState } from '../../__mocks__';
import { selectUserForm } from '.';

describe('selectUserForm', () => {
    test('returns undefined for initial app state', () => {
        expect(selectUserForm(mockInitialAppState)).toBeUndefined();
    });

    test('returns undefined for initial user state', () => {
        expect(
            selectUserForm({
                ...mockInitialAppState,
                user: mockUserState,
            }),
        ).toBeUndefined();
    });

    test(`returns user object`, () => {
        const mockUser = mockUsers[0];

        expect(
            selectUserForm({
                ...mockInitialAppState,
                user: {
                    ...mockUserState,
                    form: mockUser,
                },
            }),
        ).toEqual(mockUser);
    });
});
