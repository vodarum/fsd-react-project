import type { Meta, StoryObj } from '@storybook/react';
import { LeftSidebar } from '.';
import { StoreDecorator } from '@/shared/config/storybook/store-decorator';
import { mockSession } from '@/entities/session';

const meta = {
    title: 'widgets/LeftSidebar/Sidebar',
    component: LeftSidebar,
    tags: ['autodocs'],
    args: {
        className: 'layout-sidebar',
    },
    decorators: [
        StoreDecorator({}),
        (Story) => (
            <div className='layout' style={{ height: '100vh' }}>
                <Story />
                <div
                    className='layout-main'
                    style={{ backgroundColor: 'teal' }}
                />
            </div>
        ),
    ],
} satisfies Meta<typeof LeftSidebar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Open: Story = {
    args: {
        open: true,
    },
};

export const ForLoggedUser: Story = {
    decorators: [
        StoreDecorator({
            preloadedState: {
                session: {
                    data: mockSession,
                },
            },
        }),
    ],
    args: {
        open: true,
    },
};
