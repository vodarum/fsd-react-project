module.exports = (
    componentName,
) => `import { render, screen } from '@testing-library/react';
import { ${componentName} } from '.';

describe('${componentName}', () => {
    test('test render', async () => {
        render(<${componentName} />);
        expect(screen.getByTestId('${componentName}')).toBeInTheDocument();
    });
});`;
