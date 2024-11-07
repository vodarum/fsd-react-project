import { delay, http, HttpResponse } from 'msw';
import type { Meta, StoryObj } from '@storybook/react';
import User from '.';
import { mockUsers } from '@/entities/user/testing';
import { PageDecorator } from '@/shared/config/storybook/page-decorator';
import { StoreDecorator } from '@/shared/config/storybook/store-decorator';

const mockUser = mockUsers[0];
const route = `/users/${mockUser.id}`;
const url = `${__BASE_URL__}${route}`;

const meta = {
    title: 'pages/User',
    component: User,
    tags: ['autodocs'],
    decorators: [PageDecorator, StoreDecorator({})],
    parameters: {
        router: {
            path: '/users/:id',
            route,
        },
    },
} satisfies Meta<typeof User>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    parameters: {
        msw: {
            handlers: [http.get(url, () => HttpResponse.json(mockUser))],
        },
    },
};

export const Loading: Story = {
    parameters: {
        msw: {
            handlers: [
                http.get(url, async () => {
                    await delay('infinite');
                    return HttpResponse.json(mockUser);
                }),
            ],
        },
    },
};

export const NotFound: Story = {
    parameters: {
        msw: {
            handlers: [http.get(url, () => HttpResponse.error())],
        },
    },
};
