import { mockInitialAppState, mockArticleState } from '../../../../__mocks__';
import { selectLoading } from '.';

describe('selectLoading', () => {
    test('returns false for initial state', () => {
        expect(selectLoading(mockInitialAppState)).toBeFalsy();
    });

    test('returns false for initial article state', () => {
        expect(
            selectLoading({
                ...mockInitialAppState,
                article: mockArticleState,
            }),
        ).toBeFalsy();
    });
});
