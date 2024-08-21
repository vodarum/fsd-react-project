import { appRoutePaths, appRoutes } from '../config';
import { About } from 'pages/about';
import { Main } from 'pages/main';
import { NotFound } from 'pages/not-found';
import { Suspense } from 'react';
import { RouteObject, useRoutes } from 'react-router-dom';
import { PageLoader } from 'widgets/PageLoader';

const routeConfig: RouteObject[] = [
    {
        path: appRoutePaths[appRoutes.main],
        element: <Main />,
    },
    {
        path: appRoutePaths[appRoutes.about],
        element: <About />,
    },
    {
        path: appRoutePaths[appRoutes.notFound],
        element: <NotFound />,
    },
] as const;

export const AppRouter = () => {
    const routeElements = useRoutes(routeConfig);
    return <Suspense fallback={<PageLoader />}>{routeElements}</Suspense>;
};
