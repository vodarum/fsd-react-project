import {
    mockInitialAppState,
    mockArticleCommentsState,
} from '../../../__mocks__';
import { selectError } from '.';

describe('selectError', () => {
    test('returns undefined for initial app state', () => {
        expect(selectError(mockInitialAppState)).toBeUndefined();
    });

    test('returns undefined for initial articleComments state', () => {
        expect(
            selectError({
                ...mockInitialAppState,
                articleComments: mockArticleCommentsState,
            }),
        ).toBeUndefined();
    });

    test(`returns error text`, () => {
        const error = 'Some error';

        expect(
            selectError({
                ...mockInitialAppState,
                ...{
                    articleComments: {
                        ...mockArticleCommentsState,
                        error,
                    },
                },
            }),
        ).toBe(error);
    });
});
