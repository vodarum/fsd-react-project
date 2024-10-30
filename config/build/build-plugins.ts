import {
    DefinePlugin,
    ProgressPlugin,
    type WebpackPluginInstance,
} from 'webpack';
import CircularDependencyPlugin from 'circular-dependency-plugin';
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import type { BuildOptions } from './types';

export const buildPlugins = ({
    baseURL,
    isDev,
    paths,
    project,
}: BuildOptions): WebpackPluginInstance[] => {
    const plugins = [
        new HtmlWebpackPlugin({
            template: paths.html,
        }),
        new ProgressPlugin(),
        new DefinePlugin({
            __IS_DEV__: JSON.stringify(isDev),
            __BASE_URL__: JSON.stringify(baseURL),
            __PROJECT__: JSON.stringify(project),
        }),
    ];

    if (isDev) {
        plugins.push(
            new BundleAnalyzerPlugin({ openAnalyzer: false }),
            new CircularDependencyPlugin({
                // В проекте есть другой инструмент (dependency-cruiser) для поиска кольцевых зависимостей
                exclude: /a\.js|node_modules/,
                failOnError: true,
                allowAsyncCycles: false,
                cwd: process.cwd(),
            }),
            new ForkTsCheckerWebpackPlugin(),
        );
    } else {
        plugins.push(
            new MiniCssExtractPlugin({
                filename: 'css/[name].[contenthash:5].css',
                chunkFilename: 'css/[name].[contenthash:5].css',
            }),
        );
    }

    return plugins;
};
