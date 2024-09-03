import { Reducer } from '@reduxjs/toolkit';
import {
    StateKey,
    StoreWithReducerManager,
} from 'app/providers/store-provider';
import { ComponentType, useEffect } from 'react';
import { useDispatch, useStore } from 'react-redux';

type Reducers = Partial<Record<StateKey, Reducer>>;

export function withAsyncStore<T extends object>(
    Component: ComponentType<T>,
    reducers: Reducers,
) {
    return (props: T) => {
        const store = useStore() as StoreWithReducerManager;
        const dispatch = useDispatch();

        useEffect(() => {
            Object.entries(reducers).forEach(([k, r]) => {
                store.reducerManager.add(k as StateKey, r);
                dispatch({ type: `@INIT ${k} reducer` });
            });

            return () => {
                Object.keys(reducers).forEach((k) => {
                    store.reducerManager.remove(k as StateKey);
                    dispatch({ type: `@DESTROY ${k} reducer` });
                });
            };
        }, []);

        return <Component {...props} />;
    };
}
