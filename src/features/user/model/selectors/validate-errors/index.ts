import { State } from '@/app/providers/store-provider';

export const selectValidateErrors = (state: State) =>
    state?.user?.validateErrors;
