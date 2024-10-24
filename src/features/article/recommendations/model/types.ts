import { EntityState } from '@reduxjs/toolkit';
import { Article } from '@/entities/article';

type ArticleRecommendationsState = EntityState<Article, Article['id']> & {
    loading: boolean;
    error?: string;
};

export type { ArticleRecommendationsState };
