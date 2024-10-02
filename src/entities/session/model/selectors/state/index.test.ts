import { mockInitialAppState, mockSessionState } from '../../__mocks__';
import { selectSessionState } from '.';

describe('selectSessionState', () => {
    test('', () => {
        expect(selectSessionState(mockInitialAppState)).toEqual(
            mockSessionState,
        );
    });
});
