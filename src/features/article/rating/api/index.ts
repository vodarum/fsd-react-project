import { Rating } from '@/entities/rating';
import { $rtkApi } from '@/shared/api';

type ArticleRatingQueryParams = {
    userId: number;
    articleId: number;
};

type ArticleRatingPayload = ArticleRatingQueryParams & Rating;

const articleRatingApi = $rtkApi.injectEndpoints({
    endpoints: (build) => ({
        getRating: build.query<Rating, ArticleRatingQueryParams>({
            query: ({ userId, articleId }) => ({
                url: '/article-ratings',
                params: {
                    userId,
                    articleId,
                },
            }),
            transformResponse(baseQueryReturnValue: Rating[]) {
                return baseQueryReturnValue[0];
            },
        }),
        createRating: build.mutation<void, ArticleRatingPayload>({
            query: (body) => ({
                url: '/article-ratings',
                method: 'POST',
                body,
            }),
        }),
    }),
    overrideExisting: false,
});

export const { useGetRatingQuery, useCreateRatingMutation } = articleRatingApi;
