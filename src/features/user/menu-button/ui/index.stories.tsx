import type { Meta, StoryObj } from '@storybook/react';
import { UserMenuButton } from '.';
import { StoreDecorator } from '@/shared/config/storybook/store-decorator';

const meta = {
    title: 'features/User/UserMenuButton',
    component: UserMenuButton,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    decorators: [StoreDecorator({})],
} satisfies Meta<typeof UserMenuButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
