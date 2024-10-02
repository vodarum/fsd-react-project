import { configureStore, Reducer } from '@reduxjs/toolkit';
import { ConfigureAppStoreOptions, State } from './types';
import { sessionReducer } from 'entities/session';
import { sessionMiddleware } from './session-middleware';
import { createReducerManager } from './reducer-manager';
import { $api } from 'shared/api';

export const configureAppStore = ({
    preloadedReducer,
    preloadedState,
}: ConfigureAppStoreOptions) => {
    const reducerManager = createReducerManager({
        ...preloadedReducer,
        session: sessionReducer,
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
