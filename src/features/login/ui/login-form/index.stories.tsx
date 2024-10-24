import type { Meta, StoryObj } from '@storybook/react';
import LoginForm from '.';
import { StoreDecorator } from '@/shared/config/storybook/store-decorator';
import { loginReducer } from '../../model';

const meta = {
    title: 'features/Login/LoginForm',
    component: LoginForm,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    decorators: [StoreDecorator({})],
} satisfies Meta<typeof LoginForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        open: true,
    },
};

export const WithInputsFilled: Story = {
    decorators: [
        StoreDecorator({
            preloadedReducer: {
                login: loginReducer,
            },
            preloadedState: {
                login: {
                    username: 'ivan123',
                    password: 'qwerty123',
                    loading: false,
                },
            },
        }),
    ],
};

export const WithLoading: Story = {
    decorators: [
        StoreDecorator({
            preloadedReducer: {
                login: loginReducer,
            },
            preloadedState: {
                login: {
                    username: 'ivan123',
                    password: 'qwerty123',
                    loading: true,
                },
            },
        }),
    ],
};

export const WithError: Story = {
    decorators: [
        StoreDecorator({
            preloadedReducer: {
                login: loginReducer,
            },
            preloadedState: {
                login: {
                    username: 'ivan123',
                    password: 'qwerty123',
                    loading: false,
                    error: 'Some error',
                },
            },
        }),
    ],
};
