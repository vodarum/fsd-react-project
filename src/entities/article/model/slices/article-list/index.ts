import {
    createEntityAdapter,
    createSlice,
    PayloadAction,
} from '@reduxjs/toolkit';
import { State } from 'app/providers/store-provider';
import { ArticleViewTypes, ArticlesNumberPerPage } from '../../const';
import {
    Article,
    ArticleListState,
    ArticleSortField,
    ArticleType,
    ArticleViewType,
} from '../../types';
import { fetchList } from '../../services';
import { SortOrder } from 'shared/api';

const articleListAdapter = createEntityAdapter<Article>();

const initialState = articleListAdapter.getInitialState<ArticleListState>({
    ids: [],
    entities: {},
    loading: false,
    error: undefined,
    view: ArticleViewTypes.grid,
    page: 1,
    hasMore: true,
    _inited: false,
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
        setPage: (state: ArticleListState, action: PayloadAction<number>) => {
            state.page = action.payload;
        },
        setSearch: (state: ArticleListState, action: PayloadAction<string>) => {
            state.search = action.payload.trim();
        },
        setSortBy: (
            state: ArticleListState,
            action: PayloadAction<ArticleSortField>,
        ) => {
            state.sortBy = action.payload;
        },
        setSortOrder: (
            state: ArticleListState,
            action: PayloadAction<SortOrder>,
        ) => {
            state.sortOrder = action.payload;
        },
        setType: (
            state: ArticleListState,
            action: PayloadAction<ArticleType>,
        ) => {
            state.type = action.payload;
        },
        setInited: (state: ArticleListState) => {
            state._inited = true;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchList.pending, (state) => {
                state.error = undefined;
                state.loading = true;
            })
            .addCase(fetchList.fulfilled, (state, action) => {
                if (action.meta.arg?.replace) {
                    articleListAdapter.setAll(state, action.payload);
                } else {
                    articleListAdapter.addMany(state, action.payload);
                }

                state.loading = false;
                state.hasMore =
                    action.payload.length >= ArticlesNumberPerPage[state.view];
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
