import { createSearchParams } from "react-router-dom";
import { ArticleListFilters, ArticleSortField, ArticleSortFields, ArticleType, ArticleTypes } from "../model";
import { SortOrder, SortOrders } from "shared/api";

const parseArticleType = (v: string | null): ArticleType => {
    switch (v) {
        case ArticleTypes.all:
        case ArticleTypes.economics:
        case ArticleTypes.it:
        case ArticleTypes.science:
            return v;

        default:
            return ArticleTypes.all;
    }
};

const parseSortBy = (v: string | null): ArticleSortField => {
    switch (v) {
        case ArticleSortFields.createdAt:
        case ArticleSortFields.title:
        case ArticleSortFields.views:
            return v;

        default:
            return ArticleSortFields.createdAt;
    }
};

const parseSortOrder = (v: string | null): SortOrder => {
    switch (v) {
        case SortOrders.asc:
        case SortOrders.desc:
            return v;

        default:
            return SortOrders.asc;
    }
};

const parseFiltersToURLSearchParams = (
    filters: ArticleListFilters,
): URLSearchParams => {
    const { page, search, sortBy, sortOrder, type } = filters;
    const trimmedSearch = search?.trim();
    const queryType = type === ArticleTypes.all ? undefined : type;

    return createSearchParams({
        ...(sortOrder ? { order: sortOrder } : {}),
        ...(sortBy ? { sort: sortBy } : {}),
        ...(page > 1 ? { p: String(page) } : {}),
        ...(trimmedSearch ? { q: trimmedSearch } : {}),
        ...(queryType ? { type: queryType } : {}),
    });
};

export { parseArticleType, parseFiltersToURLSearchParams, parseSortBy, parseSortOrder };