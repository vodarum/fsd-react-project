import type { State } from '@/app/providers/store-provider';

export const selectUserForm = (state: State) => state?.user?.form;
