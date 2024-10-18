import { RuleSetRule } from 'webpack';
import type { BuildOptions } from './types';
import { buildCssLoader } from './loaders/build-css-loader';
import { buildTsLoader } from './loaders/build-ts-loader';
import { buildFileLoader } from './loaders/build-file-loader';

export const buildLoaders = ({ isDev }: BuildOptions): RuleSetRule[] => {
    const cssLoader = buildCssLoader(isDev);
    const tsLoader = buildTsLoader();
    const fileLoader = buildFileLoader();

    return [tsLoader, cssLoader, fileLoader];
};
