import { mockInitialAppState, mockUserState } from '../../__mocks__';
import { selectUserData } from '.';
import { mockUsers } from '@/entities/user';

describe('selectUserData', () => {
    test('returns undefined for initial app state', () => {
        expect(selectUserData(mockInitialAppState)).toBeUndefined();
    });

    test('returns undefined for initial user state', () => {
        expect(
            selectUserData({
                ...mockInitialAppState,
                user: mockUserState,
            }),
        ).toBeUndefined();
    });

    test(`returns user object`, () => {
        const mockUser = mockUsers[0];

        expect(
            selectUserData({
                ...mockInitialAppState,
                user: {
                    ...mockUserState,
                    data: mockUser,
                },
            }),
        ).toEqual(mockUser);
    });
});
