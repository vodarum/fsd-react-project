import { State } from 'app/providers/store-provider';

export const selectValidateErrors = (state: State) => state?.profile?.validateErrors;
