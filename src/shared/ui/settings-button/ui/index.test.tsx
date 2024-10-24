import { render, screen } from '@testing-library/react';
import { SettingsButton } from '.';
import { ButtonVariants } from '@/shared/ui/button';

const testId = 'settingsButton';

describe('SettingsButton', () => {
    test('test render', async () => {
        render(<SettingsButton />);

        const btn = screen.getByTestId(testId);

        expect(btn).toBeInTheDocument();
        expect(btn).toHaveClass(ButtonVariants.clear);
        expect(btn.childElementCount).toBe(1);
        expect(btn.firstElementChild?.tagName).toBe('svg');
        expect(btn.firstElementChild).toHaveAttribute('data-icon', 'gear');
    });
});
