import { configureStore } from '@reduxjs/toolkit';
import { ConfigureAppStoreOptions } from './types';
import { userReducer } from 'entities/user';
import { sessionMiddleware } from './session-middleware';
import { createReducerManager } from './reducer-manager';

export const configureAppStore = ({
    preloadedReducer,
    preloadedState,
}: ConfigureAppStoreOptions) => {
    const reducerManager = createReducerManager({
        ...preloadedReducer,
        user: userReducer,
    });
    const store = configureStore({
        reducer: reducerManager.reduce,
        devTools: __IS_DEV__,
        preloadedState,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware().concat(sessionMiddleware),
    });

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    store.reducerManager = reducerManager;

    return store;
};
