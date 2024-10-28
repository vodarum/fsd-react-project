import type { State } from '@/app/providers/store-provider';
import type { Session, SessionState } from '../model';

const mockSession: Session = {
    token: 'qwerty123',
    userId: 1,
};

const mockSessionState: SessionState = {
    data: undefined,
};

const mockInitialAppState: State = {
    session: mockSessionState,
} as State;

export { mockSession, mockSessionState, mockInitialAppState };
