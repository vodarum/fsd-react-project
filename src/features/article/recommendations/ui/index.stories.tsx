import type { Meta, StoryObj } from '@storybook/react';
import { http, HttpResponse } from 'msw';
import { StoreDecorator } from '@/shared/config/storybook/store-decorator';
import { ArticleRecommendations } from '.';
import { mockRecommendations } from '../__mocks__';

const meta = {
    title: 'features/Article/ArticleRecommendations',
    component: ArticleRecommendations,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    decorators: [StoreDecorator({})],
    args: {
        articleId: 1,
    },
} satisfies Meta<typeof ArticleRecommendations>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
    parameters: {
        msw: {
            handlers: [
                http.get(
                    `${__BASE_URL__}/articles?_expand=user&_limit=4&id_ne=1`,
                    () => {
                        return HttpResponse.json(mockRecommendations);
                    },
                ),
            ],
        },
    },
};
