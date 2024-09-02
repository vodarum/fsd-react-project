import path from 'path';
import { type Configuration } from 'webpack';
import { buildWebpackConfig } from './config/build/build-webpack-config';
import { BuildEnv } from './config/build/types';

export default function (env: BuildEnv): Configuration {
    const mode = env.mode || 'development';
    const port = env.port || 3000;
    const baseURL = env.baseURL || 'http://localhost:8000';
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
        baseURL,
        paths,
        isDev,
        port,
    });
}
