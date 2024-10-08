import { State } from 'app/providers/store-provider';

export const selectData = (state: State) => state?.scrollPosition.data;
