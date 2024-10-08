import {
    mockScrollPositionData,
    mockScrollPositionState,
} from '../../__mocks__';
import { ScrollPositionObject } from '../../types';
import { scrollPositionReducer, scrollPositionActions } from '.';

describe('scrollPositionSlice', () => {
    test('should work with empty state', () => {
        expect(
            scrollPositionReducer(
                undefined,
                scrollPositionActions.setData(mockScrollPositionData),
            ),
        ).toEqual({
            ...mockScrollPositionState,
            data: mockScrollPositionData,
        });
    });

    test('setData', () => {
        const profilePageScrollPosition: ScrollPositionObject = {
            key3: 1255,
        };

        expect(
            scrollPositionReducer(
                {
                    ...mockScrollPositionState,
                    data: mockScrollPositionData,
                },
                scrollPositionActions.setData(profilePageScrollPosition),
            ),
        ).toEqual({
            data: {
                ...mockScrollPositionData,
                ...profilePageScrollPosition,
            },
        });
    });
});
