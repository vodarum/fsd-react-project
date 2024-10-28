import { mockAppState, mockInitialAppState } from '../../../__mocks__';
import { selectText } from '.';

describe('selectProfileData', () => {
    test('returns empty string for initial app state', () => {
        expect(selectText(mockInitialAppState)).toBe('');
    });

    test('returns empty string for initial addComment state', () => {
        expect(selectText(mockAppState)).toBe('');
    });

    test(`returns comment text`, () => {
        const commentText = 'Some comment';

        expect(
            selectText({
                ...mockAppState,
                addComment: {
                    text: commentText,
                },
            }),
        ).toBe(commentText);
    });
});
