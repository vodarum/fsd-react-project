const appRoutes = {
    main: 'main',
    about: 'about',
    profile: 'profile',
    articles: 'articles',
    article: 'article',
    notFound: 'notFound',
} as const;

type RouteKey = (typeof appRoutes)[keyof typeof appRoutes];

const appRoutePaths: Record<RouteKey, string> = {
    [appRoutes.main]: '/',
    [appRoutes.about]: '/about',
    [appRoutes.profile]: '/profile',
    [appRoutes.articles]: '/articles',
    [appRoutes.article]: '/articles/',
    [appRoutes.notFound]: '*',
} as const;

export { appRoutePaths };
