import type { Meta, StoryObj } from '@storybook/react';
import { ArticleList } from '.';
import { ArticleViewTypes } from '../../../model';
import { mockArticles } from '../../../__mocks__';

const meta = {
    title: 'entities/Article/ArticleList',
    component: ArticleList,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
    },
    decorators: [
        (Story) => (
            <div style={{ width: '992px' }}>
                <Story />
            </div>
        ),
    ],
    args: {
        items: [],
    },
} satisfies Meta<typeof ArticleList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const GridView: Story = {
    args: {
        items: mockArticles,
        view: ArticleViewTypes.grid,
    },
};

export const ListView: Story = {
    args: {
        items: mockArticles,
        view: ArticleViewTypes.list,
    },
};

export const GridWithLoading: Story = {
    args: {
        view: ArticleViewTypes.grid,
        loading: true,
    },
};

export const ListViewWithLoading: Story = {
    args: {
        view: ArticleViewTypes.list,
        loading: true,
    },
};
