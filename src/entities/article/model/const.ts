const ArticleTypes = {
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
} as const;

export { ArticleTypes, ArticleBlockTypes, ArticleViewTypes };
