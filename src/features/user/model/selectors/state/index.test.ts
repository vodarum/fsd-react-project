import { mockInitialAppState, mockUserState } from '../../../__mocks__';
import { selectUserState } from '.';
import { mockUsers } from '@/entities/user/testing';

describe('selectUserState', () => {
    test('returns user state for initial app state', () => {
        expect(selectUserState(mockInitialAppState)).toEqual(mockUserState);
    });

    test(`returns user state`, () => {
        const newMockUserState = {
            ...mockUserState,
            data: mockUsers[0],
        };

        expect(
            selectUserState({
                ...mockInitialAppState,
                ...{
                    user: newMockUserState,
                },
            }),
        ).toEqual(newMockUserState);
    });
});
