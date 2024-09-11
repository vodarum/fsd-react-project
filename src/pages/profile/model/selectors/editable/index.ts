import { State } from 'app/providers/store-provider';

export const selectEditable = (state: State) =>
    state?.profile?.editable || false;
