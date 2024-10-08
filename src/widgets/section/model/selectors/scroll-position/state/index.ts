import type { State } from 'app/providers/store-provider';

export const selectState = (state: State) => state?.scrollPosition;
