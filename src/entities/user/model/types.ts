import { Country, Currency, UserRole } from '@/shared/api';

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
    roles: UserRole[];
}>;

export type { User };
