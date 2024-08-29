import type { State } from 'app/providers/StoreProvider';

export const selectLoginState = (state: State) => state?.login;
