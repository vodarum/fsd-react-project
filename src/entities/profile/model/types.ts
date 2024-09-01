import { Country, Currency } from 'shared/api';

type Profile = {
    firstName: string;
    lastName: string;
    age: number;
    currency: Currency;
    country: Country;
    city: string;
    username: string;
    avatar: string;
};

type ProfileState = {
    data?: Profile;
    readonly: boolean;
    loading: boolean;
    error?: string;
};

export { Profile, ProfileState };
