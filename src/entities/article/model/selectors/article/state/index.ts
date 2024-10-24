import type { State } from '@/app/providers/store-provider';

export const selectArticleState = (state: State) => state?.article;
