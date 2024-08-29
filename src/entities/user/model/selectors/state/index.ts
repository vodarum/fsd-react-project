import type { State } from 'app/providers/StoreProvider';

export const selectUserState = (state: State) => state?.user;
