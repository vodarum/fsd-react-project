import { State } from '@/app/providers/store-provider';

export const selectUsername = (state: State) => state?.login?.username || '';
