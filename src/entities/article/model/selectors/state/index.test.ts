import { mockInitialAppState, mockArticleState } from '../../__mocks__';
import { selectArticleState } from '.';

describe('selectArticleState', () => {
    test('returns undefined for initial app state', () => {
        expect(selectArticleState(mockInitialAppState)).toBeUndefined();
    });

    test(`returns state`, () => {
        expect(
            selectArticleState({
                ...mockInitialAppState,
                ...{
                    article: mockArticleState,
                },
            }),
        ).toEqual(mockArticleState);
    });
});
