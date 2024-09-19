import type { Meta, StoryObj } from '@storybook/react';
import { ProfileButtonBar } from '.';
import { StoreDecorator } from 'shared/config/storybook/store-decorator';
import { mockProfileState, profileReducer } from '../../model';

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
                profile: profileReducer,
            },
            preloadedState: {
                profile: mockProfileState,
            },
        }),
    ],
};

export const Editable: Story = {
    decorators: [
        StoreDecorator({
            preloadedReducer: {
                profile: profileReducer,
            },
            preloadedState: {
                profile: {
                    ...mockProfileState,
                    editable: true,
                },
            },
        }),
    ],
};
