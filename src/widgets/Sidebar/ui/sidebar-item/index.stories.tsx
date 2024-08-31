import type { Meta, StoryObj } from '@storybook/react';
import { SidebarItem } from '.';
import { items } from '../../model';

const meta = {
    title: 'widgets/SidebarItem',
    component: SidebarItem,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    args: {
        ...items[0],
    },
} satisfies Meta<typeof SidebarItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const Collapsed: Story = {
    args: {
        collapsed: true,
    },
};
