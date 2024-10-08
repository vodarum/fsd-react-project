import {
    mockInitialAppState,
    mockScrollPositionData,
    mockScrollPositionState,
} from '../../../__mocks__';
import { selectData } from '.';

describe('selectData', () => {
    test('returns empty object for initial state', () => {
        expect(selectData(mockInitialAppState)).toEqual({});
    });

    test(`returns scroll position data object`, () => {
        const state = {
            ...mockInitialAppState,
            scrollPosition: {
                ...mockScrollPositionState,
                data: mockScrollPositionData,
            },
        };
        expect(selectData(state)).toEqual(mockScrollPositionData);
    });
});
