import { Reducer } from '@reduxjs/toolkit';
import {
    State,
    StateKey,
    StoreWithReducerManager,
} from '@/app/providers/store-provider';
import { useEffect } from 'react';
import { useDispatch, useStore } from 'react-redux';

type Reducers = {
    [name in StateKey]?: Reducer<NonNullable<State[name]>>;
};

export const useAsyncStore = (
    reducers: Reducers,
    removeOnUnmount: boolean = true, // TODO: флаг должен передаваться на конкретный редуктор
) => {
    const store = useStore() as StoreWithReducerManager;
    const dispatch = useDispatch();

    useEffect(() => {
        const reducerMap = store.reducerManager.getReducerMap();

        Object.entries(reducers).forEach(([k, r]) => {
            if (reducerMap[k as StateKey]) return;

            store.reducerManager.add(k as StateKey, r);
            dispatch({ type: `@INIT ${k} reducer` });
        });

        return () => {
            if (!removeOnUnmount) return;

            Object.keys(reducers).forEach((k) => {
                store.reducerManager.remove(k as StateKey);
                dispatch({ type: `@DESTROY ${k} reducer` });
            });
        };
    }, []);
};
