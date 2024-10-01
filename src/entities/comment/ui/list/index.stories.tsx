import type { Meta, StoryObj } from '@storybook/react';
import { CommentList } from '.';
import { mockComments } from '../../model';

const meta = {
    title: 'entities/Comment/CommentList',
    component: CommentList,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    args: {
        items: mockComments,
    },
} satisfies Meta<typeof CommentList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithLoading: Story = {
    args: {
        loading: true,
    },
};
