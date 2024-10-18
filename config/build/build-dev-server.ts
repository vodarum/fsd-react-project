import { type Configuration } from 'webpack-dev-server';
import type { BuildOptions } from './types';

export const buildDevServer = ({ port }: BuildOptions): Configuration => {
    return {
        historyApiFallback: true,
        open: true,
        port,
        client: {
            overlay: false,
        },
    };
};
