import { withThemeByClassName } from '@storybook/addon-themes';
import type { Preview } from '@storybook/react';
import { StyleDecorator } from '../../src/shared/config/storybook/style-decorator';
import { RouterDecorator } from '../../src/shared/config/storybook/router-decorator';

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
};

export default preview;
