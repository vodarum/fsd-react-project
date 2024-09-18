import { mockInitialAppState, mockProfileState } from '../../__mocks__';
import { selectProfileState } from '.';

describe('selectProfileState', () => {
    test('returns undefined for initial app state', () => {
        expect(selectProfileState(mockInitialAppState)).toBeUndefined();
    });

    test(`returns state`, () => {
        expect(
            selectProfileState({
                ...mockInitialAppState,
                ...{
                    profile: mockProfileState,
                },
            }),
        ).toEqual(mockProfileState);
    });
});
