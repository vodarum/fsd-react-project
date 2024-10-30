import type { Meta, StoryObj } from '@storybook/react';
import { SidebarItem } from '.';
import { navRoutes } from '@/shared/api';
import { StoreDecorator } from '@/shared/config/storybook/store-decorator';

const meta = {
    title: 'widgets/LeftSidebar/SidebarItem',
    component: SidebarItem,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    args: {
        ...navRoutes[0],
    },
    decorators: [StoreDecorator({})],
} satisfies Meta<typeof SidebarItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const Collapsed: Story = {
    args: {
        collapsed: true,
    },
};
