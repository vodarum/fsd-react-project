import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkAPI } from 'app/providers/store-provider';
import {
    articleListActions,
    articleListSelectors,
    fetchList,
    parseArticleType,
    parseSortBy,
    parseSortOrder,
} from 'entities/article';

export const init = createAsyncThunk<void, URLSearchParams, ThunkAPI<string>>(
    'articles/init',
    async (searchParams, thunkAPI) => {
        const { dispatch, getState } = thunkAPI;

        const inited = articleListSelectors.selectInited(getState());

        if (inited) return;

        const order = searchParams.get('order');
        const sort = searchParams.get('sort');
        const page = searchParams.get('p');
        const search = searchParams.get('q');
        const type = searchParams.get('type');

        dispatch(articleListActions.setSortOrder(parseSortOrder(order)));
        dispatch(articleListActions.setSortBy(parseSortBy(sort)));
        dispatch(articleListActions.setPage(Number(page) || 1));
        dispatch(articleListActions.setSearch(search ? search.trim() : ''));
        dispatch(articleListActions.setType(parseArticleType(type)));
        dispatch(articleListActions.setInited());
        dispatch(fetchList());
    },
);
