import {
    EnhancedStore,
    Reducer,
    ReducersMapObject,
    UnknownAction,
} from '@reduxjs/toolkit';
import { ProfileState } from 'pages/profile';
import { UserState } from 'entities/user';
import { LoginState } from 'features/login';
import { configureAppStore } from './store';
import { AxiosInstance } from 'axios';

type State = {
    user: UserState;
    login?: LoginState;
    profile?: ProfileState;
};

type StateKey = keyof State;

type ReducerManager = {
    getReducerMap: () => ReducersMapObject<State>;
    reduce: (state: State, action: UnknownAction) => State;
    add: (key: StateKey, reducer: Reducer) => void;
    remove: (key: StateKey) => void;
};

type StoreWithReducerManager = EnhancedStore<State> & {
    reducerManager: ReducerManager;
};

type ConfigureAppStoreOptions = Partial<{
    preloadedReducer: ReducersMapObject<State>;
    preloadedState: State;
}>;

type AppDispatch = ReturnType<typeof configureAppStore>['dispatch'];

type ThunkExtra = {
    api: AxiosInstance;
};

type ThunkAPI<T> = {
    rejectValue: T;
    extra: ThunkExtra;
    state: State;
};

export {
    AppDispatch,
    ConfigureAppStoreOptions,
    ReducerManager,
    State,
    StateKey,
    StoreWithReducerManager,
    ThunkAPI,
};
