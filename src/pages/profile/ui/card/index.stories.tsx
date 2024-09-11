import type { Meta, StoryObj } from '@storybook/react';
import { ProfileCard } from '.';
import { StoreDecorator } from 'shared/config/storybook/store-decorator';
import { profileReducer } from '../../model';
import { mockProfile, mockProfileState } from '../../model/__mocks__';

const meta = {
    title: 'entities/ProfileCard',
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
                profile: profileReducer,
            },
            preloadedState: {
                profile: {
                    ...mockProfileState,
                    data: mockProfile,
                },
            },
        }),
    ],
};

export const WithLoading: Story = {
    decorators: [
        StoreDecorator({
            preloadedReducer: {
                profile: profileReducer,
            },
            preloadedState: {
                profile: {
                    ...mockProfileState,
                    data: mockProfile,
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
                    data: mockProfile,
                    loading: false,
                    error: 'Some error',
                },
            },
        }),
    ],
};
