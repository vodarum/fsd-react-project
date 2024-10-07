import { mockInitialAppState, mockArticleListState } from '../../../__mocks__';
import { selectError } from '.';

describe('selectError', () => {
    test('returns undefined for initial app state', () => {
        expect(selectError(mockInitialAppState)).toBeUndefined();
    });

    test('returns undefined for initial articleList state', () => {
        expect(
            selectError({
                ...mockInitialAppState,
                articleList: mockArticleListState,
            }),
        ).toBeUndefined();
    });

    test(`returns error text`, () => {
        const error = 'Some error';

        expect(
            selectError({
                ...mockInitialAppState,
                ...{
                    articleList: {
                        ...mockArticleListState,
                        error,
                    },
                },
            }),
        ).toBe(error);
    });
});
