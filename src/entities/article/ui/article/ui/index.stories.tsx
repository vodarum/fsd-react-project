import type { Meta, StoryObj } from '@storybook/react';
import { Article } from '.';
import { StoreDecorator } from 'shared/config/storybook/store-decorator';
import { articleReducer, mockArticle, mockArticleState } from '../../../model';

const meta = {
    title: 'entities/Article',
    component: Article,
    tags: ['autodocs'],
    decorators: [
        (Story) => (
            <div className='layout' style={{ height: '100vh' }}>
                <main className='layout-main'>
                    <Story />
                </main>
            </div>
        ),
    ],
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
                    data: mockArticle,
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
