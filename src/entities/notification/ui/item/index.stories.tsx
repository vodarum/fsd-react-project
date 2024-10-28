import type { Meta, StoryObj } from '@storybook/react';
import { NotificationItem } from '.';
import { mockNotifications } from '../../__mocks__';

const meta = {
    title: 'entities/Notification/NotificationItem',
    component: NotificationItem,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof NotificationItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        data: mockNotifications[0],
    },
};

export const WithLink: Story = {
    args: {
        data: mockNotifications[2],
    },
};
