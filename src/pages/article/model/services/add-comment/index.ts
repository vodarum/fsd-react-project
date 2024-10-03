import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkAPI } from 'app/providers/store-provider';
import { articleSelectors } from 'entities/article';
import { Comment } from 'entities/comment';
import { sessionSelectors } from 'entities/session';
import { fetchByArticleId } from 'features/article';

export const addComment = createAsyncThunk<Comment, string, ThunkAPI<string>>(
    'article/addComment',
    async (text, thunkAPI) => {
        const { dispatch, extra, getState, rejectWithValue } = thunkAPI;

        try {
            const article = articleSelectors.selectArticleData(getState());
            const session = sessionSelectors.selectSessionData(getState());

            if (!text || !article?.id || !session?.userId)
                return rejectWithValue('Empty data');

            const response = await extra.api.post<Comment>(
                `/articles/${article.id}/comments`,
                {
                    articleId: article.id,
                    text,
                    userId: session.userId,
                },
            );

            if (!response.data) throw new Error();

            dispatch(fetchByArticleId(article.id));

            return response.data;
        } catch (e) {
            return rejectWithValue(`Error: ${e}`);
        }
    },
);
