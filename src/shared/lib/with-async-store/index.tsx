import { Reducer } from '@reduxjs/toolkit';
import {
    StateKey,
    StoreWithReducerManager,
} from 'app/providers/store-provider';
import { ComponentType, useEffect } from 'react';
import { useDispatch, useStore } from 'react-redux';

type Reducers = Partial<Record<StateKey, Reducer>>;

type ReducerEntry = [StateKey, Reducer];

export function withAsyncStore<T>(
    Component: ComponentType<T>,
    reducers: Reducers,
) {
    return (props: T) => {
        const store = useStore() as StoreWithReducerManager;
        const dispatch = useDispatch();

        useEffect(() => {
            Object.entries(reducers).forEach(([k, r]: ReducerEntry) => {
                store.reducerManager.add(k, r);
                dispatch({ type: `@INIT ${k} reducer` });
            });

            return () => {
                Object.keys(reducers).forEach((k: StateKey) => {
                    store.reducerManager.remove(k);
                    dispatch({ type: `@DESTROY ${k} reducer` });
                });
            };
        }, []);

        return <Component {...props} />;
    };
}
