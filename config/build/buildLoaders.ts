import { RuleSetRule } from 'webpack';
import { BuildOptions } from './types';
import { buildCssLoader } from './loaders/buildCssLoader';
import { buildTsLoader } from './loaders/buildTsLoader';

export const buildLoaders = ({ isDev }: BuildOptions): RuleSetRule[] => {
    const cssLoader = buildCssLoader(isDev);
    const tsLoader = buildTsLoader();

    return [tsLoader, cssLoader];
};
