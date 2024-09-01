import { Countries, Currencies } from './const';

type Country = (typeof Countries)[keyof typeof Countries];

type Currency = (typeof Currencies)[keyof typeof Currencies];

export { Country, Currency };
