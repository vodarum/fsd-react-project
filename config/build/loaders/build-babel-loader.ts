import { type RuleSetRule } from 'webpack';
import { babelAttributeExtractPlugin } from '../../babel/babel-attribute-extract-plugin';
import { type BuildOptions } from '../types';

type BabelLoaderBuildOptions = Pick<BuildOptions, 'isDev'> & {
    isTSX: boolean;
};

export const buildBabelLoader = ({
    isDev,
    isTSX,
}: BabelLoaderBuildOptions): RuleSetRule => ({
    test: isTSX ? /\.(j|t)sx$/ : /\.(j|t)s$/,
    use: {
        loader: 'babel-loader',
        options: {
            cacheDirectory: true,
            targets: 'defaults',
            presets: [
                ['@babel/preset-env'],
                [
                    '@babel/preset-typescript',
                    {
                        isTSX,
                        ...(isTSX ? { allExtensions: true } : {}),
                    },
                ],
            ],
            plugins: [
                '@babel/plugin-transform-runtime',
                isTSX &&
                    !isDev && [
                    babelAttributeExtractPlugin,
                    {
                        attrs: ['data-testid'],
                    },
                ],
            ].filter(Boolean),
        },
    },
    exclude: /node_modules/,
});
