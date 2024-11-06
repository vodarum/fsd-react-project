import {
    faAddressCard,
    faClipboardList,
    faHome,
    faNewspaper,
} from '@fortawesome/free-solid-svg-icons';
import { AppRoutes } from './consts';
import { NavRoute } from './types';

const getRouteMain = () => '/';

const getRouteAbout = () => '/about';

const getRouteProfile = () => `/profile`;

const getRouteArticles = () => '/articles';

const getRouteArticle = (id: string) => `/articles/${id}`;

const getRouteUser = (id: string) => `/users/${id}`;

const getRouteAdmin = () => '/admin';

const getRouteForbidden = () => `/forbidden`;

const navRoutes: NavRoute[] = [
    {
        id: AppRoutes.main,
        name: 'Главная',
        path: getRouteMain(),
        meta: {
            icon: faHome,
        },
    },
    {
        id: AppRoutes.about,
        name: 'O сайте',
        path: getRouteAbout(),
        meta: {
            icon: faClipboardList,
        },
    },
    {
        id: AppRoutes.profile,
        name: 'Профиль',
        path: getRouteProfile(),
        meta: {
            icon: faAddressCard,
            requiresAuth: true,
        },
    },
    {
        id: AppRoutes.articles,
        name: 'Статьи',
        path: getRouteArticles(),
        meta: {
            icon: faNewspaper,
            requiresAuth: true,
        },
    },
];

export {
    getRouteMain,
    getRouteAbout,
    getRouteProfile,
    getRouteArticles,
    getRouteArticle,
    getRouteUser,
    getRouteAdmin,
    getRouteForbidden,
    navRoutes,
};
