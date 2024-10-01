import { articleCommentsReducer } from '.';
import {
    mockArticleId,
    mockComments,
    mockCommentsEntityState,
    mockArticleCommentsState,
} from '../__mocks__';
import { fetchByArticleId } from '../services';

describe('articleCommentsSlice', () => {
    test('fetchByArticleId pending', () => {
        expect(
            articleCommentsReducer(
                {
                    ...mockArticleCommentsState,
                    error: 'Some error',
                },
                fetchByArticleId.pending('', mockArticleId),
            ),
        ).toEqual({
            ...mockArticleCommentsState,
            loading: true,
            error: undefined,
        });
    });

    test('fetchByArticleId fulfilled', () => {
        expect(
            articleCommentsReducer(
                mockArticleCommentsState,
                fetchByArticleId.fulfilled(mockComments, '', mockArticleId),
            ),
        ).toEqual({
            ...mockArticleCommentsState,
            entities: mockCommentsEntityState.entities,
            ids: mockCommentsEntityState.ids,
        });
    });
});
