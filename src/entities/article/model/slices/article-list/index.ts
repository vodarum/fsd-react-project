import {
    createEntityAdapter,
    createSlice,
    PayloadAction,
} from '@reduxjs/toolkit';
import { Article, ArticleListState, ArticleViewType } from '../../types';
import { fetchList } from '../../services';
import { State } from 'app/providers/store-provider';
import { ArticleViewTypes } from '../../const';

const articleListAdapter = createEntityAdapter<Article>();

const initialState = articleListAdapter.getInitialState<ArticleListState>({
    ids: [],
    entities: {},
    loading: false,
    error: undefined,
    view: ArticleViewTypes.grid,
});

const articleListSelectors = articleListAdapter.getSelectors<State>(
    (state) => state.articleList || initialState,
);

const articleListSlice = createSlice({
    name: 'articleList',
    initialState,
    reducers: {
        setView: (
            state: ArticleListState,
            action: PayloadAction<ArticleViewType>,
        ) => {
            state.view = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchList.pending, (state) => {
                state.error = undefined;
                state.loading = true;
            })
            .addCase(fetchList.fulfilled, (state, action) => {
                articleListAdapter.setAll(state, action.payload);
                state.loading = false;
            })
            .addCase(fetchList.rejected, (state, action) => {
                state.error = action.payload;
                state.loading = false;
            });
    },
});

const { actions: articleListActions, reducer: articleListReducer } =
    articleListSlice;

export { articleListActions, articleListReducer, articleListSelectors };
