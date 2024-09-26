import { fetchById } from '.';
import { testAsyncThunk } from 'shared/lib/tests/test-async-thunk';
import { mockArticle } from '../../__mocks__';

const articleId = 1;
const url = `/articles/${articleId}`;

describe('fetchById', () => {
    test('with fulfilled', async () => {
        const { callThunk, dispatch, api } = testAsyncThunk(fetchById);

        api.get.mockReturnValueOnce(Promise.resolve({ data: mockArticle }));

        const result = await callThunk(articleId);

        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(api.get).toHaveBeenCalledWith(url);
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual(mockArticle);
    });

    test('with rejected', async () => {
        const { callThunk, dispatch, api } = testAsyncThunk(fetchById);

        api.get.mockReturnValueOnce(Promise.resolve({ status: 403 }));

        const result = await callThunk(articleId);

        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(api.get).toHaveBeenCalledWith(url);
        expect(result.meta.requestStatus).toBe('rejected');
        expect(result.payload).toBe('Error: Error');
    });
});
