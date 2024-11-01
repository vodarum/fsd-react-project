import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkAPI } from '@/app/providers/store-provider';
import {
    Article,
    ArticlesNumberPerPage,
    ArticleViewTypes,
} from '@/entities/article';

export const fetchRecommendations = createAsyncThunk<
    Article[],
    number,
    ThunkAPI<string>
>('article/fetchRecommendations', async (articleId, thunkAPI) => {
    const { extra, rejectWithValue } = thunkAPI;

    try {
        const response = await extra.api.get<Article[]>(`/articles`, {
            params: {
                _expand: 'user',
                _limit: ArticlesNumberPerPage[ArticleViewTypes.slider],
                id_ne: articleId,
            },
        });

        if (!response.data) throw new Error();

        return response.data;
    } catch (e) {
        return rejectWithValue(`Error: ${e}`);
    }
});
