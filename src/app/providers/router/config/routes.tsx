import { About } from 'pages/about';
import { Main } from 'pages/main';
import { NotFound } from 'pages/not-found';
import { Profile } from 'pages/profile';
import {
    faAddressCard,
    faClipboardList,
    faHome,
} from '@fortawesome/free-solid-svg-icons';
import { AppRouteObject, NavRoute } from './types';
import { appRoutePaths } from './const';

const navRouteElements = {
    [appRoutePaths.main]: <Main />,
    [appRoutePaths.about]: <About />,
    [appRoutePaths.profile]: <Profile />,
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
];

const routes: AppRouteObject[] = [
    ...navRoutes.map((r) => ({
        ...r,
        element: navRouteElements[r.path],
    })),
    {
        path: appRoutePaths.notFound,
        element: <NotFound />,
    },
] as const;

export { navRoutes, routes };
