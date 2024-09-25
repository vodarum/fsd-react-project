import type { Meta, StoryObj } from '@storybook/react';
import { Skeleton } from '.';

const meta = {
    title: 'shared/Skeleton',
    component: Skeleton,
    parameters: {
        layout: 'padded',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof Skeleton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Rectangle: Story = {
    args: {
        width: '100%',
        height: 16,
    },
};

export const RectangleActive: Story = {
    args: {
        active: true,
        width: '100%',
        height: 16,
    },
};

export const Circle: Story = {
    args: {
        width: 50,
        height: 50,
        radius: '50%',
    },
};

export const CircleActive: Story = {
    args: {
        active: true,
        width: 50,
        height: 50,
        radius: '50%',
    },
};

export const Square: Story = {
    args: {
        width: 50,
        height: 50,
    },
};

export const SquareActive: Story = {
    args: {
        active: true,
        width: 50,
        height: 50,
    },
};
