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

export { User };