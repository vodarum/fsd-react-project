import { withThemeByClassName } from '@storybook/addon-themes';
import type { Preview } from '@storybook/react';
import { StyleDecorator } from '../../src/shared/config/storybook/StyleDecorator';

const preview: Preview = {
    parameters: {
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
    },
    decorators: [
        withThemeByClassName({
            themes: {
                light: 'light',
                dark: 'dark',
            },
            defaultTheme: 'light',
        }),
        StyleDecorator,
    ],
};

export default preview;
