import {
    mockInitialAppState,
    mockAppState,
    mockLoginState,
} from '../../../__mocks__';
import { selectPassword } from '.';

describe('selectPassword', () => {
    test('returns empty string for initial state', () => {
        expect(selectPassword(mockInitialAppState)).toBe('');
    });

    test(`returns ${mockLoginState.password}`, () => {
        expect(selectPassword(mockAppState)).toBe(mockLoginState.password);
    });
});
