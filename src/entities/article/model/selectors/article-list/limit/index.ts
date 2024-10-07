import { State } from 'app/providers/store-provider';

export const selectLimit = (state: State) => state?.articleList?.limit || 9;
