import type { Meta, StoryObj } from '@storybook/react';
import { ProfilePageContent } from '.';
import { StoreDecorator } from 'shared/config/storybook/store-decorator';
import { mockSession } from 'entities/session';
import { mockUsers, mockUserState, userReducer } from 'features/user';

const meta = {
    title: 'pages/Profile/ProfilePageContent',
    component: ProfilePageContent,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    decorators: [StoreDecorator({})],
} satisfies Meta<typeof ProfilePageContent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithLoading: Story = {
    decorators: [
        StoreDecorator({
            preloadedReducer: {
                user: userReducer,
            },
            preloadedState: {
                user: {
                    ...mockUserState,
                    loading: true,
                },
                session: {
                    data: mockSession,
                },
            },
        }),
    ],
};

export const WithError: Story = {
    decorators: [
        StoreDecorator({
            preloadedReducer: {
                user: userReducer,
            },
            preloadedState: {
                user: {
                    ...mockUserState,
                    error: 'Неизвестная ошибка',
                },
                session: {
                    data: mockSession,
                },
            },
        }),
    ],
};

export const WithEditableForm: Story = {
    decorators: [
        StoreDecorator({
            preloadedReducer: {
                user: userReducer,
            },
            preloadedState: {
                user: {
                    ...mockUserState,
                    data: mockUsers[0],
                    form: mockUsers[0],
                },
                session: {
                    data: mockSession,
                },
            },
        }),
    ],
};
