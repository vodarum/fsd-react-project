import {
    mockInitialAppState,
    mockAppState,
    mockAddCommentState,
} from '../../__mocks__';
import { selectAddCommentState } from '.';

describe('selectAddCommentState', () => {
    test('returns undefined for initial app state', () => {
        expect(selectAddCommentState(mockInitialAppState)).toBeUndefined();
    });

    test(`returns state`, () => {
        expect(
            selectAddCommentState({
                ...mockInitialAppState,
                ...mockAppState,
            }),
        ).toEqual(mockAddCommentState);
    });
});
