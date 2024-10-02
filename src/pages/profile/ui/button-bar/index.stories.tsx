import type { Meta, StoryObj } from '@storybook/react';
import { ProfileButtonBar } from '.';
import { StoreDecorator } from 'shared/config/storybook/store-decorator';
import { mockUserState, userReducer } from 'features/user';

const meta = {
    title: 'pages/Profile/ProfileButtonBar',
    component: ProfileButtonBar,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    decorators: [StoreDecorator({})],
} satisfies Meta<typeof ProfileButtonBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const NotEditable: Story = {
    decorators: [
        StoreDecorator({
            preloadedReducer: {
                user: userReducer,
            },
            preloadedState: {
                user: mockUserState,
            },
        }),
    ],
};

export const Editable: Story = {
    decorators: [
        StoreDecorator({
            preloadedReducer: {
                user: userReducer,
            },
            preloadedState: {
                user: {
                    ...mockUserState,
                    editable: true,
                },
            },
        }),
    ],
};
