import type { Meta, StoryObj } from '@storybook/react';
import { ProfilePageContent } from '.';
import { StoreDecorator } from 'shared/config/storybook/store-decorator';
import { mockProfileState, profileReducer } from '../../model';

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
                profile: profileReducer,
            },
            preloadedState: {
                profile: {
                    ...mockProfileState,
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
                profile: profileReducer,
            },
            preloadedState: {
                profile: {
                    ...mockProfileState,
                    error: 'Неизвестная ошибка',
                },
            },
        }),
    ],
};
