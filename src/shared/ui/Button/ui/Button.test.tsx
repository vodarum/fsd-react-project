import { render, screen } from '@testing-library/react';
import { Button, ButtonVariants } from './Button';

describe('Button', () => {
    const btnText = 'Test';

    test('test render', async () => {
        render(<Button>{btnText}</Button>);
        expect(screen.getByText(btnText)).toBeInTheDocument();
    });

    test('test render clear variant', async () => {
        render(<Button variant={ButtonVariants.clear}>{btnText}</Button>);
        expect(screen.getByText(btnText)).toHaveClass(ButtonVariants.clear);
    });
});
