import { EntityState } from '@reduxjs/toolkit';
import { User } from '@/entities/user/@x/article';
import {
    ArticleBlockTypes,
    ArticleTypes,
    ArticleSortFields,
    ArticleViewTypes,
} from './const';
import { SortOrder } from '@/shared/api';

type ArticleType = (typeof ArticleTypes)[keyof typeof ArticleTypes];

type ArticleSortField =
    (typeof ArticleSortFields)[keyof typeof ArticleSortFields];

type ArticleViewType = (typeof ArticleViewTypes)[keyof typeof ArticleViewTypes];

type ArticleBlockType =
    (typeof ArticleBlockTypes)[keyof typeof ArticleBlockTypes];

type ArticleBlockBase = {
    id: number;
    type: ArticleBlockType;
};

type ArticleBlockCode = ArticleBlockBase & {
    type: typeof ArticleBlockTypes.code;
    code: string;
};

type ArticleBlockImage = ArticleBlockBase & {
    type: typeof ArticleBlockTypes.image;
    src: string;
    title: string;
};

type ArticleBlockText = ArticleBlockBase & {
    type: typeof ArticleBlockTypes.text;
    title: string;
    paragraphs: string[];
};

type ArticleBlock = ArticleBlockCode | ArticleBlockImage | ArticleBlockText;

type Article = {
    id: number;
    title: string;
    subtitle: string;
    img: string;
    views: number;
    createdAt: string;
    type: ArticleType[];
    blocks: (ArticleBlockCode | ArticleBlockImage | ArticleBlockText)[];
    userId: number;
    user: User;
};

type ArticleState = {
    data?: Article;
    loading: boolean;
    error?: string;
};

type ArticleListFilters = {
    view: ArticleViewType; // TODO: вынести в ArticleListFilters
    page: number;
    search?: string; // TODO: сделать обязательными
    type?: ArticleType; // TODO: сделать обязательными
    sortBy?: ArticleSortField; // TODO: сделать обязательными
    sortOrder?: SortOrder; // TODO: сделать обязательными
};

type ArticleListState = EntityState<Article, Article['id']> & {
    loading: boolean;
    error?: string;
    hasMore: boolean;
    // page: number;
    // search?: string;
    // type?: ArticleType;
    // sortBy?: ArticleSortField;
    // sortOrder?: SortOrder;
    _inited: boolean;
} & ArticleListFilters;

export type {
    Article,
    ArticleBlock,
    ArticleBlockCode,
    ArticleBlockImage,
    ArticleBlockText,
    ArticleListFilters,
    ArticleListState,
    ArticleSortField,
    ArticleState,
    ArticleType,
    ArticleViewType,
};
