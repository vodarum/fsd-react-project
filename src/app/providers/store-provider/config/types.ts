import {
    Action,
    EnhancedStore,
    Reducer,
    ReducersMapObject,
} from '@reduxjs/toolkit';
import { ProfileState } from 'entities/profile';
import { UserState } from 'entities/user';
import { LoginState } from 'features/login';
import { configureAppStore } from './store';

type State = {
    user: UserState;
    login?: LoginState;
    profile?: ProfileState;
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

type ConfigureAppStoreOptions = Partial<{
    preloadedReducer: Partial<ReducersMapObject<State>>;
    preloadedState: State;
}>;

type AppDispatch = ReturnType<typeof configureAppStore>['dispatch'];

export {
    AppDispatch,
    ConfigureAppStoreOptions,
    ReducerManager,
    State,
    StateKey,
    StoreWithReducerManager,
};
