import type { State } from '@/app/providers/store-provider';

export const selectText = (state: State) => state?.addComment?.text || '';
