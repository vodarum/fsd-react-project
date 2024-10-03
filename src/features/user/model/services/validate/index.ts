import { User } from '../../types';
import { ValidateUserErrors } from '../../const';
import { ValidateUserError } from '../../types';

const containsNumber = (value: string): boolean => /\d/.test(value);

const validateTextField = (value?: string): boolean =>
    !!value && !containsNumber(value);

export const validate = (data?: User): ValidateUserError[] => {
    if (!data) return [ValidateUserErrors.noData];

    const errors: ValidateUserError[] = [];
    const { id, firstName, lastName, city, country } = data;

    if (!id || !validateTextField(firstName) || !validateTextField(lastName)) {
        errors.push(ValidateUserErrors.invalidUserData);
    }

    if (!validateTextField(city) || !validateTextField(country)) {
        errors.push(ValidateUserErrors.invalidLocationData);
    }

    return errors;
};
