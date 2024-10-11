const APP_SESSION_LS_KEY = 'session';

const Countries = {
    Russia: 'Russia',
    Belarus: 'Belarus',
    Ukraine: 'Ukraine',
    Kazakhstan: 'Kazahstan',
    Armenia: 'Armenia',
} as const;

const Currencies = {
    rub: 'RUB',
    eur: 'EUR',
    usd: 'USD',
} as const;

const SortOrders = {
    asc: 'asc',
    desc: 'desc',
} as const;

export { APP_SESSION_LS_KEY, Countries, Currencies, SortOrders };
