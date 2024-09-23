const appRoutes = {
    main: 'main',
    about: 'about',
    profile: 'profile',
    notFound: 'notFound',
} as const;

type RouteKey = (typeof appRoutes)[keyof typeof appRoutes];

const appRoutePaths: Record<RouteKey, string> = {
    [appRoutes.main]: '/',
    [appRoutes.about]: '/about',
    [appRoutes.profile]: '/profile',
    [appRoutes.notFound]: '*',
} as const;

export { appRoutePaths };
