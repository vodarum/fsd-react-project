import type { State } from '@/app/providers/store-provider';
import type { UserState } from '../types';

const mockUserState: UserState = {
    data: undefined,
    form: undefined,
    loading: false,
    editable: false,
};

const mockInitialAppState: State = {
    user: undefined,
} as State;

export { mockUserState, mockInitialAppState };
