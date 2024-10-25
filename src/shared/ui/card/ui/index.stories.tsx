import type { Meta, StoryObj } from '@storybook/react';
import { Card } from '.';

const meta = {
    title: 'shared/Card',
    component: Card,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    args: {
        children: Array(5)
            .fill(0)
            .map((_, idx) => {
                const key = idx + 1;
                return <p key={key}>{`Some text ${key}`}</p>;
            }),
    },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithTitle: Story = {
    args: {
        title: 'Card Title',
    },
};

export const WithoutBorder: Story = {
    args: {
        title: 'Card Title',
        bordered: false,
    },
};
