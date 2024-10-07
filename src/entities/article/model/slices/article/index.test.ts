import { articleReducer } from '.';
import { mockArticles, mockArticleState } from '../../__mocks__';
import { fetchById } from '../../services';

const mockArticle = mockArticles[0];

describe('articleSlice', () => {
    test('fetchById pending', () => {
        expect(
            articleReducer(
                {
                    ...mockArticleState,
                    error: 'Some error',
                },
                fetchById.pending('', mockArticle.id), // TODO: без вызова функции появляется ts-ошибка
            ),
        ).toEqual({
            ...mockArticleState,
            loading: true,
            error: undefined,
        });
    });

    test('fetchById fulfilled', () => {
        expect(
            articleReducer(
                mockArticleState,
                fetchById.fulfilled(mockArticle, '', mockArticle.id),
            ),
        ).toEqual({
            ...mockArticleState,
            data: mockArticle,
        });
    });
});
