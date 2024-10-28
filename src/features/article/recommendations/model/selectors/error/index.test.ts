import {
    mockInitialAppState,
    mockArticleRecommendationsState,
} from '../../../__mocks__';
import { selectError } from '.';

describe('selectError', () => {
    test('returns undefined for initial app state', () => {
        expect(selectError(mockInitialAppState)).toBeUndefined();
    });

    test('returns undefined for initial articleRecommendations state', () => {
        expect(
            selectError({
                ...mockInitialAppState,
                articleRecommendations: mockArticleRecommendationsState,
            }),
        ).toBeUndefined();
    });

    test(`returns error text`, () => {
        const error = 'Some error';

        expect(
            selectError({
                ...mockInitialAppState,
                ...{
                    articleRecommendations: {
                        ...mockArticleRecommendationsState,
                        error,
                    },
                },
            }),
        ).toBe(error);
    });
});
