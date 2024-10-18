import type { StorybookConfig } from '@storybook/react-webpack5';
import path from 'path';
import type { BuildPaths } from '../build/types';
import { buildCssLoader } from '../build/loaders/build-css-loader';
import { DefinePlugin } from 'webpack';

const config: StorybookConfig = {
    stories: [
        '../../src/**/*.mdx',
        '../../src/**/*.stories.@(js|jsx|mjs|ts|tsx)',
    ],
    addons: [
        '@storybook/addon-webpack5-compiler-swc',
        '@storybook/addon-onboarding',
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        '@chromatic-com/storybook',
        '@storybook/addon-interactions',
        '@storybook/addon-themes',
    ],
    framework: {
        name: '@storybook/react-webpack5',
        options: {},
    },
    staticDirs: ['../../public'],
    swc: () => ({
        jsc: {
            transform: {
                react: {
                    runtime: 'automatic',
                },
            },
        },
    }),
    webpackFinal(config) {
        const srcPath: BuildPaths['src'] = path.resolve(
            __dirname,
            '..',
            '..',
            'src',
        );

        if (config.resolve?.modules) {
            config.resolve.modules = [srcPath, 'node_modules'];
        }

        config.module?.rules?.push(buildCssLoader(true));

        config.plugins?.push(
            new DefinePlugin({
                __IS_DEV__: JSON.stringify(true),
                __BASE_URL__: JSON.stringify('http://localhost:8000'),
                __PROJECT__: JSON.stringify('storybook'),
            }),
        );

        return config;
    },
};
export default config;
