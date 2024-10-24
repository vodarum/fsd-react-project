import type { State } from '@/app/providers/store-provider';

export const selectLoginState = (state: State) => state?.login;
