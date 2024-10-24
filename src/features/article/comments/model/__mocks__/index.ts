import type { State } from '@/app/providers/store-provider';
import type { ArticleCommentsState } from '../types';
import { mockComments } from '@/entities/comment';

const mockArticleId = 1;

const mockCommentsEntityState: Pick<ArticleCommentsState, 'entities' | 'ids'> =
    {
        ids: mockComments.map((c) => c.id),
        entities: mockComments.reduce(
            (accumulator, c) => ({ ...accumulator, [c.id]: c }),
            {},
        ),
    };

const mockArticleCommentsState: ArticleCommentsState = {
    loading: false,
    ids: [],
    entities: {},
};

const mockAppState: State = {
    articleComments: mockArticleCommentsState,
} as State;

const mockInitialAppState: State = {} as State;

export {
    mockAppState,
    mockArticleId,
    mockComments,
    mockCommentsEntityState,
    mockArticleCommentsState,
    mockInitialAppState,
};
