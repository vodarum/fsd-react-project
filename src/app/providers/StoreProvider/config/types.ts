import {
    Action,
    EnhancedStore,
    Reducer,
    ReducersMapObject,
} from '@reduxjs/toolkit';
import { UserState } from 'entities/user';
import { LoginState } from 'features/login';

type State = {
    user: UserState;
    login?: LoginState;
};

type StateKey = keyof State;

type ReducerManager = {
    getReducerMap: () => ReducersMapObject<State>;
    reduce: (state: State, action: Action) => State;
    add: (key: StateKey, reducer: Reducer) => void;
    remove: (key: StateKey) => void;
};

type StoreWithReducerManager = EnhancedStore<State> & {
    reducerManager: ReducerManager;
};

export { ReducerManager, State, StateKey, StoreWithReducerManager };
