import { About } from '@/pages/about';
import { Article } from '@/pages/article';
import { Articles } from '@/pages/articles';
import { Main } from '@/pages/main';
import { NotFound } from '@/pages/not-found';
import { Profile } from '@/pages/profile';
import {
    faAddressCard,
    faClipboardList,
    faHome,
    faNewspaper,
} from '@fortawesome/free-solid-svg-icons';
import type { AppRouteObject, NavRoute } from './types';
import { appRoutePaths } from './const';
import { RouteObject } from 'react-router-dom';
import { User } from '@/pages/user';

const navRouteElements: Record<string, RouteObject> = {
    [appRoutePaths.main]: {
        element: <Main />,
    },
    [appRoutePaths.about]: {
        element: <About />,
    },
    [appRoutePaths.profile]: {
        element: <Profile />,
        path: appRoutePaths.profile,
    },
    [appRoutePaths.articles]: {
        element: <Articles />,
    },
} as const;

const navRoutes: NavRoute[] = [
    {
        name: 'Главная',
        path: appRoutePaths.main,
        meta: {
            icon: faHome,
        },
    },
    {
        name: 'O сайте',
        path: appRoutePaths.about,
        meta: {
            icon: faClipboardList,
        },
    },
    {
        name: 'Профиль',
        path: appRoutePaths.profile,
        meta: {
            icon: faAddressCard,
            requiresAuth: true,
        },
    },
    {
        name: 'Статьи',
        path: appRoutePaths.articles,
        meta: {
            icon: faNewspaper,
            requiresAuth: true,
        },
    },
];

const routes: AppRouteObject[] = [
    ...navRoutes.map((r) => ({
        ...r,
        ...navRouteElements[r.path],
    })),
    {
        path: appRoutePaths.article + ':id',
        element: <Article />,
        meta: {
            requiresAuth: true,
        },
    },
    {
        path: appRoutePaths.user + ':id',
        element: <User />,
        meta: {
            requiresAuth: true,
        },
    },
    {
        path: appRoutePaths.notFound,
        element: <NotFound />,
    },
] as const;

export { navRoutes, routes };
