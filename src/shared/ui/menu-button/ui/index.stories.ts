import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { MenuButton } from '.';

const meta = {
    title: 'shared/MenuButton',
    component: MenuButton,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    args: {
        onClick: fn(),
    },
} satisfies Meta<typeof MenuButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
