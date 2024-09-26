import {
    mockInitialAppState,
    mockArticle,
    mockArticleState,
} from '../../__mocks__';
import { selectArticleData } from '.';

describe('selectProfileData', () => {
    test('returns undefined for initial app state', () => {
        expect(selectArticleData(mockInitialAppState)).toBeUndefined();
    });

    test('returns undefined for initial article state', () => {
        expect(
            selectArticleData({
                ...mockInitialAppState,
                article: mockArticleState,
            }),
        ).toBeUndefined();
    });

    test(`returns article object`, () => {
        expect(
            selectArticleData({
                ...mockInitialAppState,
                article: {
                    ...mockArticleState,
                    data: mockArticle,
                },
            }),
        ).toEqual(mockArticle);
    });
});
