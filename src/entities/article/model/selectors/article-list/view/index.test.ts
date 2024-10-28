import { mockInitialAppState, mockArticleListState } from '../../../../__mocks__';
import { ArticleViewTypes } from '../../../const';
import { selectView } from '.';

describe('selectView', () => {
    test(`returns ${ArticleViewTypes.grid} for initial state`, () => {
        expect(selectView(mockInitialAppState)).toBe(ArticleViewTypes.grid);
    });

    test(`returns ${ArticleViewTypes.grid} for initial articleList state`, () => {
        expect(
            selectView({
                ...mockInitialAppState,
                articleList: mockArticleListState,
            }),
        ).toBe(ArticleViewTypes.grid);
    });
});
