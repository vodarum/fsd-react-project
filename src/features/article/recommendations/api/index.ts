import {
    Article,
    ArticlesNumberPerPage,
    ArticleViewTypes,
} from '@/entities/article';
import { $rtkApi } from '@/shared/api';

const articleRecommendationsApi = $rtkApi.injectEndpoints({
    endpoints: (build) => ({
        getRecommendations: build.query<Article[], number>({
            query: (articleId: number) => ({
                url: '/articles',
                params: {
                    _expand: 'user',
                    _limit: ArticlesNumberPerPage[ArticleViewTypes.slider],
                    id_ne: articleId,
                },
            }),
        }),
    }),
    overrideExisting: false,
});

export const { useGetRecommendationsQuery } = articleRecommendationsApi;
