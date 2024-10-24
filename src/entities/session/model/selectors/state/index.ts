import type { State } from '@/app/providers/store-provider';

export const selectSessionState = (state: State) => state?.session;
