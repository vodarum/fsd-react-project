import {
    mockInitialAppState,
    mockProfile,
    mockProfileState,
} from '../../__mocks__';
import { selectProfileForm } from '.';

describe('selectProfileForm', () => {
    test('returns undefined for initial app state', () => {
        expect(selectProfileForm(mockInitialAppState)).toBeUndefined();
    });

    test('returns undefined for initial profile state', () => {
        expect(
            selectProfileForm({
                ...mockInitialAppState,
                profile: mockProfileState,
            }),
        ).toBeUndefined();
    });

    test(`returns profile object`, () => {
        expect(
            selectProfileForm({
                ...mockInitialAppState,
                profile: {
                    ...mockProfileState,
                    form: mockProfile,
                },
            }),
        ).toEqual(mockProfile);
    });
});
