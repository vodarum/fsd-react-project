import { createSelector } from '@reduxjs/toolkit';
import { ArticleListFilters } from '../../../types';
import { selectPage } from '../page';
import { selectSearch } from '../search';
import { selectSortBy } from '../sort-by';
import { selectSortOrder } from '../sort-order';
import { selectType } from '../type';
import { selectView } from '../view';

export const selectFilters = createSelector(
    [
        selectView,
        selectPage,
        selectSearch,
        selectSortBy,
        selectSortOrder,
        selectType,
    ],
    (view, page, search, sortBy, sortOrder, type): ArticleListFilters => ({
        view,
        page,
        search,
        sortBy,
        sortOrder,
        type,
    }),
);
