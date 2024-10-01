import type { State } from 'app/providers/store-provider';
import type { ArticleCommentsState } from '../types';

const mockArticleId = 1;

const mockComments = [
    {
        id: 1,
        text: 'Some comment 1',
        author: {
            id: 1,
            name: 'Автор 1',
            avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwnsl37CexuUYALyGM7V0V4aaEVA4NPmjP3w&s',
        },
    },
    {
        id: 2,
        text: 'Some comment 2',
        author: {
            id: 2,
            name: 'Автор 2',
            avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwnsl37CexuUYALyGM7V0V4aaEVA4NPmjP3w&s',
        },
    },
    {
        id: 3,
        text: 'Some comment 3',
        author: {
            id: 1,
            name: 'Автор 1',
            avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwnsl37CexuUYALyGM7V0V4aaEVA4NPmjP3w&s',
        },
    },
];

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
