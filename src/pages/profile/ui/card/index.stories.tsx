import type { Meta, StoryObj } from '@storybook/react';
import { ProfileCard } from '.';
import { StoreDecorator } from 'shared/config/storybook/store-decorator';
import {
    mockProfile,
    mockProfileState,
    profileReducer,
    ValidateProfileErrors,
} from '../../model';

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
                profile: profileReducer,
            },
            preloadedState: {
                profile: {
                    ...mockProfileState,
                    form: mockProfile,
                },
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
                    form: mockProfile,
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
                profile: profileReducer,
            },
            preloadedState: {
                profile: {
                    ...mockProfileState,
                    form: {
                        ...mockProfile,
                        lastName: '',
                        city: '',
                    },
                    loading: false,
                    validateErrors: [
                        ValidateProfileErrors.invalidUserData,
                        ValidateProfileErrors.invalidLocationData,
                    ],
                },
            },
        }),
    ],
};
