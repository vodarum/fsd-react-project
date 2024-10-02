import {
    EnhancedStore,
    Reducer,
    ReducersMapObject,
    UnknownAction,
} from '@reduxjs/toolkit';
import { UserState } from 'features/user';
import { LoginState } from 'features/login';
import { configureAppStore } from './store';
import { AxiosInstance } from 'axios';
import { ArticleState } from 'entities/article';
import { SessionState } from 'entities/session';
import { ArticleCommentsState } from 'features/article';

type State = {
    session: SessionState;
    user?: UserState;
    login?: LoginState;
    article?: ArticleState;
    articleComments?: ArticleCommentsState;
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
