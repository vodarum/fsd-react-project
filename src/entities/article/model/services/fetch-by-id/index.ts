import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkAPI } from 'app/providers/store-provider';
import { Article } from '../../types';

export const fetchById = createAsyncThunk<Article, number, ThunkAPI<string>>(
    'article/fetchById',
    async (id, thunkAPI) => {
        const { extra, rejectWithValue } = thunkAPI;

        try {
            const response = await extra.api.get<Article>(`/articles/${id}`);

            if (!response.data) throw new Error();

            return response.data;
        } catch (e) {
            return rejectWithValue(`Error: ${e}`);
        }
    },
);
