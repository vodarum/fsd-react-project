import type { Meta, StoryObj } from '@storybook/react';
import { UserCard } from '.';
import { mockUsers } from '../../model';

const meta = {
    title: 'entities/User/UserCard',
    component: UserCard,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    args: {
        data: mockUsers[0],
    },
} satisfies Meta<typeof UserCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
