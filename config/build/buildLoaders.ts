import { RuleSetRule } from 'webpack';
import { BuildOptions } from './types';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

export const buildLoaders = ({ isDev }: BuildOptions): RuleSetRule[] => {
    const cssLoader = {
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
                        localIdentName: isDev ? '[path][name]__[local]' : '[hash:base64:5]',
                    },
                },
            },
            'sass-loader',
        ],
    };

    const tsLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: '/node_modules/',
    };

    return [
        tsLoader,
        cssLoader,
    ];
};