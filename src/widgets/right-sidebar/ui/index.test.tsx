import { screen } from '@testing-library/react';
import { RightSidebar } from '.';
import { componentRender } from '@/shared/lib/tests/component-render';

const sidebarTestId = 'rightSidebar';
const open = 'open';

describe('RightSidebar', () => {
    test('test render', () => {
        componentRender(<RightSidebar />);
        expect(screen.getByTestId(sidebarTestId)).toBeInTheDocument();
    });

    test('test sidebar collapsed', () => {
        componentRender(<RightSidebar />);
        expect(screen.getByTestId(sidebarTestId)).not.toHaveClass(open);
    });

    test('test sidebar opened', () => {
        componentRender(<RightSidebar open />);
        expect(screen.getByTestId(sidebarTestId)).toHaveClass(open);
    });
});
