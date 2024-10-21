import { RuleSetRule } from 'webpack';
import type { BuildOptions } from './types';
import { buildBabelLoader } from './loaders/build-babel-loader';
import { buildCssLoader } from './loaders/build-css-loader';
import { buildFileLoader } from './loaders/build-file-loader';

export const buildLoaders = (options: BuildOptions): RuleSetRule[] => {
    const codeBabelLoader = buildBabelLoader({ isTSX: false });
    const tsxCodeBabelLoader = buildBabelLoader({ isTSX: true });
    const cssLoader = buildCssLoader(options.isDev);
    const fileLoader = buildFileLoader();

    return [codeBabelLoader, tsxCodeBabelLoader, cssLoader, fileLoader];
};
