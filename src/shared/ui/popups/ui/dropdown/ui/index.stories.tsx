import type { Meta, StoryObj } from '@storybook/react';
import { Dropdown } from '.';

const meta = {
    title: 'shared/Dropdown',
    component: Dropdown,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    args: {
        activator: 'DropdownActivator',
        items: [
            {
                content: 'DropdownItem 1',
            },
            {
                content: 'DropdownItem 2',
                active: true,
            },
            {
                content: 'DropdownItem 3',
            },
        ],
    },
} satisfies Meta<typeof Dropdown>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const BottomStart: Story = {
    args: {
        anchor: 'bottom start',
    },
};
export const BottomEnd: Story = {
    args: {
        anchor: 'bottom end',
    },
};

export const TopStart: Story = {
    args: {
        anchor: 'top start',
    },
};

export const TopEnd: Story = {
    args: {
        anchor: 'top end',
    },
};
