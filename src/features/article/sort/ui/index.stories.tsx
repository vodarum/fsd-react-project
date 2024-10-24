import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { ArticleSortSwitcher } from '.';
import { ArticleSortFields } from '@/entities/article';
import { SortOrders } from '@/shared/api';

const meta = {
    title: 'features/Article/ArticleSortSwitcher',
    component: ArticleSortSwitcher,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
    },
    args: {
        onOrderValueChange: fn(),
        onSortValueChange: fn(),
        orderValue: SortOrders.asc,
        sortValue: ArticleSortFields.createdAt,
    },
} satisfies Meta<typeof ArticleSortSwitcher>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
