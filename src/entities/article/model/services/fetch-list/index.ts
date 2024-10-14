import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkAPI } from 'app/providers/store-provider';
import { ArticlesNumberPerPage } from '../../const';
import { parseFiltersToURLSearchParams } from '../../../lib';
import { articleListSelectors } from '../../selectors';
import { Article } from '../../types';

type FetchListOptions =
    | {
          replace?: boolean;
      }
    | undefined;

export const fetchList = createAsyncThunk<
    Article[],
    FetchListOptions,
    ThunkAPI<string>
>('article/fetchList', async (_, thunkAPI) => {
    const { extra, getState, rejectWithValue } = thunkAPI;
    const filters = articleListSelectors.selectFilters(getState());
    const urlSearchParams = parseFiltersToURLSearchParams(filters);

    window.history.pushState(null, '', `?${urlSearchParams.toString()}`);

    try {
        const response = await extra.api.get<Article[]>('/articles', {
            params: {
                _expand: 'user',
                _limit: ArticlesNumberPerPage[filters.view],
                _page: filters.page,
                _sort: filters.sortBy,
                _order: filters.sortOrder,
                ...(urlSearchParams.get('q')
                    ? { q: urlSearchParams.get('q') }
                    : {}),
                ...(urlSearchParams.get('type')
                    ? { type_like: urlSearchParams.get('type') }
                    : {}),
            },
        });

        if (!response.data) throw new Error();

        return response.data;
    } catch (e) {
        return rejectWithValue(`Error: ${e}`);
    }
});
