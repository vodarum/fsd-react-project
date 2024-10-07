import {
    mockInitialAppState,
    mockArticles,
    mockArticleState,
} from '../../../__mocks__';
import { selectArticleData } from '.';

const mockArticle = mockArticles[0];

describe('selectArticleData', () => {
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
