import type { Meta, StoryObj } from '@storybook/react';
import { Drawer } from '.';

const meta = {
    title: 'shared/Drawer',
    component: Drawer,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    args: {
        title: 'Drawer Title',
        children: `Lorem ipsum dolor sit amet, consectetur adipiscing elit,
    sed do eiusmod tempor incididunt ut labore et dolore
    magna aliqua. Ut enim ad minim veniam, quis nostrud
    exercitation ullamco laboris nisi ut aliquip ex ea
    commodo consequat. Duis aute irure dolor in
    reprehenderit in voluptate velit esse cillum dolore eu
    fugiat nulla pariatur. Excepteur sint occaecat cupidatat
    non proident, sunt in culpa qui officia deserunt mollit
    anim id est laborum.`,
        open: true,
    },
} satisfies Meta<typeof Drawer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const NotClossable: Story = {
    args: {
        closable: false,
    },
};

export const Top: Story = {
    args: {
        placement: 'top',
    },
};

export const Bottom: Story = {
    args: {
        placement: 'bottom',
    },
};

export const Left: Story = {
    args: {
        placement: 'left',
    },
};

export const Right: Story = {
    args: {
        placement: 'right',
    },
};
