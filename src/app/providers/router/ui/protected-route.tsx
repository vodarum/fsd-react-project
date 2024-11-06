import { sessionSelectors } from '@/entities/session';
import { userSelectors } from '@/features/user';
import { getRouteForbidden, getRouteMain, type RouteMeta } from '@/shared/api';
import { PageLoader } from '@/widgets/page-loader';
import { PropsWithChildren } from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

type ProtectedRouteProps = PropsWithChildren & Pick<RouteMeta, 'availableFor'>;

export const ProtectedRoute = ({
    children,
    availableFor,
}: ProtectedRouteProps) => {
    const isAuth = useSelector(sessionSelectors.selectIsAuth);
    const userIsLoading = useSelector(userSelectors.selectLoading);
    const hasRole = useSelector(userSelectors.selectHasRole);

    if (!isAuth) {
        return <Navigate to={getRouteMain()} replace />;
    }

    if (userIsLoading) return <PageLoader />;

    const hasAccess = availableFor
        ? availableFor.some((r) => hasRole(r))
        : true;

    if (!hasAccess) {
        return <Navigate to={getRouteForbidden()} replace />;
    }

    return children;
};
