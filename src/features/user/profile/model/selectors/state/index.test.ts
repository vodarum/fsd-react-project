import { mockInitialAppState, mockUserState } from '../../../__mocks__';
import { selectUserState } from '.';

describe('selectUserState', () => {
    test('returns undefined for initial app state', () => {
        expect(selectUserState(mockInitialAppState)).toBeUndefined();
    });

    test(`returns state`, () => {
        expect(
            selectUserState({
                ...mockInitialAppState,
                ...{
                    user: mockUserState,
                },
            }),
        ).toEqual(mockUserState);
    });
});
