import {
    combineReducers,
    Reducer,
    ReducersMapObject,
    UnknownAction,
} from '@reduxjs/toolkit';
import type { ReducerManager, State, StateKey } from './types';

export const createReducerManager = (
    initialReducers: ReducersMapObject<State>,
): ReducerManager => {
    const reducers = { ...initialReducers };
    let combinedReducer = combineReducers(reducers);
    let keysToRemove: StateKey[] = [];

    return {
        getReducerMap: () => reducers,
        reduce: (state: State, action: UnknownAction) => {
            if (keysToRemove.length > 0) {
                state = { ...state };

                keysToRemove.forEach((key) => {
                    delete state[key];
                });

                keysToRemove = [];
            }

            // @ts-ignore
            return combinedReducer(state, action);
        },
        add: (key: StateKey, reducer: Reducer) => {
            if (!key || reducers[key]) return;
            reducers[key] = reducer;
            combinedReducer = combineReducers(reducers);
        },
        remove: (key) => {
            if (!key || !reducers[key]) return;
            delete reducers[key];
            keysToRemove.push(key);
            combinedReducer = combineReducers(reducers);
        },
    };
};
