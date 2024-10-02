import { State } from 'app/providers/store-provider';

export const selectEditable = (state: State) => state?.user?.editable || false;
