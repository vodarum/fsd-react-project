import type { Meta, StoryObj } from '@storybook/react';
import { RatingCard } from '.';
import { fn } from '@storybook/test';

const meta = {
    title: 'entities/Rating/RatingCard',
    component: RatingCard,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    args: {
        onSubmit: fn(),
    },
} satisfies Meta<typeof RatingCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithTitle: Story = {
    args: {
        title: 'RatingCard Title',
    },
};

export const WithFeedbackTitle: Story = {
    args: {
        feedbackTitle: 'RatingCard Feedback Title',
    },
};
