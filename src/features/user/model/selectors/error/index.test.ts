import { mockInitialAppState, mockUserState } from '../../__mocks__';
import { selectError } from '.';

describe('selectError', () => {
    test('returns undefined for initial app state', () => {
        expect(selectError(mockInitialAppState)).toBeUndefined();
    });

    test('returns undefined for initial user state', () => {
        expect(
            selectError({
                ...mockInitialAppState,
                user: mockUserState,
            }),
        ).toBeUndefined();
    });

    test(`returns error text`, () => {
        const error = 'Some error';

        expect(
            selectError({
                ...mockInitialAppState,
                ...{
                    user: {
                        ...mockUserState,
                        error,
                    },
                },
            }),
        ).toBe(error);
    });
});
