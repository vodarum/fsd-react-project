import { mockInitialAppState, mockAppState } from '../../__mocks__';
import { selectError } from '.';

describe('selectError', () => {
    test('returns undefined for initial app state', () => {
        expect(selectError(mockInitialAppState)).toBeUndefined();
    });

    test('returns undefined for initial addComment state', () => {
        expect(selectError(mockAppState)).toBeUndefined();
    });

    test(`returns error text`, () => {
        const error = 'Some error';

        expect(
            selectError({
                ...mockAppState,
                ...{
                    addComment: {
                        error,
                    },
                },
            }),
        ).toBe(error);
    });
});
