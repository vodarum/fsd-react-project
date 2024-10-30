import { sessionSelectors } from '@/entities/session';
import { AppRoutes } from '@/shared/api';
import { PropsWithChildren } from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

export const ProtectedRoute = ({ children }: PropsWithChildren) => {
    const isAuth = useSelector(sessionSelectors.selectIsAuth);

    if (!isAuth) {
        return <Navigate to={AppRoutes.main} replace />;
    }

    return children;
};
