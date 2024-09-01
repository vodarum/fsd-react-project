import { screen } from '@testing-library/react';
import { SidebarItem } from '.';
import { componentRender } from 'shared/lib/tests/component-render';
import { items } from '../../model';

describe('SidebarItem', () => {
    test('test render', () => {
        componentRender(<SidebarItem {...items[0]} />);

        const link = screen.getByTestId('link');

        expect(link).toBeInTheDocument();
        expect(link).toHaveAttribute('href');
        expect(link).toHaveProperty(
            'href',
            `${window.location.origin}${items[0].path}`,
        );

        expect(screen.getByTestId('linkTitle')).toHaveTextContent(
            items[0].title,
        );
    });
});
