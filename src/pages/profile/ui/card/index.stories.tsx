import type { Meta, StoryObj } from '@storybook/react';
import { ProfileCard } from '.';
import { mockUsers } from '@/entities/user/testing';
import {
    mockUserState,
    userReducer,
    ValidateUserErrors,
} from '@/features/user/testing';
import { StoreDecorator } from '@/shared/config/storybook/store-decorator';

const meta = {
    title: 'pages/Profile/ProfileCard',
    component: ProfileCard,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    decorators: [StoreDecorator({})],
} satisfies Meta<typeof ProfileCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithInputsFilled: Story = {
    decorators: [
        StoreDecorator({
            preloadedReducer: {
                user: userReducer,
            },
            preloadedState: {
                user: {
                    ...mockUserState,
                    form: mockUsers[0],
                },
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
                    form: mockUsers[0],
                    editable: true,
                },
            },
        }),
    ],
};

export const WithValidateError: Story = {
    decorators: [
        StoreDecorator({
            preloadedReducer: {
                user: userReducer,
            },
            preloadedState: {
                user: {
                    ...mockUserState,
                    form: {
                        ...mockUsers[0],
                        lastName: '',
                        city: '',
                    },
                    loading: false,
                    validateErrors: [
                        ValidateUserErrors.invalidUserData,
                        ValidateUserErrors.invalidLocationData,
                    ],
                },
            },
        }),
    ],
};
