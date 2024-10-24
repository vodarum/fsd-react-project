import type { Meta, StoryObj } from '@storybook/react';
import { LoginButton } from '.';
import { StoreDecorator } from '@/shared/config/storybook/store-decorator';

const meta = {
    title: 'features/Login/LoginButton',
    component: LoginButton,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    decorators: [StoreDecorator({})],
} satisfies Meta<typeof LoginButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
