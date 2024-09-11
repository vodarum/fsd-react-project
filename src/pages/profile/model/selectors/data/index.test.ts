import {
    mockInitialAppState,
    mockProfile,
    mockProfileState,
} from '../../__mocks__';
import { selectProfileData } from '.';

describe('selectProfileData', () => {
    test('returns undefined for initial app state', () => {
        expect(selectProfileData(mockInitialAppState)).toBeUndefined();
    });

    test('returns undefined for initial profile state', () => {
        expect(
            selectProfileData({
                ...mockInitialAppState,
                profile: mockProfileState,
            }),
        ).toBeUndefined();
    });

    test(`returns profile object`, () => {
        expect(
            selectProfileData({
                ...mockInitialAppState,
                profile: {
                    ...mockProfileState,
                    data: mockProfile,
                },
            }),
        ).toEqual(mockProfile);
    });
});
