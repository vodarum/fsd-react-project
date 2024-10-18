import { type ResolveOptions } from 'webpack';
import type { BuildOptions } from './types';

export const buildResolvers = ({ paths }: BuildOptions): ResolveOptions => {
    return {
        extensions: ['.tsx', '.ts', '.js'],
        modules: [paths.src, 'node_modules'],
        preferAbsolute: true,
    };
};
