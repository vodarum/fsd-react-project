import { mockInitialAppState, mockArticleListState } from '../../../../__mocks__';
import { selectPage } from '.';

const defaultPage = 1;
const newPage = 2;

describe('selectPage', () => {
    test(`returns ${defaultPage} for initial state`, () => {
        expect(selectPage(mockInitialAppState)).toBe(defaultPage);
    });

    test(`returns ${defaultPage} for initial articleList state`, () => {
        expect(
            selectPage({
                ...mockInitialAppState,
                articleList: mockArticleListState,
            }),
        ).toBe(defaultPage);
    });

    test(`returns ${newPage} for articleList state`, () => {
        expect(
            selectPage({
                ...mockInitialAppState,
                articleList: {
                    ...mockArticleListState,
                    page: newPage,
                },
            }),
        ).toBe(newPage);
    });
});
