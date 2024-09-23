import type { Meta, StoryObj } from '@storybook/react';
import { RightSidebar } from '.';

const meta = {
    title: 'widgets/RightSidebar',
    component: RightSidebar,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
    },
    args: {
        open: true,
    },
} satisfies Meta<typeof RightSidebar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Open: Story = {};
