import { ValidateProfileErrors } from '../../const';
import { Profile, ValidateProfileError } from '../../types';

const validateTextField = (value?: string): boolean => !value || /\d/.test(value);

export const validateProfileData = (data?: Profile): ValidateProfileError[] => {
    if (!data) return [ValidateProfileErrors.noData];

    const errors: ValidateProfileError[] = [];
    const { firstName, lastName, city, country } = data;

    if (validateTextField(firstName) || validateTextField(lastName)) {
        errors.push(ValidateProfileErrors.invalidUserData);
    }

    if (validateTextField(city) || validateTextField(country)) {
        errors.push(ValidateProfileErrors.invalidLocationData);
    }

    return errors;
};
