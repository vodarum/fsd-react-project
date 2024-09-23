import type { Meta, StoryObj } from '@storybook/react';
import { RightSidebar } from '.';

const meta = {
    title: 'widgets/RightSidebar',
    component: RightSidebar,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof RightSidebar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const Open: Story = {
    args: {
        open: true,
    },
};
