const appRoutes: Record<string, string> = {
    main: 'main',
    about: 'about',
} as const;

type RouteKey = (typeof appRoutes)[keyof typeof appRoutes];

const appRoutePaths: Record<RouteKey, string> = {
    [appRoutes.main]: '/',
    [appRoutes.about]: '/about',
} as const;

export { appRoutes, appRoutePaths };
