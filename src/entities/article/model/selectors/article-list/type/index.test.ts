import {
    mockInitialAppState,
    mockArticleListState,
} from '../../../../__mocks__';
import { selectType } from '.';
import { ArticleTypes } from '../../../const';

describe('selectType', () => {
    test(`returns ${ArticleTypes.all} for initial state`, () => {
        expect(selectType(mockInitialAppState)).toBe(ArticleTypes.all);
    });

    test(`returns ${ArticleTypes.all} for initial articleList state`, () => {
        expect(
            selectType({
                ...mockInitialAppState,
                articleList: mockArticleListState,
            }),
        ).toBe(ArticleTypes.all);
    });

    test(`returns ${ArticleTypes.it}`, () => {
        expect(
            selectType({
                ...mockInitialAppState,
                articleList: {
                    ...mockArticleListState,
                    type: ArticleTypes.it,
                },
            }),
        ).toBe(ArticleTypes.it);
    });
});
