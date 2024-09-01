import { RuleSetRule } from 'webpack';
import { BuildOptions } from './types';
import { buildCssLoader } from './loaders/build-css-loader';
import { buildTsLoader } from './loaders/build-ts-loader';

export const buildLoaders = ({ isDev }: BuildOptions): RuleSetRule[] => {
    const cssLoader = buildCssLoader(isDev);
    const tsLoader = buildTsLoader();

    return [tsLoader, cssLoader];
};
