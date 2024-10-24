import { State } from '@/app/providers/store-provider';

export const selectLoading = (state: State) =>
    state?.articleComments?.loading || false;
