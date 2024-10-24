import type { State } from '@/app/providers/store-provider';
import type { LoginState } from '../types';

const mockLoginState: LoginState = {
    username: 'ivan123',
    password: 'qwerty123',
    loading: false,
};

const mockInitialAppState: State = {} as State;

const mockAppState: State = {
    login: mockLoginState,
} as State;

export { mockLoginState, mockInitialAppState, mockAppState };
