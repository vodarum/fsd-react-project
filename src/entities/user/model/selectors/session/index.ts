import { State } from 'app/providers/store-provider';

export const selectSession = (state: State) => state?.user?.session;
