import { About } from '@/pages/about';
import { Article } from '@/pages/article';
import { Articles } from '@/pages/articles';
import { Main } from '@/pages/main';
import { NotFound } from '@/pages/not-found';
import { Profile } from '@/pages/profile';
import { RouteObject } from 'react-router-dom';
import { User } from '@/pages/user';
import {
    AppRoutes,
    getRouteAdmin,
    getRouteArticle,
    getRouteForbidden,
    getRouteUser,
    navRoutes,
    type AppRouteObject,
} from '@/shared/api';
import { Admin } from '@/pages/admin';
import { Forbidden } from '@/pages/forbidden';

const navRouteElements: Record<string, RouteObject> = {
    [AppRoutes.main]: {
        element: <Main />,
    },
    [AppRoutes.about]: {
        element: <About />,
    },
    [AppRoutes.profile]: {
        element: <Profile />,
    },
    [AppRoutes.articles]: {
        element: <Articles />,
    },
} as const;

export const routes: AppRouteObject[] = [
    ...navRoutes.map((r) => ({
        ...r,
        ...navRouteElements[r.id],
    })),
    {
        path: getRouteArticle(':id'),
        element: <Article />,
        meta: {
            requiresAuth: true,
        },
    },
    {
        path: getRouteUser(':id'),
        element: <User />,
        meta: {
            requiresAuth: true,
        },
    },
    {
        path: getRouteAdmin(),
        element: <Admin />,
        meta: {
            requiresAuth: true,
            availableFor: ['admin', 'manager'],
        },
    },
    {
        path: getRouteForbidden(),
        element: <Forbidden />,
        meta: {
            requiresAuth: true,
        },
    },
    {
        path: '*',
        element: <NotFound />,
    },
] as const;
