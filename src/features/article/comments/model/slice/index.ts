import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { fetchByArticleId } from '../services';
import { Comment } from 'entities/comment/model';
import { ArticleCommentsState } from '../types';
import { State } from 'app/providers/store-provider';

const articleCommentsAdapter = createEntityAdapter<Comment>();

const initialState =
    articleCommentsAdapter.getInitialState<ArticleCommentsState>({
        ids: [],
        entities: {},
        loading: false,
        error: undefined,
    });

const articleCommentsSelectors = articleCommentsAdapter.getSelectors<State>(
    (state) => state.articleComments || initialState,
);

const articleCommentsSlice = createSlice({
    name: 'articleComments',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchByArticleId.pending, (state) => {
                state.error = undefined;
                state.loading = true;
            })
            .addCase(fetchByArticleId.fulfilled, (state, action) => {
                articleCommentsAdapter.setAll(state, action.payload);
                state.loading = false;
            })
            .addCase(fetchByArticleId.rejected, (state, action) => {
                state.error = action.payload;
                state.loading = false;
            });
    },
});

const { actions: articleCommentsActions, reducer: articleCommentsReducer } =
    articleCommentsSlice;

export {
    articleCommentsActions,
    articleCommentsReducer,
    articleCommentsSelectors,
};
