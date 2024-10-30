import { Suspense } from 'react';
import { useRoutes } from 'react-router-dom';
import { PageLoader } from '@/widgets/page-loader';
import { ProtectedRoute } from './protected-route';
import { routes } from '../config/routes';

export const AppRouter = () => {
    const routeElements = useRoutes(
        routes.map((r) => ({
            ...r,
            element: r.meta?.requiresAuth ? (
                <ProtectedRoute>{r.element}</ProtectedRoute>
            ) : (
                r.element
            ),
        })),
    );

    return <Suspense fallback={<PageLoader />}>{routeElements}</Suspense>;
};
