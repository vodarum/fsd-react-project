import type { Meta, StoryObj } from '@storybook/react';
import Article from '.';
import { StoreDecorator } from '@/shared/config/storybook/store-decorator';
import {
    articleCommentsReducer,
    articleRecommendationsReducer,
    mockArticleCommentsState,
    mockArticleId,
    mockArticleRecommendationsState,
    mockCommentsEntityState,
    mockRecommendationsEntityState,
} from '@/features/article';
import {
    articleReducer,
    mockArticles,
    mockArticleState,
} from '@/entities/article';

const meta = {
    title: 'pages/Article',
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
        StoreDecorator({
            preloadedReducer: {
                article: articleReducer,
                articleComments: articleCommentsReducer,
                articleRecommendations: articleRecommendationsReducer,
            },
            preloadedState: {
                article: {
                    ...mockArticleState,
                    data: mockArticles[0],
                },
                articleComments: {
                    ...mockArticleCommentsState,
                    entities: mockCommentsEntityState.entities,
                    ids: mockCommentsEntityState.ids,
                },
                articleRecommendations: {
                    ...mockArticleRecommendationsState,
                    entities: mockRecommendationsEntityState.entities,
                    ids: mockRecommendationsEntityState.ids,
                },
            },
        }),
    ],
} satisfies Meta<typeof Article>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    parameters: {
        router: {
            path: '/articles/:id',
            route: `/articles/${mockArticleId}`,
        },
    },
};

export const NotFound: Story = {};
