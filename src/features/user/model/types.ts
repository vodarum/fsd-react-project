import { User } from 'entities/user';
import { ValidateUserErrors } from './const';

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

export { UserState, ValidateUserError };
