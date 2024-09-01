import {
    mockInitialAppState,
    mockAppState,
    mockLoginState,
} from '../../__mocks__';
import { selectLoginState } from '.';

describe('selectLoginState', () => {
    test('returns undefined for initial state', () => {
        expect(selectLoginState(mockInitialAppState)).toBeUndefined();
    });

    test('returns state', () => {
        expect(selectLoginState(mockAppState)).toEqual(mockLoginState);
    });
});
