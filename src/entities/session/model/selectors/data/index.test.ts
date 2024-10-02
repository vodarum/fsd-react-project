import { mockInitialAppState, mockSession } from '../../__mocks__';
import { selectSessionData } from '.';

describe('selectSessionData', () => {
    test('returns undefined for initial state', () => {
        expect(selectSessionData(mockInitialAppState)).toBeUndefined();
    });

    test('returns session', () => {
        expect(
            selectSessionData({
                ...mockInitialAppState,
                ...{
                    session: { data: mockSession },
                },
            }),
        ).toEqual(mockSession);
    });
});
