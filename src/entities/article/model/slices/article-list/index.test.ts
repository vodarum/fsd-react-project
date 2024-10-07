import { articleListActions, articleListReducer } from '.';
import {
    mockArticles,
    mockArticleListEntityState,
    mockArticleListState,
} from '../../__mocks__';
import { ArticleViewTypes } from '../../const';
import { fetchList } from '../../services';

describe('articleListSlice', () => {
    test('setView', () => {
        expect(mockArticleListState).toEqual({
            ...mockArticleListState,
            view: ArticleViewTypes.grid,
        });

        expect(
            articleListReducer(
                mockArticleListState,
                articleListActions.setView(ArticleViewTypes.list),
            ),
        ).toEqual({
            ...mockArticleListState,
            view: ArticleViewTypes.list,
        });
    });

    test('fetchList pending', () => {
        expect(
            articleListReducer(
                {
                    ...mockArticleListState,
                    error: 'Some error',
                },
                fetchList.pending(''),
            ),
        ).toEqual({
            ...mockArticleListState,
            loading: true,
            error: undefined,
        });
    });

    test('fetchList fulfilled', () => {
        expect(
            articleListReducer(
                mockArticleListState,
                fetchList.fulfilled(mockArticles, ''),
            ),
        ).toEqual({
            ...mockArticleListState,
            entities: mockArticleListEntityState.entities,
            ids: mockArticleListEntityState.ids,
        });
    });
});
