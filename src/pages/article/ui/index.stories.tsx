import type { Meta, StoryObj } from '@storybook/react';
import Article from '.';
import { PageDecorator } from '@/shared/config/storybook/page-decorator';
import { StoreDecorator } from '@/shared/config/storybook/store-decorator';
import {
    articleReducer,
    mockArticles,
    mockArticleState,
} from '@/entities/article/testing';
import { mockSession } from '@/entities/session/testing';
import {
    articleCommentsReducer,
    articleRecommendationsReducer,
    mockArticleCommentsState,
    mockArticleId,
    mockArticleRatings,
    mockArticleRecommendationsState,
    mockCommentsEntityState,
    mockRecommendations,
    mockRecommendationsEntityState,
} from '@/features/article/testing';
import { http, HttpResponse } from 'msw';

const meta = {
    title: 'pages/Article',
    component: Article,
    tags: ['autodocs'],
    decorators: [
        PageDecorator,
        StoreDecorator({
            preloadedReducer: {
                article: articleReducer,
                articleComments: articleCommentsReducer,
                articleRecommendations: articleRecommendationsReducer,
            },
            preloadedState: {
                session: {
                    data: mockSession,
                },
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
        msw: {
            handlers: [
                http.get(
                    `${__BASE_URL__}/articles?_expand=user&_limit=4`,
                    () => {
                        return HttpResponse.json(mockRecommendations);
                    },
                ),
                http.get(
                    `${__BASE_URL__}/article-ratings?userId=${mockSession.userId}&articleId=${mockArticleId}`,
                    () => {
                        return HttpResponse.json(
                            mockArticleRatings.find(
                                (r) =>
                                    r.userId === mockSession.userId &&
                                    r.articleId === mockArticleId,
                            ),
                        );
                    },
                ),
            ],
        },
    },
};

export const NotFound: Story = {};
