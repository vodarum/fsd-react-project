const ArticleTypes = {
    all: 'All',
    it: 'IT',
    science: 'Science',
    economics: 'Economics',
} as const;

const ArticleBlockTypes = {
    code: 'code',
    image: 'image',
    text: 'text',
} as const;

const ArticleViewTypes = {
    grid: 'grid',
    list: 'list',
    slider: 'slider',
} as const;

const ArticlesNumberPerPage = {
    grid: 9,
    list: 3,
    slider: 4,
} as const;

const ArticleSortFields = {
    title: 'title',
    views: 'views',
    createdAt: 'createdAt',
} as const;

export {
    ArticleTypes,
    ArticleBlockTypes,
    ArticleSortFields,
    ArticleViewTypes,
    ArticlesNumberPerPage,
};
