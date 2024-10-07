import {
    createEntityAdapter,
    createSlice,
    PayloadAction,
} from '@reduxjs/toolkit';
import { State } from 'app/providers/store-provider';
import { ArticleViewTypes, ArticlesNumberPerPage } from '../../const';
import { Article, ArticleListState, ArticleViewType } from '../../types';
import { fetchList } from '../../services';

const articleListAdapter = createEntityAdapter<Article>();

const initialState = articleListAdapter.getInitialState<ArticleListState>({
    ids: [],
    entities: {},
    loading: false,
    error: undefined,
    view: ArticleViewTypes.grid,
    page: 1,
    hasMore: true,
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
            state.limit = ArticlesNumberPerPage[state.view];
        },
        setPage: (state: ArticleListState, action: PayloadAction<number>) => {
            state.page = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchList.pending, (state) => {
                state.error = undefined;
                state.loading = true;
            })
            .addCase(fetchList.fulfilled, (state, action) => {
                articleListAdapter.addMany(state, action.payload);
                state.loading = false;
                state.hasMore = !!action.payload.length;
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
