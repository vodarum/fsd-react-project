import { State } from '@/app/providers/store-provider';
import { ArticleSortFields } from '../../../const';

export const selectSortBy = (state: State) =>
    state?.articleList?.sortBy || ArticleSortFields.createdAt;
