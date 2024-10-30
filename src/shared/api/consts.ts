const APP_SESSION_LS_KEY = 'session';

const AppRoutes = {
    main: '/',
    about: '/about',
    profile: '/profile',
    articles: '/articles',
    article: '/articles/',
    user: '/users/',
    notFound: '*',
} as const;

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

export { APP_SESSION_LS_KEY, AppRoutes, Countries, Currencies, SortOrders };
