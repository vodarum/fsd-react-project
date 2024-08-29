import { mockInitialAppState, mockSession } from '../../__mocks__';
import { selectSession } from './';

describe('selectSession', () => {
    test('returns undefined for initial state', () => {
        expect(selectSession(mockInitialAppState)).toBeUndefined();
    });

    test('returns session', () => {
        expect(
            selectSession({
                ...mockInitialAppState,
                ...{
                    user: { session: mockSession },
                },
            }),
        ).toEqual(mockSession);
    });
});
