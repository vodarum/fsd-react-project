import { mockInitialAppState, mockUserState } from '../../../__mocks__';
import { selectValidateErrors } from '.';
import { ValidateUserErrors } from '../../consts';

describe('selectValidateErrors', () => {
    test('returns undefined for initial app state', () => {
        expect(selectValidateErrors(mockInitialAppState)).toBeUndefined();
    });

    test('returns undefined for initial user state', () => {
        expect(
            selectValidateErrors({
                ...mockInitialAppState,
                user: mockUserState,
            }),
        ).toBeUndefined();
    });

    test(`returns array of validate errors`, () => {
        const validateErrors = [
            ValidateUserErrors.invalidLocationData,
            ValidateUserErrors.invalidUserData,
        ];

        expect(
            selectValidateErrors({
                ...mockInitialAppState,
                ...{
                    user: {
                        ...mockUserState,
                        validateErrors,
                    },
                },
            }),
        ).toBe(validateErrors);
    });
});
