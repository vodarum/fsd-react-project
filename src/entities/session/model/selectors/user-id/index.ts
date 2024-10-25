import type { State } from '@/app/providers/store-provider';

export const selectSessionUserId = (state: State) => state.session.data?.userId;
