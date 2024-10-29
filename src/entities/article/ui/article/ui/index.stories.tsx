import type { Meta, StoryObj } from '@storybook/react';
import { Article } from '.';
import { StoreDecorator } from '@/shared/config/storybook/store-decorator';
import { articleReducer } from '../../../model';
import { mockArticles, mockArticleState } from '../../../__mocks__';

const meta = {
    title: 'entities/Article/ArticleDetails',
    component: Article,
    tags: ['autodocs'],
    parameters: {
        layout: 'padded',
    },
    args: {
        id: 1,
    },
} satisfies Meta<typeof Article>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
    decorators: [
        StoreDecorator({
            preloadedReducer: {
                article: articleReducer,
            },
            preloadedState: {
                article: {
                    ...mockArticleState,
                    data: mockArticles[0],
                },
            },
        }),
    ],
};

export const WithLoading: Story = {
    decorators: [
        StoreDecorator({
            preloadedReducer: {
                article: articleReducer,
            },
            preloadedState: {
                article: {
                    ...mockArticleState,
                    loading: true,
                },
            },
        }),
    ],
};

export const WithError: Story = {
    decorators: [
        StoreDecorator({
            preloadedReducer: {
                article: articleReducer,
            },
            preloadedState: {
                article: {
                    ...mockArticleState,
                    error: 'Some error',
                },
            },
        }),
    ],
};
