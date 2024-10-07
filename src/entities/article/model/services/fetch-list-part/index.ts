import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkAPI } from 'app/providers/store-provider';
import { articleListSelectors } from '../../selectors';
import { articleListActions } from '../../slices';
import { fetchList } from '../fetch-list';

export const fetchListPart = createAsyncThunk<void, void, ThunkAPI<string>>(
    'article/fetchListPart',
    async (_, thunkAPI) => {
        const { dispatch, getState } = thunkAPI;

        const loading = articleListSelectors.selectLoading(getState());
        const hasMore = articleListSelectors.selectHasMore(getState());
        const page = articleListSelectors.selectPage(getState());

        if (loading || !hasMore) return;

        dispatch(articleListActions.setPage(page + 1));
        dispatch(fetchList());
    },
);
