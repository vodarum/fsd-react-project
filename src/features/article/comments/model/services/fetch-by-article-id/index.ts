import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkAPI } from 'app/providers/store-provider';
import { Comment } from 'entities/comment';

export const fetchByArticleId = createAsyncThunk<
    Comment[],
    number | undefined,
    ThunkAPI<string>
>('article/fetchByArticleId', async (articleId, thunkAPI) => {
    const { extra, rejectWithValue } = thunkAPI;

    try {
        if (!articleId) return rejectWithValue('Empty articleId');

        const response = await extra.api.get<Comment[]>(
            `/articles/${articleId}/comments`,
            {
                params: {
                    _expand: 'user',
                },
            },
        );

        if (!response.data) throw new Error();

        return response.data;
    } catch (e) {
        return rejectWithValue(`Error: ${e}`);
    }
});
