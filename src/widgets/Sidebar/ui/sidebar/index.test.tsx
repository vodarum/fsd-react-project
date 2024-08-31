import { screen } from '@testing-library/react';
import { Sidebar } from '.';
import { componentRender } from 'shared/lib/tests/componentRender';

const sidebarTestId = 'sidebar';
const collapsed = 'collapsed';

describe('Sidebar', () => {
    test('test render', () => {
        componentRender(<Sidebar />);
        expect(screen.getByTestId(sidebarTestId)).toBeInTheDocument();
    });

    test('test sidebar not collapsed', () => {
        componentRender(<Sidebar />);
        expect(screen.getByTestId(sidebarTestId)).not.toHaveClass(collapsed);
    });

    test('test sidebar collapsed', () => {
        componentRender(<Sidebar collapsed />);
        expect(screen.getByTestId(sidebarTestId)).toHaveClass(collapsed);
    });
});
