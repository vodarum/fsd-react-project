import type { State } from 'app/providers/store-provider';
import type { Session, UserState } from '../types';

const mockSession: Session = {
    userId: 1,
    token: 'qwerty123',
};

const mockUserState: UserState = {
    session: undefined,
};

const mockInitialAppState: State = {
    user: mockUserState,
} as State;

export { mockSession, mockUserState, mockInitialAppState };
