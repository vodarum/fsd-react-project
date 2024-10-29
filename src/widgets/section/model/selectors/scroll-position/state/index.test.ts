import {
    mockInitialAppState,
    mockScrollPositionState,
} from '../../../../__mocks__';
import { selectState } from '.';

describe('selectState', () => {
    test('', () => {
        expect(selectState(mockInitialAppState)).toEqual(
            mockScrollPositionState,
        );
    });
});
