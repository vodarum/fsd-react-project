import type { Meta, StoryObj } from '@storybook/react';
import { ArticleCard } from '.';
import { ArticleViewTypes, mockArticles } from '../../../model';

const meta = {
    title: 'entities/Article/ArticleCard',
    component: ArticleCard,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
    },
    args: {
        data: mockArticles[0],
    },
} satisfies Meta<typeof ArticleCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Grid: Story = {
    args: {
        view: ArticleViewTypes.grid,
    },
};

export const List: Story = {
    decorators: [
        (Story) => (
            <div style={{ width: '992px' }}>
                <Story />
            </div>
        ),
    ],
    args: {
        view: ArticleViewTypes.list,
    },
};
