import { mockInitialAppState, mockArticleListState } from '../../../__mocks__';
import { selectLimit } from '.';

const defaultLimit = 9;
const newLimit = 3;

describe('selectPerPage', () => {
    test(`returns ${defaultLimit} for initial state`, () => {
        expect(selectLimit(mockInitialAppState)).toBe(defaultLimit);
    });

    test(`returns ${defaultLimit} for initial articleList state`, () => {
        expect(
            selectLimit({
                ...mockInitialAppState,
                articleList: mockArticleListState,
            }),
        ).toBe(defaultLimit);
    });

    test(`returns ${newLimit} for articleList state`, () => {
        expect(
            selectLimit({
                ...mockInitialAppState,
                articleList: {
                    ...mockArticleListState,
                    limit: newLimit,
                },
            }),
        ).toBe(newLimit);
    });
});
