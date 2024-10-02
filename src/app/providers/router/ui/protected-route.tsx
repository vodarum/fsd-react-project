import { sessionSelectors } from 'entities/session';
import { PropsWithChildren } from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { appRoutePaths } from '../config';

export const ProtectedRoute = ({ children }: PropsWithChildren) => {
    const isAuth = useSelector(sessionSelectors.selectIsAuth);

    if (!isAuth) {
        return <Navigate to={appRoutePaths.main} replace />;
    }

    return children;
};
