import { State } from 'app/providers/store-provider';

export const selectPage = (state: State) => state?.articleList?.page || 1;
