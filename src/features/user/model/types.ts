import { ValidateUserErrors } from './const';
import { Country, Currency } from 'shared/api';

type User = Partial<{
    id: number;
    username: string;
    password: string;
    firstName: string;
    lastName: string;
    birthday: string;
    currency: Currency;
    country: Country;
    city: string;
    avatar: string;
}>;

type ValidateUserError =
    (typeof ValidateUserErrors)[keyof typeof ValidateUserErrors];

type UserState = {
    data?: User;
    form?: User;
    editable: boolean;
    loading: boolean;
    error?: string;
    validateErrors?: ValidateUserError[];
};

export { User, UserState, ValidateUserError };
