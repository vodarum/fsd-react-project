import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkAPI } from 'app/providers/store-provider';
import { articleListSelectors } from '../../selectors';
import { Article } from '../../types';

export const fetchList = createAsyncThunk<Article[], void, ThunkAPI<string>>(
    'article/fetchList',
    async (_, thunkAPI) => {
        const { extra, getState, rejectWithValue } = thunkAPI;

        const page = articleListSelectors.selectPage(getState());
        const limit = articleListSelectors.selectLimit(getState());

        try {
            const response = await extra.api.get<Article[]>('/articles', {
                params: {
                    _expand: 'user',
                    _limit: limit,
                    _page: page,
                },
            });

            if (!response.data) throw new Error();

            return response.data;
        } catch (e) {
            return rejectWithValue(`Error: ${e}`);
        }
    },
);
