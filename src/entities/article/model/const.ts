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

export { ArticleTypes, ArticleBlockTypes };
