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
    getRouteArticle,
    getRouteUser,
    navRoutes,
    type AppRouteObject,
} from '@/shared/api';

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
        path: '*',
        element: <NotFound />,
    },
] as const;
