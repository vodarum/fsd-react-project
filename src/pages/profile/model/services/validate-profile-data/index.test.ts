import { validateProfileData } from '.';
import { mockProfile } from '../../__mocks__';
import { ValidateProfileErrors } from '../../const';

describe('validateProfileData', () => {
    test('returns empty array', () => {
        expect(validateProfileData(mockProfile)).toEqual([]);
    });

    test(`returns ${[ValidateProfileErrors.invalidUserData]}`, () => {
        expect(validateProfileData({
            ...mockProfile,
            firstName: '',
        })).toEqual([ValidateProfileErrors.invalidUserData]);
    });

    test(`returns ${[ValidateProfileErrors.invalidLocationData]}`, () => {
        expect(validateProfileData({
            ...mockProfile,
            country: undefined,
        })).toEqual([ValidateProfileErrors.invalidLocationData]);
    });

    test(`returns ${[ValidateProfileErrors.noData]}`, () => {
        expect(validateProfileData()).toEqual([ValidateProfileErrors.noData]);
    });

    test(`returns ${[ValidateProfileErrors.invalidUserData, ValidateProfileErrors.invalidLocationData]}`, () => {
        expect(validateProfileData({
            ...mockProfile,
            firstName: '',
            lastName: '',
            country: undefined,
        })).toEqual([ValidateProfileErrors.invalidUserData, ValidateProfileErrors.invalidLocationData]);
    });
});
