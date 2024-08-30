import 'app/styles/index.scss';
import { StoryFn } from '@storybook/react';
import { State, StoreProvider } from 'app/providers/StoreProvider';

export const StoreDecorator = (state: Partial<State>) => (Story: StoryFn) => {
    return (
        <StoreProvider initialState={state as State}>
            <Story />
        </StoreProvider>
    );
};
