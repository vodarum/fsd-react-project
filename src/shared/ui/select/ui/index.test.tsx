import { render, screen } from '@testing-library/react';
import { Select } from '.';
import { mockOptions } from '../__mocks__';

describe('Select', () => {
    const labelTestId = 'label';
    const selectTestId = 'select';

    test('test render', () => {
        render(<Select options={mockOptions} />);
        expect(screen.getByTestId(selectTestId)).toBeInTheDocument();
    });

    test('test render with label', () => {
        const label = 'Test label';
        render(<Select label={label} options={mockOptions} />);
        expect(screen.getByTestId(labelTestId)).toBeInTheDocument();
        expect(screen.getByTestId(labelTestId)).toHaveTextContent(label);
    });

    test('test render with value', () => {
        const value = mockOptions[1].value;
        render(<Select value={value} options={mockOptions} />);
        expect(screen.getByTestId(selectTestId)).toHaveValue(value);
    });
});
