import { State } from '@/app/providers/store-provider';

export const selectSearch = (state: State) => state?.articleList?.search ?? '';
