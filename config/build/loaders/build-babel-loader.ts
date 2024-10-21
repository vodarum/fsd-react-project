import { RuleSetRule } from 'webpack';
import { babelAttributeExtractPlugin } from '../../babel/babel-attribute-extract-plugin';

type BabelLoaderBuildOptions = {
    isTSX: boolean;
};

export const buildBabelLoader = ({
    isTSX,
}: BabelLoaderBuildOptions): RuleSetRule => ({
    test: isTSX ? /\.(j|t)sx$/ : /\.(j|t)s$/,
    exclude: /node_modules/,
    use: {
        loader: 'babel-loader',
        options: {
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
                isTSX && [
                    babelAttributeExtractPlugin,
                    {
                        attrs: ['data-testid'],
                    },
                ],
            ].filter(Boolean),
        },
    },
});
