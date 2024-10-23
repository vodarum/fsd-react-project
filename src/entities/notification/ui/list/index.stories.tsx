import type { Meta, StoryObj } from '@storybook/react';
import { http, HttpResponse } from 'msw';
import { NotificationList } from '.';
import { mockNotifications } from 'entities/notification/model/__mocks__';
import { StoreDecorator } from 'shared/config/storybook/store-decorator';

const meta = {
    title: 'entities/Notification/NotificationList',
    component: NotificationList,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
    },
    decorators: [StoreDecorator({})],
} satisfies Meta<typeof NotificationList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    parameters: {
        msw: {
            handlers: [
                http.get(`${__BASE_URL__}/notifications?_expand=user`, () => {
                    return HttpResponse.json(mockNotifications);
                }),
            ],
        },
    },
};
