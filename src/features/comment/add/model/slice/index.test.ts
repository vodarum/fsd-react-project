import { mockAddCommentState } from '../../__mocks__';
import { addCommentActions, addCommentReducer } from '.';

describe('addCommentSlice', () => {
    test('setData', () => {
        const mockComment = 'Test';

        expect(
            addCommentReducer(
                mockAddCommentState,
                addCommentActions.setText(mockComment),
            ),
        ).toEqual({
            ...mockAddCommentState,
            text: mockComment,
        });
    });
});
