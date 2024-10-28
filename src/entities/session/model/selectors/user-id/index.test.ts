import { mockInitialAppState, mockSession } from '../../../__mocks__';
import { selectSessionUserId } from '.';

describe('selectSessionUserId', () => {
    test('returns undefined for initial state', () => {
        expect(selectSessionUserId(mockInitialAppState)).toBeUndefined();
    });

    test('returns session', () => {
        expect(
            selectSessionUserId({
                ...mockInitialAppState,
                ...{
                    session: { data: mockSession },
                },
            }),
        ).toBe(mockSession.userId);
    });
});
