import { mockInitialAppState, mockUserState } from '../../__mocks__';
import { selectUserState } from '.';

describe('selectUserState', () => {
    test('', () => {
        expect(selectUserState(mockInitialAppState)).toEqual(mockUserState);
    });
});
