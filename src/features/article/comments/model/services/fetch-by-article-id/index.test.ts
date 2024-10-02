import { fetchByArticleId } from '.';
import { testAsyncThunk } from 'shared/lib/tests/test-async-thunk';
import { mockArticleId, mockComments } from '../../__mocks__';

const url = `/articles/${mockArticleId}/comments`;
const requestOptions = {
    params: {
        _expand: 'user',
    },
};

describe('fetchByArticleId', () => {
    test('with fulfilled', async () => {
        const { callThunk, dispatch, api } = testAsyncThunk(fetchByArticleId);

        api.get.mockReturnValueOnce(Promise.resolve({ data: mockComments }));

        const result = await callThunk(mockArticleId);

        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(api.get).toHaveBeenCalledWith(url, requestOptions);
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual(mockComments);
    });

    test('with rejected', async () => {
        const { callThunk, dispatch, api } = testAsyncThunk(fetchByArticleId);

        api.get.mockReturnValueOnce(Promise.resolve({ status: 403 }));

        const result = await callThunk(mockArticleId);

        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(api.get).toHaveBeenCalledWith(url, requestOptions);
        expect(result.meta.requestStatus).toBe('rejected');
        expect(result.payload).toBe('Error: Error');
    });

    test('with rejected by empty articleId', async () => {
        const { callThunk, dispatch, api } = testAsyncThunk(fetchByArticleId);

        const result = await callThunk(undefined);

        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(api.get).toHaveBeenCalledTimes(0);
        expect(result.meta.requestStatus).toBe('rejected');
        expect(result.payload).toBe('Empty articleId');
    });
});
