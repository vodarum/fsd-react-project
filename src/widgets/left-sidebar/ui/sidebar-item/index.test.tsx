import { screen } from '@testing-library/react';
import { SidebarItem } from '.';
import { navRoutes } from 'app/providers/router';
import { componentRender } from 'shared/lib/tests/component-render';

describe('SidebarItem', () => {
    test('test render', () => {
        componentRender(<SidebarItem {...navRoutes[0]} />);

        const link = screen.getByTestId('navItem');

        expect(link).toBeInTheDocument();
        expect(link).toHaveAttribute('href');
        expect(link).toHaveProperty(
            'href',
            `${window.location.origin}${navRoutes[0].path}`,
        );

        expect(screen.getByTestId('navItemName')).toHaveTextContent(
            navRoutes[0].name,
        );
    });
});
