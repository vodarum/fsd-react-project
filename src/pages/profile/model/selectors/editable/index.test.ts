import { mockInitialAppState, mockProfileState } from '../../__mocks__';
import { selectEditable } from '.';

describe('selectEditable', () => {
    test('returns false for initial state', () => {
        expect(selectEditable(mockInitialAppState)).toBeFalsy();
    });

    test('returns false for initial profile state', () => {
        expect(
            selectEditable({
                ...mockInitialAppState,
                profile: mockProfileState,
            }),
        ).toBeFalsy();
    });
});
