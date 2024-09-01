import {
    mockInitialAppState,
    mockAppState,
    mockLoginState,
} from '../../__mocks__';
import { selectLoading } from '.';

describe('selectLoading', () => {
    test('returns false for initial state', () => {
        expect(selectLoading(mockInitialAppState)).toBeFalsy();
    });

    test(`returns ${mockLoginState.loading}`, () => {
        expect(selectLoading(mockAppState)).toBeFalsy();
    });
});
