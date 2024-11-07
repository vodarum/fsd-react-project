import { screen } from '@testing-library/react';
import { AppRouter } from '.';
import { componentRender } from '@/shared/lib/tests/component-render';
import { getRouteAbout, getRouteAdmin, getRouteArticles } from '@/shared/api';
import { mockSession } from '@/entities/session/testing';
import { mockUsers } from '@/entities/user/testing';
import { mockUserState } from '@/features/user/testing';

window.IntersectionObserver = jest.fn().mockImplementation(() => ({
    observe: () => null,
    unobserve: () => null,
}));

describe('AppRouter', () => {
    test('renders appropriate page for existing route', async () => {
        componentRender(<AppRouter />, {
            route: getRouteAbout(),
        });

        const page = await screen.findByTestId('aboutPage');
        expect(page).toBeInTheDocument();
    });

    test('renders NotFoundPage for non-existent route', async () => {
        componentRender(<AppRouter />, {
            route: '/non-existent-route',
        });

        const page = await screen.findByTestId('notFoundPage');
        expect(page).toBeInTheDocument();
    });

    test('renders MainPage for unauthorized user', async () => {
        componentRender(<AppRouter />, {
            route: getRouteArticles(),
        });

        const page = await screen.findByTestId('mainPage');
        expect(page).toBeInTheDocument();
    });

    test('renders AdminPage for user with appropriate roles', async () => {
        const mockUser = mockUsers[0];

        componentRender(<AppRouter />, {
            route: getRouteAdmin(),
            preloadedState: {
                session: {
                    data: {
                        ...mockSession,
                        userId: mockUser.id,
                    },
                },
                user: {
                    ...mockUserState,
                    data: mockUser,
                },
            },
        });

        const page = await screen.findByTestId('adminPage');
        expect(page).toBeInTheDocument();
    });

    test('renders ForbiddenPage for user without appropriate roles', async () => {
        const mockUser = mockUsers[1];

        componentRender(<AppRouter />, {
            route: getRouteAdmin(),
            preloadedState: {
                session: {
                    data: {
                        ...mockSession,
                        userId: mockUser.id,
                    },
                },
                user: {
                    ...mockUserState,
                    data: mockUser,
                },
            },
        });

        const page = await screen.findByTestId('forbiddenPage');
        expect(page).toBeInTheDocument();
    });
});
