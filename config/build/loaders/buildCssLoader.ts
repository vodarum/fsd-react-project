import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { RuleSetRule } from 'webpack';
import { BuildOptions } from '../types';

export const buildCssLoader = (isDev: BuildOptions['isDev']): RuleSetRule => ({
    test: /\.s[ac]ss$/i,
    use: [
        isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
        {
            loader: 'css-loader',
            options: {
                modules: {
                    namedExport: false,
                    mode: 'local',
                    auto: /\.module\.\w+$/i,
                    localIdentName: isDev
                        ? '[path][name]__[local]'
                        : '[hash:base64:5]',
                    exportLocalsConvention: 'as-is',
                },
            },
        },
        'sass-loader',
    ],
});
