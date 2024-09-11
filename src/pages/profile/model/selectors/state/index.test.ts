import { mockInitialAppState } from '../../__mocks__';
import { selectProfileState } from '.';

describe('selectProfileState', () => {
    test('', () => {
        expect(selectProfileState(mockInitialAppState)).toBeUndefined();
    });
});
