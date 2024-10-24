import '@/app/styles/index.scss';
import { StoryFn } from '@storybook/react';
import {
    State,
    StoreProvider,
    type ConfigureAppStoreOptions,
} from '@/app/providers/store-provider';
import { ReducersMapObject } from '@reduxjs/toolkit';

type StoreDecoratorOptions = DeepPartial<ConfigureAppStoreOptions>;

export const StoreDecorator =
    (options: StoreDecoratorOptions) => (Story: StoryFn) => {
        const { preloadedReducer, preloadedState } = options;

        return (
            <StoreProvider
                preloadedReducer={preloadedReducer as ReducersMapObject<State>}
                preloadedState={preloadedState as State}
            >
                <Story />
            </StoreProvider>
        );
    };
