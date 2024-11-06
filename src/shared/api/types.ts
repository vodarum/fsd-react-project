import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { RouteObject } from 'react-router-dom';
import { Countries, Currencies, SortOrders } from './consts';

type Country = (typeof Countries)[keyof typeof Countries];

type Currency = (typeof Currencies)[keyof typeof Currencies];

type ModalOptions = {
    open?: boolean;
    onClose?: () => void;
};

type PropsWithClassName = {
    className?: string;
};

type SortOrder = (typeof SortOrders)[keyof typeof SortOrders];

type UserRole = 'admin' | 'manager' | 'user';

type RouteMeta = Partial<{
    icon: IconDefinition;
    requiresAuth: boolean;
    availableFor: UserRole[];
}>;

type AppRouteObject = RouteObject & {
    name?: string;
    meta?: RouteMeta;
};

type NavRoute = Required<Pick<AppRouteObject, 'id' | 'path' | 'name' | 'meta'>>;

export type {
    AppRouteObject,
    Country,
    Currency,
    ModalOptions,
    NavRoute,
    PropsWithClassName,
    RouteMeta,
    SortOrder,
    UserRole,
};
