import {
    mockInitialAppState,
    mockArticleListState,
} from '../../../../__mocks__';
import { selectSearch } from '.';

describe('selectSearch', () => {
    const searchText = 'test';

    test(`returns empty string for initial state`, () => {
        expect(selectSearch(mockInitialAppState)).toBe('');
    });

    test(`returns empty string for initial articleList state`, () => {
        expect(
            selectSearch({
                ...mockInitialAppState,
                articleList: mockArticleListState,
            }),
        ).toBe('');
    });

    test(`returns ${searchText}`, () => {
        expect(
            selectSearch({
                ...mockInitialAppState,
                articleList: {
                    ...mockArticleListState,
                    search: searchText,
                },
            }),
        ).toBe(searchText);
    });
});
