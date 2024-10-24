import { Article } from '@/entities/article';
import { $rtkApi } from '@/shared/api';

const articleRecommendationsApi = $rtkApi.injectEndpoints({
    endpoints: (build) => ({
        getRecommendations: build.query<Article[], number>({
            query: (limit: number) => ({
                url: '/articles',
                params: {
                    _expand: 'user',
                    _limit: limit,
                },
            }),
        }),
    }),
    overrideExisting: false,
});

export const { useGetRecommendationsQuery } = articleRecommendationsApi;
