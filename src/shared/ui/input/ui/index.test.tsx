import { render, screen } from '@testing-library/react';
import { Input, InputVariants } from '.';

describe('Input', () => {
    const labelTestId = 'label';
    const inputTestId = 'input';

    test('test render', () => {
        render(<Input />);
        expect(screen.getByTestId(inputTestId)).toBeInTheDocument();
    });

    Object.values(InputVariants).forEach((variant) => {
        test(`test render ${variant} variant`, () => {
            render(<Input variant={variant} />);
            expect(screen.getByTestId(inputTestId)).toHaveClass(variant);
        });
    });

    test('test render with label', () => {
        const label = 'Test label';
        render(<Input label={label} />);
        expect(screen.getByTestId(labelTestId)).toBeInTheDocument();
        expect(screen.getByTestId(labelTestId)).toHaveTextContent(label);
    });

    test('test render with value', () => {
        const value = 'Test value';
        render(<Input value={value} />);
        expect(screen.getByTestId(inputTestId)).toHaveValue(value);
    });
});
