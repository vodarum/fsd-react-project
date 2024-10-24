import { State } from '@/app/providers/store-provider';

export const selectSessionData = (state: State) => state.session.data;
