import { Country, Currency } from 'shared/api';
import { ValidateProfileErrors } from './const';

type ValidateProfileError =
    (typeof ValidateProfileErrors)[keyof typeof ValidateProfileErrors];

type Profile = Partial<{
    firstName: string;
    lastName: string;
    birthday: string;
    currency: Currency;
    country: Country;
    city: string;
    username: string;
    avatar: string;
}>;

type ProfileState = {
    data?: Profile;
    form?: Profile;
    editable: boolean;
    loading: boolean;
    error?: string;
    validateErrors?: ValidateProfileError[];
};

export { Profile, ProfileState, ValidateProfileError };
