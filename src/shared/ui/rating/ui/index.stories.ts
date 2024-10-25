import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Rating } from '.';

const meta = {
    title: 'shared/Rating',
    component: Rating,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    args: {
        onSelect: fn(),
    },
} satisfies Meta<typeof Rating>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Filled: Story = {
    args: {
        selectedStars: 3,
    },
};
