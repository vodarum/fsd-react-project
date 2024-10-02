import type { State } from 'app/providers/store-provider';

export const selectUserData = (state: State) => state?.user?.data;
