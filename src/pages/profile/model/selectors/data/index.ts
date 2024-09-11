import type { State } from 'app/providers/store-provider';

export const selectProfileData = (state: State) => state?.profile?.data;