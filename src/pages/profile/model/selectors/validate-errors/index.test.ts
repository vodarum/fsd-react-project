import { mockInitialAppState, mockProfileState } from '../../__mocks__';
import { selectValidateErrors } from '.';
import { ValidateProfileErrors } from '../../const';

describe('selectValidateErrors', () => {
    test('returns undefined for initial app state', () => {
        expect(selectValidateErrors(mockInitialAppState)).toBeUndefined();
    });

    test('returns undefined for initial profile state', () => {
        expect(
            selectValidateErrors({
                ...mockInitialAppState,
                profile: mockProfileState,
            }),
        ).toBeUndefined();
    });

    test(`returns array of validate errors`, () => {
        const validateErrors = [
            ValidateProfileErrors.invalidLocationData,
            ValidateProfileErrors.invalidUserData,
        ];

        expect(
            selectValidateErrors({
                ...mockInitialAppState,
                ...{
                    profile: {
                        ...mockProfileState,
                        validateErrors,
                    },
                },
            }),
        ).toBe(validateErrors);
    });
});
