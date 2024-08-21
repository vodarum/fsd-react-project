const appRoutes = {
    main: 'main',
    about: 'about',
    notFound: 'notFound',
} as const;

type RouteKey = (typeof appRoutes)[keyof typeof appRoutes];

const appRoutePaths: Record<RouteKey, string> = {
    [appRoutes.main]: '/',
    [appRoutes.about]: '/about',
    [appRoutes.notFound]: '*',
} as const;

export { appRoutes, appRoutePaths };
