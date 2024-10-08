import { configureStore, Reducer } from '@reduxjs/toolkit';
import { sessionReducer } from 'entities/session';
import { $api } from 'shared/api';
import { scrollPositionReducer } from 'widgets/section';
import { createReducerManager } from './reducer-manager';
import { sessionMiddleware } from './session-middleware';
import { ConfigureAppStoreOptions, State } from './types';

export const configureAppStore = ({
    preloadedReducer,
    preloadedState,
}: ConfigureAppStoreOptions) => {
    const reducerManager = createReducerManager({
        ...preloadedReducer,
        session: sessionReducer,
        scrollPosition: scrollPositionReducer,
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
