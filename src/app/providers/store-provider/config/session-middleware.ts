import { Dispatch, Action, isFulfilled, isAnyOf } from '@reduxjs/toolkit';
import { userActions } from 'entities/user';
import { loginByUsername } from 'features/login';
import { APP_SESSION_LS_KEY } from 'shared/config/const';

const isLogin = isFulfilled(loginByUsername);
const isLogout = isAnyOf(userActions.resetSession);

export const sessionMiddleware = () => (next: Dispatch) => (action: Action) => {
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
