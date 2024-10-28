import { mockSession, mockSessionState } from '../../__mocks__';
import type { SessionState } from '../types';
import { sessionReducer, sessionActions } from '.';

describe('sessionSlice', () => {
    test('should work with empty state', () => {
        expect(
            sessionReducer(undefined, sessionActions.setData(mockSession)),
        ).toEqual({
            ...mockSessionState,
            data: mockSession,
        });
    });

    test('setData', () => {
        const newSession: SessionState['data'] = {
            token: 'qwerty456',
            userId: 2,
        };

        expect(
            sessionReducer(
                {
                    ...mockSessionState,
                    data: mockSession,
                },
                sessionActions.setData(newSession),
            ),
        ).toEqual({
            ...mockSessionState,
            data: newSession,
        });
    });

    test('resetData', () => {
        expect(
            sessionReducer(
                {
                    ...mockSessionState,
                    data: mockSession,
                },
                sessionActions.resetData(),
            ),
        ).toEqual(mockSessionState);
    });
});
