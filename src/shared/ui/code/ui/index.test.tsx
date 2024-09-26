import { render, screen } from '@testing-library/react';
import { Code } from '.';

describe('Code', () => {
    const content =
        '<!DOCTYPE html> <html lang="ru"> <head> <meta charset="UTF-8"> <title>HTML Document</title> </head> <body> <p> <b> Этот текст будет полужирным, <i>а этот — ещё и курсивным</i>. </b> </p> </body> </html>';

    test('test render', () => {
        render(<Code content={content} />);

        const wrapper = screen.getByTestId('wrapper');
        const btn = wrapper.firstElementChild;
        const icon = btn?.firstElementChild;
        const code = wrapper.lastElementChild;

        expect(wrapper).toBeInTheDocument();
        expect(wrapper.childElementCount).toBe(2);
        expect(btn?.tagName).toBe('BUTTON');
        expect(btn?.childElementCount).toBe(1);
        expect(icon?.tagName).toBe('svg');
        expect(icon).toHaveAttribute('data-icon', 'copy');
        expect(code?.tagName).toBe('CODE');
        expect(code).toHaveTextContent(content);
    });
});
