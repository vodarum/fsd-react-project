import { User } from 'features/user'; // TODO: исправить импорт features -> entities
import { ArticleBlockTypes, ArticleTypes, ArticleViewTypes } from './const';
import { EntityState } from '@reduxjs/toolkit';

type ArticleType = (typeof ArticleTypes)[keyof typeof ArticleTypes];

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

type ArticleListState = EntityState<Article, Article['id']> & {
    loading: boolean;
    error?: string;
    view: ArticleViewType;
    page: number;
    limit?: number;
    hasMore: boolean;
    _inited: boolean;
};

export {
    Article,
    ArticleBlock,
    ArticleBlockCode,
    ArticleBlockImage,
    ArticleBlockText,
    ArticleListState,
    ArticleState,
    ArticleViewType,
};
