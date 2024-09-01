import { appRoutePaths } from '../config';
import { About } from 'pages/about';
import { Main } from 'pages/main';
import { NotFound } from 'pages/not-found';
import { Profile } from 'pages/profile';
import { Suspense } from 'react';
import { RouteObject, useRoutes } from 'react-router-dom';
import { PageLoader } from 'widgets/page-loader';

const routeConfig: RouteObject[] = [
    {
        path: appRoutePaths.main,
        element: <Main />,
    },
    {
        path: appRoutePaths.about,
        element: <About />,
    },
    {
        path: appRoutePaths.profile,
        element: <Profile />,
    },
    {
        path: appRoutePaths.notFound,
        element: <NotFound />,
    },
] as const;

export const AppRouter = () => {
    const routeElements = useRoutes(routeConfig);
    return <Suspense fallback={<PageLoader />}>{routeElements}</Suspense>;
};
