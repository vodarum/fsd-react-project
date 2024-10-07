import { mockInitialAppState, mockArticleState } from '../../../__mocks__';
import { selectError } from '.';

describe('selectError', () => {
    test('returns undefined for initial app state', () => {
        expect(selectError(mockInitialAppState)).toBeUndefined();
    });

    test('returns undefined for initial article state', () => {
        expect(
            selectError({
                ...mockInitialAppState,
                article: mockArticleState,
            }),
        ).toBeUndefined();
    });

    test(`returns error text`, () => {
        const error = 'Some error';

        expect(
            selectError({
                ...mockInitialAppState,
                ...{
                    article: {
                        ...mockArticleState,
                        error,
                    },
                },
            }),
        ).toBe(error);
    });
});
