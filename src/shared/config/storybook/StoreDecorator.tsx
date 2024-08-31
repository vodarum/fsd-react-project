import 'app/styles/index.scss';
import { StoryFn } from '@storybook/react';
import {
    State,
    StoreProvider,
    type ConfigureAppStoreOptions,
} from 'app/providers/StoreProvider';

type StoreDecoratorOptions = Omit<
    ConfigureAppStoreOptions,
    'preloadedState'
> & {
    preloadedState?: Partial<State>;
};

export const StoreDecorator =
    (options: StoreDecoratorOptions) => (Story: StoryFn) => {
        const { preloadedReducer, preloadedState } = options;

        return (
            <StoreProvider
                preloadedReducer={preloadedReducer}
                preloadedState={preloadedState as State}
            >
                <Story />
            </StoreProvider>
        );
    };
