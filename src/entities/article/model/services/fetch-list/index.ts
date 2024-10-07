import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkAPI } from 'app/providers/store-provider';
import { Article } from '../../types';

export const fetchList = createAsyncThunk<Article[], void, ThunkAPI<string>>(
    'article/fetchList',
    async (_, thunkAPI) => {
        const { extra, rejectWithValue } = thunkAPI;

        try {
            const response = await extra.api.get<Article[]>('/articles', {
                params: {
                    _expand: 'user',
                },
            });

            if (!response.data) throw new Error();

            return response.data;
        } catch (e) {
            return rejectWithValue(`Error: ${e}`);
        }
    },
);
