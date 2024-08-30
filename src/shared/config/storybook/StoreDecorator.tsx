import 'app/styles/index.scss';
import { StoryFn } from '@storybook/react';
import { State, StoreProvider } from 'app/providers/StoreProvider';

// eslint-disable-next-line react/display-name
export const StoreDecorator = (state: State) => (Story: StoryFn) => {
    return (
        <StoreProvider initialState={state}>
            <Story />
        </StoreProvider>
    );
};
