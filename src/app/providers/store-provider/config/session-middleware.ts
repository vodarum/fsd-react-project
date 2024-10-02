import {
    Dispatch,
    isFulfilled,
    isAnyOf,
    UnknownAction,
} from '@reduxjs/toolkit';
import { sessionActions } from 'entities/session';
import { loginByUsername } from 'features/login';
import { APP_SESSION_LS_KEY } from 'shared/api';

const isLogin = isFulfilled(loginByUsername);
const isLogout = isAnyOf(sessionActions.resetData);

export const sessionMiddleware =
    () => (next: Dispatch) => (action: UnknownAction) => {
        if (isLogin(action)) {
            localStorage.setItem(
                APP_SESSION_LS_KEY,
                JSON.stringify(action.payload),
            );
        } else if (isLogout(action)) {
            localStorage.removeItem(APP_SESSION_LS_KEY);
        }

        return next(action);
    };
