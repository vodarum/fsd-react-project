import { configureStore, Reducer } from '@reduxjs/toolkit';
import { ConfigureAppStoreOptions, State } from './types';
import { userReducer } from 'entities/user';
import { sessionMiddleware } from './session-middleware';
import { createReducerManager } from './reducer-manager';
import { $api } from 'shared/api';

/* eslint-disable @typescript-eslint/ban-ts-comment */
export const configureAppStore = ({
    preloadedReducer,
    preloadedState,
}: ConfigureAppStoreOptions) => {
    const reducerManager = createReducerManager({
        ...preloadedReducer,
        user: userReducer,
    });
    const store = configureStore({
        reducer: reducerManager.reduce as Reducer<State>,
        devTools: __IS_DEV__,
        preloadedState,
        // @ts-ignore
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware({
                thunk: {
                    extraArgument: {
                        api: $api,
                    },
                },
            }).concat(sessionMiddleware),
    });

    // @ts-ignore
    store.reducerManager = reducerManager;

    return store;
};
/* eslint-enable @typescript-eslint/ban-ts-comment */
