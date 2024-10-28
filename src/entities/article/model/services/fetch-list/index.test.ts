import { fetchList } from '.';
import { testAsyncThunk } from '@/shared/lib/tests/test-async-thunk';
import { mockArticles } from '../../../__mocks__';

const url = '/articles';
const requestOptions = {
    params: {
        _expand: 'user',
        _limit: 9,
        _order: 'asc',
        _page: 1,
        _sort: 'createdAt',
    },
};

describe('fetchList', () => {
    test('with fulfilled', async () => {
        const { callThunk, dispatch, api } = testAsyncThunk(fetchList);

        api.get.mockReturnValueOnce(Promise.resolve({ data: mockArticles }));

        const result = await callThunk({});

        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(api.get).toHaveBeenCalledWith(url, requestOptions);
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual(mockArticles);
    });

    test('with rejected', async () => {
        const { callThunk, dispatch, api } = testAsyncThunk(fetchList);

        api.get.mockReturnValueOnce(Promise.resolve({ status: 403 }));

        const result = await callThunk({});

        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(api.get).toHaveBeenCalledWith(url, requestOptions);
        expect(result.meta.requestStatus).toBe('rejected');
        expect(result.payload).toBe('Error: Error');
    });
});
