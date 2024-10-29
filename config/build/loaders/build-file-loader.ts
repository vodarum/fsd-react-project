import { RuleSetRule } from 'webpack';

export const buildFileLoader = (): RuleSetRule => ({
    test: /\.(png|jpe?g|webp|gif)$/i,
    loader: 'file-loader',
});
