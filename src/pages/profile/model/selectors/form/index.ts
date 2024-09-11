import type { State } from 'app/providers/store-provider';

export const selectProfileForm = (state: State) => state?.profile?.form;
