import {
    mockInitialAppState,
    mockArticleListState,
} from '../../../../__mocks__';
import { selectLoading } from '.';

describe('selectLoading', () => {
    test('returns false for initial state', () => {
        expect(selectLoading(mockInitialAppState)).toBeFalsy();
    });

    test('returns false for initial articleList state', () => {
        expect(
            selectLoading({
                ...mockInitialAppState,
                articleList: mockArticleListState,
            }),
        ).toBeFalsy();
    });
});
