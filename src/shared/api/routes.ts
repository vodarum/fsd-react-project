import {
    faAddressCard,
    faClipboardList,
    faHome,
    faNewspaper,
} from '@fortawesome/free-solid-svg-icons';
import { AppRoutes } from './consts';
import { NavRoute } from './types';

export const navRoutes: NavRoute[] = [
    {
        name: 'Главная',
        path: AppRoutes.main,
        meta: {
            icon: faHome,
        },
    },
    {
        name: 'O сайте',
        path: AppRoutes.about,
        meta: {
            icon: faClipboardList,
        },
    },
    {
        name: 'Профиль',
        path: AppRoutes.profile,
        meta: {
            icon: faAddressCard,
            requiresAuth: true,
        },
    },
    {
        name: 'Статьи',
        path: AppRoutes.articles,
        meta: {
            icon: faNewspaper,
            requiresAuth: true,
        },
    },
];
