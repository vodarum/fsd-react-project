import { EntityState } from '@reduxjs/toolkit';
import { Comment } from 'entities/comment';

type ArticleCommentsState = EntityState<Comment, Comment['id']> & {
    loading: boolean;
    error?: string;
};

export type { ArticleCommentsState };
