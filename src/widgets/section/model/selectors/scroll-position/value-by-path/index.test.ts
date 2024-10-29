import {
    mockInitialAppState,
    mockScrollPositionData,
    mockScrollPositionState,
} from '../../../../__mocks__';
import { selectValueByPath } from '.';

describe('selectValueByPath', () => {
    const defaultValue = 0;
    const path = 'key1';

    test(`returns ${defaultValue} for initial state`, () => {
        expect(selectValueByPath(mockInitialAppState, path)).toBe(0);
    });

    test(`returns ${mockScrollPositionData[path]}`, () => {
        const state = {
            ...mockInitialAppState,
            scrollPosition: {
                ...mockScrollPositionState,
                data: mockScrollPositionData,
            },
        };

        expect(selectValueByPath(state, path)).toBe(
            mockScrollPositionData[path],
        );
    });
});
