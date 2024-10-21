import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkAPI } from 'app/providers/store-provider';
import {
    selectLoading,
    selectHasMore,
    selectPage,
} from '../../selectors/article-list';
import { articleListActions } from '../../slices/article-list';
import { fetchList } from '../fetch-list';

export const fetchListPart = createAsyncThunk<void, void, ThunkAPI<string>>(
    'article/fetchListPart',
    async (_, thunkAPI) => {
        const { dispatch, getState } = thunkAPI;

        const loading = selectLoading(getState());
        const hasMore = selectHasMore(getState());
        const page = selectPage(getState());

        if (loading || !hasMore) return;

        dispatch(articleListActions.setPage(page + 1));
        dispatch(fetchList());
    },
);
