import { Country, Currency } from 'shared/api';

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
};

export { Profile, ProfileState };
