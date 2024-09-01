import type { State } from 'app/providers/store-provider';

export const selectProfileState = (state: State) => state?.profile;
