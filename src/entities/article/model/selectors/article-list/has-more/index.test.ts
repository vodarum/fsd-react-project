import { mockInitialAppState, mockArticleListState } from '../../../../__mocks__';
import { selectHasMore } from '.';

describe('selectHasMore', () => {
    test(`returns undefined for initial state`, () => {
        expect(selectHasMore(mockInitialAppState)).toBeUndefined();
    });

    test(`returns true for initial articleList state`, () => {
        expect(
            selectHasMore({
                ...mockInitialAppState,
                articleList: mockArticleListState,
            }),
        ).toBeTruthy();
    });

    test(`returns false`, () => {
        expect(
            selectHasMore({
                ...mockInitialAppState,
                articleList: {
                    ...mockArticleListState,
                    hasMore: false,
                },
            }),
        ).toBeFalsy();
    });
});
