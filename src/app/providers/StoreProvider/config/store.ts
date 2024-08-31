import { configureStore, ReducersMapObject } from '@reduxjs/toolkit';
import { State } from './types';
import { userReducer } from 'entities/user';
import { sessionMiddleware } from './session-middleware';
import { createReducerManager } from './reducer-manager';

export const configureAppStore = (initialState?: State) => {
    const rootReducer: ReducersMapObject<State> = {
        user: userReducer,
    };

    const reducerManager = createReducerManager(rootReducer);

    const store = configureStore({
        reducer: reducerManager.reduce,
        devTools: __IS_DEV__,
        preloadedState: initialState,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware().concat(sessionMiddleware),
    });

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    store.reducerManager = reducerManager;

    return store;
};
