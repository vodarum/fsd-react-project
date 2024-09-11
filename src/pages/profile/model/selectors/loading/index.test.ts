import { mockInitialAppState, mockProfileState } from '../../__mocks__';
import { selectLoading } from '.';

describe('selectLoading', () => {
    test('returns false for initial state', () => {
        expect(selectLoading(mockInitialAppState)).toBeFalsy();
    });

    test('returns false for initial profile state', () => {
        expect(
            selectLoading({
                ...mockInitialAppState,
                profile: mockProfileState,
            }),
        ).toBeFalsy();
    });
});
