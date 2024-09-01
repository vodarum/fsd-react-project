import {
    faAddressCard,
    faClipboardList,
    faHome,
} from '@fortawesome/free-solid-svg-icons';
import { SidebarItem } from './types';
import { appRoutePaths } from 'app/providers/router';

export const items: SidebarItem[] = [
    { path: appRoutePaths.main, title: 'Главная', icon: faHome },
    {
        path: appRoutePaths.about,
        title: 'O сайте',
        icon: faClipboardList,
    },
    {
        path: appRoutePaths.profile,
        title: 'Профиль',
        icon: faAddressCard,
    },
];
