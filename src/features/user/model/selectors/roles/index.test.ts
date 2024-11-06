import { mockInitialAppState, mockUserState } from '../../../__mocks__';
import { selectUserRoles } from '.';
import { mockUsers } from '@/entities/user/testing';

const mockUser = mockUsers[0];

describe('selectUserRoles', () => {
    test('returns empty array for initial state', () => {
        expect(selectUserRoles(mockInitialAppState)).toEqual([]);
    });

    test('returns empty array for initial user state', () => {
        expect(
            selectUserRoles(mockInitialAppState),
        ).toEqual([]);
    });

    test(`returns ${mockUser.roles}`, () => {
        expect(
            selectUserRoles({
                ...mockInitialAppState,
                user: {
                    ...mockUserState,
                    data: mockUser,
                },
            }),
        ).toEqual(mockUser.roles);
    });
});
