import {
    configureStore,
    ReducersMapObject,
    Dispatch,
    Action,
    isFulfilled,
    isAnyOf,
} from '@reduxjs/toolkit';
import { State } from './types';
import { userActions, userReducer } from 'entities/user';
import { loginByUsername } from 'features/login/model/services/login-by-username';
import { APP_SESSION_LS_KEY } from 'shared/config/const';
import { useDispatch } from 'react-redux';
import { loginReducer } from 'features/login/model';

const isLogin = isFulfilled(loginByUsername);
const isLogout = isAnyOf(userActions.resetSession);

const sessionMiddleware = () => (next: Dispatch) => (action: Action) => {
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

const rootReducer: ReducersMapObject<State> = {
    user: userReducer,
    login: loginReducer,
};

export const configureAppStore = (initialState?: State) =>
    configureStore({
        reducer: rootReducer,
        devTools: __IS_DEV__,
        preloadedState: initialState,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware().concat(sessionMiddleware),
    });

export const useAppDispatch = () =>
    useDispatch<ReturnType<typeof configureAppStore>['dispatch']>();
