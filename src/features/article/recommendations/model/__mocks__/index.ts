import type { State } from '@/app/providers/store-provider';
import type { ArticleRecommendationsState } from '../types';
import { mockArticles } from '@/entities/article';

const mockRecommendations = mockArticles.slice(0, 3);

const mockRecommendationsEntityState: Pick<
    ArticleRecommendationsState,
    'entities' | 'ids'
> = {
    ids: mockRecommendations.map((c) => c.id),
    entities: mockRecommendations.reduce(
        (accumulator, c) => ({ ...accumulator, [c.id]: c }),
        {},
    ),
};

const mockArticleRecommendationsState: ArticleRecommendationsState = {
    loading: false,
    ids: [],
    entities: {},
};

const mockAppState: State = {
    articleRecommendations: mockArticleRecommendationsState,
} as State;

const mockInitialAppState: State = {} as State;

export {
    mockAppState,
    mockRecommendations,
    mockRecommendationsEntityState,
    mockArticleRecommendationsState,
    mockInitialAppState,
};
