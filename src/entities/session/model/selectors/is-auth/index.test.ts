import { mockInitialAppState, mockSession } from '../../__mocks__';
import { selectIsAuth } from '.';

describe('selectIsAuth', () => {
    test('returns false for initial state', () => {
        expect(selectIsAuth(mockInitialAppState)).toBeFalsy();
    });

    test('returns true', () => {
        expect(
            selectIsAuth({
                ...mockInitialAppState,
                ...{
                    session: { data: mockSession },
                },
            }),
        ).toBeTruthy();
    });
});
