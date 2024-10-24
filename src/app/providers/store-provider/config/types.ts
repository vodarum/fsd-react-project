import {
    EnhancedStore,
    Reducer,
    ReducersMapObject,
    UnknownAction,
} from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { ArticleListState, ArticleState } from '@/entities/article';
import { SessionState } from '@/entities/session';
import { ArticleCommentsState } from '@/features/article';
import { AddCommentState } from '@/features/comment';
import { LoginState } from '@/features/login';
import { UserState } from '@/features/user';
import { ScrollPositionState } from '@/widgets/section';
import { configureAppStore } from './store';
import { ArticleRecommendationsState } from '@/features/article';
import { $rtkApi } from '@/shared/api';

type State = {
    [$rtkApi.reducerPath]: ReturnType<typeof $rtkApi.reducer>;
    session: SessionState;
    scrollPosition: ScrollPositionState;
    user?: UserState;
    login?: LoginState;
    article?: ArticleState;
    articleComments?: ArticleCommentsState;
    articleRecommendations?: ArticleRecommendationsState;
    addComment?: AddCommentState;
    articleList?: ArticleListState;
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

export type {
    AppDispatch,
    ConfigureAppStoreOptions,
    ReducerManager,
    State,
    StateKey,
    StoreWithReducerManager,
    ThunkAPI,
};
