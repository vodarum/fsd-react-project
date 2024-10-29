import { mockUsers } from '@/entities/user/testing';
import { validate } from '.';
import { ValidateUserErrors } from '../../consts';

const mockUser = mockUsers[0];

describe('validate', () => {
    test('returns empty array', () => {
        expect(validate(mockUser)).toEqual([]);
    });

    test(`returns ${[ValidateUserErrors.invalidUserData]}`, () => {
        expect(
            validate({
                ...mockUser,
                firstName: '',
            }),
        ).toEqual([ValidateUserErrors.invalidUserData]);
    });

    test(`returns ${[ValidateUserErrors.invalidLocationData]}`, () => {
        expect(
            validate({
                ...mockUser,
                country: undefined,
            }),
        ).toEqual([ValidateUserErrors.invalidLocationData]);
    });

    test(`returns ${[ValidateUserErrors.noData]}`, () => {
        expect(validate()).toEqual([ValidateUserErrors.noData]);
    });

    test(`returns ${[ValidateUserErrors.invalidUserData, ValidateUserErrors.invalidLocationData]}`, () => {
        expect(
            validate({
                ...mockUser,
                firstName: '',
                lastName: '',
                country: undefined,
            }),
        ).toEqual([
            ValidateUserErrors.invalidUserData,
            ValidateUserErrors.invalidLocationData,
        ]);
    });
});
