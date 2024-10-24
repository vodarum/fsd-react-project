import { State } from '@/app/providers/store-provider';

export const selectInited = (state: State) => state?.articleList?._inited;
