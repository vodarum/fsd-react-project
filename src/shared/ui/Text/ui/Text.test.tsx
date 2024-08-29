import { render, screen } from '@testing-library/react';
import { Text } from './Text';

const testText = 'Test text';

describe('Text', () => {
    test('test render', () => {
        render(<Text>{testText}</Text>);
        expect(screen.getByText(testText)).toBeInTheDocument();
    });
});
