import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { ArticleRecommendationsState } from '../types';
import { State } from 'app/providers/store-provider';
import { fetchRecommendations } from '../services';
import { Article } from 'entities/article';

const articleRecommendationsAdapter = createEntityAdapter<Article>();

const initialState =
    articleRecommendationsAdapter.getInitialState<ArticleRecommendationsState>({
        ids: [],
        entities: {},
        loading: false,
        error: undefined,
    });

const articleRecommendationsSelectors =
    articleRecommendationsAdapter.getSelectors<State>(
        (state) => state.articleRecommendations || initialState,
    );

const articleRecommendationsSlice = createSlice({
    name: 'articleRecommendations',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchRecommendations.pending, (state) => {
                state.error = undefined;
                state.loading = true;
            })
            .addCase(fetchRecommendations.fulfilled, (state, action) => {
                articleRecommendationsAdapter.setAll(state, action.payload);
                state.loading = false;
            })
            .addCase(fetchRecommendations.rejected, (state, action) => {
                state.error = action.payload;
                state.loading = false;
            });
    },
});

const { reducer: articleRecommendationsReducer } = articleRecommendationsSlice;

export { articleRecommendationsReducer, articleRecommendationsSelectors };
