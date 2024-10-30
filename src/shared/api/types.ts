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

type RouteMeta = Partial<{
    icon: IconDefinition;
    requiresAuth: boolean;
}>;

type AppRouteObject = RouteObject & {
    name?: string;
    meta?: RouteMeta;
};

type NavRoute = Required<Pick<AppRouteObject, 'path' | 'name' | 'meta'>>;

export type {
    AppRouteObject,
    Country,
    Currency,
    ModalOptions,
    NavRoute,
    PropsWithClassName,
    SortOrder,
};
