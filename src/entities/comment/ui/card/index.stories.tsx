import type { Meta, StoryObj } from '@storybook/react';
import { CommentCard } from '.';
import { mockComments } from '../../__mocks__';

const meta = {
    title: 'entities/Comment/CommentCard',
    component: CommentCard,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    args: {
        data: mockComments[0],
    },
} satisfies Meta<typeof CommentCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
