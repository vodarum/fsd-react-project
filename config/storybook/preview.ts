import { withThemeByClassName } from '@storybook/addon-themes';
import type { Preview } from '@storybook/react';
import { initialize, mswLoader } from 'msw-storybook-addon';
import { StyleDecorator } from '../../src/shared/config/storybook/style-decorator';
import { RouterDecorator } from '../../src/shared/config/storybook/router-decorator';

initialize({ onUnhandledRequest: 'bypass' });

const preview: Preview = {
    parameters: {
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
        layout: 'fullscreen',
    },
    decorators: [
        withThemeByClassName({
            themes: {
                light: 'light',
                dark: 'dark',
                magic: 'magic',
                nature: 'nature',
                halloween: 'halloween',
            },
            defaultTheme: 'light',
        }),
        StyleDecorator,
        RouterDecorator,
    ],
    loaders: [mswLoader],
};

export default preview;
