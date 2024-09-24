import { type Configuration } from 'webpack';
import { BuildOptions } from './types';
import { buildPlugins } from './build-plugins';
import { buildLoaders } from './build-loaders';
import { buildResolvers } from './build-resolvers';
import { buildDevServer } from './build-dev-server';

export const buildWebpackConfig = (options: BuildOptions): Configuration => {
    const { isDev, mode, paths } = options;
    const baseConfig = {
        mode,
        entry: paths.entry,
        output: {
            path: paths.build,
            publicPath: '/',
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
