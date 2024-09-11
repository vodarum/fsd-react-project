import { mockInitialAppState, mockProfileState } from '../../__mocks__';
import { selectError } from '.';

describe('selectError', () => {
    test('returns undefined for initial app state', () => {
        expect(selectError(mockInitialAppState)).toBeUndefined();
    });

    test('returns undefined for initial profile state', () => {
        expect(
            selectError({
                ...mockInitialAppState,
                profile: mockProfileState,
            }),
        ).toBeUndefined();
    });

    test(`returns error text`, () => {
        const error = 'Some error';

        expect(
            selectError({
                ...mockInitialAppState,
                ...{
                    profile: {
                        ...mockProfileState,
                        error,
                    },
                },
            }),
        ).toBe(error);
    });
});
