import { mockInitialAppState, mockArticleListState } from '../../../../__mocks__';
import { selectInited } from '.';

describe('selectInited', () => {
    test(`returns undefined for initial state`, () => {
        expect(selectInited(mockInitialAppState)).toBeUndefined();
    });

    test(`returns false for initial articleList state`, () => {
        expect(
            selectInited({
                ...mockInitialAppState,
                articleList: mockArticleListState,
            }),
        ).toBeFalsy();
    });

    test(`returns true`, () => {
        expect(
            selectInited({
                ...mockInitialAppState,
                articleList: {
                    ...mockArticleListState,
                    _inited: true,
                },
            }),
        ).toBeTruthy();
    });
});
