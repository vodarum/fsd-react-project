import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { RouteObject } from 'react-router-dom';

type RouteMeta = Partial<{
    icon: IconDefinition;
    requiresAuth: boolean;
}>;

type AppRouteObject = RouteObject & {
    name?: string;
    meta?: RouteMeta;
};

type NavRoute = Required<Pick<AppRouteObject, 'path' | 'name' | 'meta'>>;

export type { AppRouteObject, NavRoute };
