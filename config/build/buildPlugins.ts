import {
    DefinePlugin,
    ProgressPlugin,
    type WebpackPluginInstance,
} from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import { BuildOptions } from './types';

export const buildPlugins = ({
    isDev,
    paths,
}: BuildOptions): WebpackPluginInstance[] => {
    const plugins = [
        new HtmlWebpackPlugin({
            template: paths.html,
        }),
        new ProgressPlugin(),
        new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash:5].css',
            chunkFilename: 'css/[name].[contenthash:5].css',
        }),
        new DefinePlugin({
            __IS_DEV__: JSON.stringify(isDev),
        }),
    ];

    if (isDev) {
        plugins.push(new BundleAnalyzerPlugin({ openAnalyzer: false }));
    }

    return plugins;
};
