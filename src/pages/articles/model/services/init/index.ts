import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkAPI } from 'app/providers/store-provider';
import {
    articleListActions,
    articleListSelectors,
    fetchList,
} from 'entities/article';

export const init = createAsyncThunk<void, void, ThunkAPI<string>>(
    'articles/init',
    async (_, thunkAPI) => {
        const { dispatch, getState } = thunkAPI;

        const inited = articleListSelectors.selectInited(getState());

        if (inited) return;

        dispatch(articleListActions.setInited());
        dispatch(fetchList());
    },
);
