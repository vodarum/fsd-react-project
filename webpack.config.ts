import path from 'path';
import { type Configuration } from 'webpack';
import { buildWebpackConfig } from './config/build/buildWebpackConfig';
import { BuildEnv } from './config/build/types';

export default function (env: BuildEnv): Configuration {
    const mode = env.mode || 'development';
    const port = env.port || 3000;
    const srcPath = path.resolve(__dirname, 'src');
    const paths = {
        build: path.resolve(__dirname, 'dist'),
        entry: path.resolve(srcPath, 'index.tsx'),
        html: path.resolve(__dirname, 'public', 'index.html'),
        src: srcPath,
    };
    const isDev = mode === 'development';

    return buildWebpackConfig({
        mode,
        paths,
        isDev,
        port,
    });
};