import { fetchListPart } from '.';
import { testAsyncThunk } from '@/shared/lib/tests/test-async-thunk';
import { fetchList } from '../fetch-list';
import { mockAppState, mockArticleListState } from '../../__mocks__';

jest.mock('../fetch-list');

describe('fetchListPart', () => {
    test('fetchList called', async () => {
        const { callThunk, dispatch } = testAsyncThunk(
            fetchListPart,
            mockAppState,
        );

        await callThunk();

        expect(dispatch).toHaveBeenCalledTimes(4);
        expect(fetchList).toHaveBeenCalledTimes(1);
    });

    test('fetchList not called if loading is true', async () => {
        const { callThunk, dispatch } = testAsyncThunk(fetchListPart, {
            articleList: {
                ...mockArticleListState,
                loading: true,
            },
        });

        await callThunk();

        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(fetchList).not.toHaveBeenCalled();
    });

    test('fetchList not called if hasMore is false', async () => {
        const { callThunk, dispatch } = testAsyncThunk(fetchListPart, {
            articleList: {
                ...mockArticleListState,
                hasMore: false,
            },
        });

        await callThunk();

        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(fetchList).not.toHaveBeenCalled();
    });
});
