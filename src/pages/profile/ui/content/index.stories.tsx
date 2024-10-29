import type { Meta, StoryObj } from '@storybook/react';
import { ProfilePageContent } from '.';
import { mockSession } from '@/entities/session/testing';
import { mockUsers } from '@/entities/user/testing';
import { mockUserState, userReducer } from '@/features/user/testing';
import { StoreDecorator } from '@/shared/config/storybook/store-decorator';

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
