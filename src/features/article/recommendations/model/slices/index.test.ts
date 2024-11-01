import { articleRecommendationsReducer } from '.';
import {
    mockRecommendations,
    mockRecommendationsEntityState,
    mockArticleRecommendationsState,
} from '../../__mocks__';
import { fetchRecommendations } from '../services';

const mockArticleId = 1;

describe('articleRecommendationsSlice', () => {
    test('fetchByArticleId pending', () => {
        expect(
            articleRecommendationsReducer(
                {
                    ...mockArticleRecommendationsState,
                    error: 'Some error',
                },
                fetchRecommendations.pending('', mockArticleId),
            ),
        ).toEqual({
            ...mockArticleRecommendationsState,
            loading: true,
            error: undefined,
        });
    });

    test('fetchRecommendations fulfilled', () => {
        expect(
            articleRecommendationsReducer(
                mockArticleRecommendationsState,
                fetchRecommendations.fulfilled(mockRecommendations, '', mockArticleId),
            ),
        ).toEqual({
            ...mockArticleRecommendationsState,
            entities: mockRecommendationsEntityState.entities,
            ids: mockRecommendationsEntityState.ids,
        });
    });
});
