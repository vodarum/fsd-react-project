import { render, screen } from '@testing-library/react';
import { Tabs } from '.';
import { mockTabItems } from '../__mocks__';

const testId = 'tabs';

describe('Tabs', () => {
    test('test render', () => {
        render(<Tabs activeKey={mockTabItems[0].key} items={mockTabItems} />);

        const tabs = screen.getByTestId(testId);
        const activeTab = tabs.firstElementChild;
        const lastTab = tabs.lastElementChild;

        expect(tabs).toBeInTheDocument();
        expect(tabs.childElementCount).toBe(mockTabItems.length);
        expect(activeTab?.tagName).toBe('BUTTON');
        expect(activeTab).toHaveClass('clear');
        expect(lastTab).toHaveClass('outlined');
    });
});
