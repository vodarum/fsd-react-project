const appRoutes = {
    main: 'main',
    about: 'about',
    profile: 'profile',
    articles: 'articles',
    article: 'article',
    user: 'user',
    notFound: 'notFound',
} as const;

type RouteKey = (typeof appRoutes)[keyof typeof appRoutes];

const appRoutePaths: Record<RouteKey, string> = {
    [appRoutes.main]: '/',
    [appRoutes.about]: '/about',
    [appRoutes.profile]: '/profile',
    [appRoutes.articles]: '/articles',
    [appRoutes.article]: '/articles/',
    [appRoutes.user]: '/users/',
    [appRoutes.notFound]: '*',
} as const;

export { appRoutePaths };
