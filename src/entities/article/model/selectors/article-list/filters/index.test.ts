import { mockInitialAppState, mockArticleListState } from '../../../__mocks__';
import { selectFilters } from '.';
import {
    ArticleSortFields,
    ArticleTypes,
    ArticleViewTypes,
} from '../../../const';
import type { ArticleListFilters } from '../../../types';
import { SortOrders } from '@/shared/api';

describe('selectFilters', () => {
    const defaultFiltersObject: ArticleListFilters = {
        view: ArticleViewTypes.grid,
        page: 1,
        search: '',
        sortBy: ArticleSortFields.createdAt,
        sortOrder: SortOrders.asc,
        type: ArticleTypes.all,
    };

    test(`returns filters object for initial state`, () => {
        expect(selectFilters(mockInitialAppState)).toEqual(
            defaultFiltersObject,
        );
    });

    test(`returns filters object for initial articleList state`, () => {
        expect(
            selectFilters({
                ...mockInitialAppState,
                articleList: mockArticleListState,
            }),
        ).toEqual(defaultFiltersObject);
    });

    test(`returns filters object`, () => {
        const filtersObject = {
            view: ArticleViewTypes.list,
            page: 2,
            search: 'test',
            sortBy: ArticleSortFields.title,
            sortOrder: SortOrders.desc,
            type: ArticleTypes.it,
        };

        expect(
            selectFilters({
                ...mockInitialAppState,
                articleList: {
                    ...mockArticleListState,
                    ...filtersObject,
                },
            }),
        ).toEqual(filtersObject);
    });
});
