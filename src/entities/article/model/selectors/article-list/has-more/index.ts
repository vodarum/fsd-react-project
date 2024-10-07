import { State } from 'app/providers/store-provider';

export const selectHasMore = (state: State) => state?.articleList?.hasMore;
