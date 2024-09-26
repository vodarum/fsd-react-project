import type { State } from 'app/providers/store-provider';

export const selectArticleData = (state: State) => state?.article?.data;
