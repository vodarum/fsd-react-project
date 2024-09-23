import { render, screen } from '@testing-library/react';
import { MenuButton } from '.';
import { ButtonVariants } from 'shared/ui/button';

const testId = 'menuButton';

describe('MenuButton', () => {
    test('test render', async () => {
        render(<MenuButton />);

        const btn = screen.getByTestId(testId);

        expect(btn).toBeInTheDocument();
        expect(btn).toHaveClass(ButtonVariants.clear);
        expect(btn.childElementCount).toBe(1);
        expect(btn.firstElementChild?.tagName).toBe('svg');
        expect(btn.firstElementChild).toHaveAttribute('data-icon', 'bars');
    });
});
