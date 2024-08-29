import { UserState } from 'entities/user';
import { LoginState } from 'features/login';

export type State = {
    user?: UserState;
    login?: LoginState;
};
