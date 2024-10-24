import type { Meta, StoryObj } from '@storybook/react';
import { CommentForm } from '.';
import { StoreDecorator } from '@/shared/config/storybook/store-decorator';
import { addCommentReducer } from '../../model';

const meta = {
    title: 'features/CommentForm',
    component: CommentForm,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    decorators: [StoreDecorator({})],
} satisfies Meta<typeof CommentForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithText: Story = {
    decorators: [
        StoreDecorator({
            preloadedReducer: {
                addComment: addCommentReducer,
            },
            preloadedState: {
                addComment: {
                    text: 'Some comment',
                },
            },
        }),
    ],
};

export const WithError: Story = {
    decorators: [
        StoreDecorator({
            preloadedReducer: {
                addComment: addCommentReducer,
            },
            preloadedState: {
                addComment: {
                    text: 'Some comment',
                    error: 'Some error',
                },
            },
        }),
    ],
};
