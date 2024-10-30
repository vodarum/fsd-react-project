import { RuleSetRule } from 'webpack';
import type { BuildOptions } from './types';
import { buildBabelLoader } from './loaders/build-babel-loader';
import { buildCssLoader } from './loaders/build-css-loader';
import { buildFileLoader } from './loaders/build-file-loader';

export const buildLoaders = ({ isDev }: BuildOptions): RuleSetRule[] => {
    const codeBabelLoader = buildBabelLoader({ isDev, isTSX: false });
    const tsxCodeBabelLoader = buildBabelLoader({ isDev, isTSX: true });
    const cssLoader = buildCssLoader(isDev);
    const fileLoader = buildFileLoader();

    return [codeBabelLoader, tsxCodeBabelLoader, cssLoader, fileLoader];
};
