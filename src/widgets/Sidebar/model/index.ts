import {
    faAddressCard,
    faClipboardList,
    faHome,
} from '@fortawesome/free-solid-svg-icons';

export const items = [
    { path: '/', title: 'Главная', icon: faHome },
    {
        path: '/about',
        title: 'O сайте',
        icon: faClipboardList,
    },
    {
        path: '/profile',
        title: 'Профиль',
        icon: faAddressCard,
    },
];
