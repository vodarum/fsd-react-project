import { mockInitialAppState, mockUserState } from '../../../__mocks__';
import { selectLoading } from '.';

describe('selectLoading', () => {
    test('returns false for initial state', () => {
        expect(selectLoading(mockInitialAppState)).toBeFalsy();
    });

    test('returns false for initial user state', () => {
        expect(
            selectLoading({
                ...mockInitialAppState,
                user: mockUserState,
            }),
        ).toBeFalsy();
    });
});
