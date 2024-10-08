import { init } from '.';
import { testAsyncThunk } from 'shared/lib/tests/test-async-thunk';
import {
    fetchList,
    mockAppState,
    mockArticleListState,
} from 'entities/article';

jest.mock('entities/article/model/services/fetch-list');

describe('init', () => {
    test('fetchList called', async () => {
        const { callThunk, dispatch } = testAsyncThunk(init, mockAppState);

        await callThunk();

        expect(dispatch).toHaveBeenCalledTimes(4);
        expect(fetchList).toHaveBeenCalledTimes(1);
    });

    test('fetchList not called if _inited is true', async () => {
        const { callThunk, dispatch } = testAsyncThunk(init, {
            articleList: {
                ...mockArticleListState,
                _inited: true,
            },
        });

        await callThunk();

        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(fetchList).not.toHaveBeenCalled();
    });
});
