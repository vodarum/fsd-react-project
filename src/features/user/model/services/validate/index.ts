import { User } from '../../types';
import { ValidateUserErrors } from '../../const';
import { ValidateUserError } from '../../types';

const validateTextField = (value?: string): boolean =>
    !value || /\d/.test(value);

export const validate = (data?: User): ValidateUserError[] => {
    if (!data) return [ValidateUserErrors.noData];

    const errors: ValidateUserError[] = [];
    const { firstName, lastName, city, country } = data;

    if (validateTextField(firstName) || validateTextField(lastName)) {
        errors.push(ValidateUserErrors.invalidUserData);
    }

    if (validateTextField(city) || validateTextField(country)) {
        errors.push(ValidateUserErrors.invalidLocationData);
    }

    return errors;
};
