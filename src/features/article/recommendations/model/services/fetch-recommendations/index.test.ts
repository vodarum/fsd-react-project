import { fetchRecommendations } from '.';
import { testAsyncThunk } from 'shared/lib/tests/test-async-thunk';
import { mockRecommendations } from '../../__mocks__';
import { ArticlesNumberPerPage, ArticleViewTypes } from 'entities/article';

const url = `/articles`;
const requestOptions = {
    params: {
        _expand: 'user',
        _limit: ArticlesNumberPerPage[ArticleViewTypes.slider],
    },
};

describe('fetchRecommendations', () => {
    test('with fulfilled', async () => {
        const { callThunk, dispatch, api } =
            testAsyncThunk(fetchRecommendations);

        api.get.mockReturnValueOnce(
            Promise.resolve({ data: mockRecommendations }),
        );

        const result = await callThunk();

        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(api.get).toHaveBeenCalledWith(url, requestOptions);
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual(mockRecommendations);
    });

    test('with rejected', async () => {
        const { callThunk, dispatch, api } =
            testAsyncThunk(fetchRecommendations);

        api.get.mockReturnValueOnce(Promise.resolve({ status: 403 }));

        const result = await callThunk();

        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(api.get).toHaveBeenCalledWith(url, requestOptions);
        expect(result.meta.requestStatus).toBe('rejected');
        expect(result.payload).toBe('Error: Error');
    });
});
