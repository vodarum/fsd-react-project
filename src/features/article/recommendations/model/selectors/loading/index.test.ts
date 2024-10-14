import {
    mockInitialAppState,
    mockArticleRecommendationsState,
} from '../../__mocks__';
import { selectLoading } from '.';

describe('selectLoading', () => {
    test('returns false for initial state', () => {
        expect(selectLoading(mockInitialAppState)).toBeFalsy();
    });

    test('returns false for initial articleRecommendations state', () => {
        expect(
            selectLoading({
                ...mockInitialAppState,
                articleRecommendations: mockArticleRecommendationsState,
            }),
        ).toBeFalsy();
    });
});
