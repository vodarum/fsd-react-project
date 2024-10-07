import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { ArticleViewSwitcher } from '.';
import { ArticleViewTypes } from 'entities/article';

const meta = {
    title: 'features/Article/ArticleViewSwitcher',
    component: ArticleViewSwitcher,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
    },
    args: {
        onViewClick: fn(),
        view: ArticleViewTypes.grid,
    },
} satisfies Meta<typeof ArticleViewSwitcher>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
