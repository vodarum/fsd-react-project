import { State } from 'app/providers/store-provider';

export const selectValueByPath = (state: State, path: string) =>
    state?.scrollPosition.data[path] || 0;
