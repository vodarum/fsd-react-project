import { mockInitialAppState, mockUserState } from '../../../__mocks__';
import { selectEditable } from '.';

describe('selectEditable', () => {
    test('returns false for initial state', () => {
        expect(selectEditable(mockInitialAppState)).toBeFalsy();
    });

    test('returns false for initial user state', () => {
        expect(
            selectEditable({
                ...mockInitialAppState,
                user: mockUserState,
            }),
        ).toBeFalsy();
    });
});
