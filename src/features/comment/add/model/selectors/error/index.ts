import { State } from 'app/providers/store-provider';

export const selectError = (state: State) => state?.addComment?.error;
