import { screen } from '@testing-library/react';
import { LeftSidebar } from '.';
import { componentRender } from 'shared/lib/tests/component-render';

const sidebarTestId = 'leftSidebar';
const open = 'open';

describe('LeftSidebar', () => {
    test('test render', () => {
        componentRender(<LeftSidebar />);
        expect(screen.getByTestId(sidebarTestId)).toBeInTheDocument();
    });

    test('test sidebar collapsed', () => {
        componentRender(<LeftSidebar />);
        expect(screen.getByTestId(sidebarTestId)).not.toHaveClass(open);
    });

    test('test sidebar opened', () => {
        componentRender(<LeftSidebar open />);
        expect(screen.getByTestId(sidebarTestId)).toHaveClass(open);
    });
});
