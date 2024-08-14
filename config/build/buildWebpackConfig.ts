import { type Configuration } from 'webpack';
import { BuildOptions } from './types';
import { buildPlugins } from './buildPlugins';
import { buildLoaders } from './buildLoaders';
import { buildResolvers } from './buildResolvers';
import { buildDevServer } from './buildDevServer';

export const buildWebpackConfig = (options: BuildOptions): Configuration => {
    const { isDev, mode, paths } = options;
    const baseConfig = {
        mode,
        entry: paths.entry,
        output: {
            path: paths.build,
            filename: '[name].[contenthash].js',
            clean: true,
        },
        plugins: buildPlugins(options),
        module: {
            rules: buildLoaders(options),
        },
        resolve: buildResolvers(options),
    };

    return isDev
        ? {
            ...baseConfig,
            devServer: buildDevServer(options),
            devtool: 'inline-source-map',
        }
        : baseConfig;
};