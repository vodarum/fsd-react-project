import { mockInitialAppState, mockArticleCommentsState } from '../../../__mocks__';
import { selectLoading } from '.';

describe('selectLoading', () => {
    test('returns false for initial state', () => {
        expect(selectLoading(mockInitialAppState)).toBeFalsy();
    });

    test('returns false for initial articleComments state', () => {
        expect(
            selectLoading({
                ...mockInitialAppState,
                articleComments: mockArticleCommentsState,
            }),
        ).toBeFalsy();
    });
});
