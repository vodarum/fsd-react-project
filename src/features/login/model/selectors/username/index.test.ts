import {
    mockInitialAppState,
    mockAppState,
    mockLoginState,
} from '../../__mocks__';
import { selectUsername } from '.';

describe('selectUsername', () => {
    test('returns empty string for initial state', () => {
        expect(selectUsername(mockInitialAppState)).toBe('');
    });

    test(`returns ${mockLoginState.username}`, () => {
        expect(selectUsername(mockAppState)).toBe(mockLoginState.username);
    });
});
