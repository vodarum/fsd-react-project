import { type State } from '@/app/providers/store-provider';

export const selectUserState = (state: State) => state?.user;
