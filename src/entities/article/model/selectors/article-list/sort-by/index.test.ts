import { mockInitialAppState, mockArticleListState } from '../../../__mocks__';
import { ArticleSortFields } from '../../../const';
import { selectSortBy } from '.';

describe('selectSortBy', () => {
    test(`returns ${ArticleSortFields.createdAt} for initial state`, () => {
        expect(selectSortBy(mockInitialAppState)).toBe(
            ArticleSortFields.createdAt,
        );
    });

    test(`returns ${ArticleSortFields.createdAt} for initial articleList state`, () => {
        expect(
            selectSortBy({
                ...mockInitialAppState,
                articleList: mockArticleListState,
            }),
        ).toBe(ArticleSortFields.createdAt);
    });

    test(`returns ${ArticleSortFields.title}`, () => {
        expect(
            selectSortBy({
                ...mockInitialAppState,
                articleList: {
                    ...mockArticleListState,
                    sortBy: ArticleSortFields.title,
                },
            }),
        ).toBe(ArticleSortFields.title);
    });
});
