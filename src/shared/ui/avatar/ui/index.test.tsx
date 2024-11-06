import { render, screen } from '@testing-library/react';
import { Avatar } from '.';

describe('Avatar', () => {
    test.skip('test render', () => {
        const props = {
            src: 'testSrc',
            alt: 'testAlt',
            size: 50,
        };

        render(<Avatar {...props} />);

        const avatar = screen.getByAltText(props.alt);

        expect(avatar).toBeInTheDocument();
        expect(avatar).toHaveAttribute('src', props.src);
        expect(avatar).toHaveStyle({
            width: `${props.size}px`,
            height: `${props.size}px`,
        });
    });
});
