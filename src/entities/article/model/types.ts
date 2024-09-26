import { ArticleBlockTypes, ArticleTypes } from './const';

type ArticleType = (typeof ArticleTypes)[keyof typeof ArticleTypes];

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
};

type ArticleState = {
    data?: Article;
    loading: boolean;
    error?: string;
};

export {
    Article,
    ArticleBlock,
    ArticleBlockCode,
    ArticleBlockImage,
    ArticleBlockText,
    ArticleState,
};
