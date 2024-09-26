import { RuleSetRule } from 'webpack';

export const buildFileLoader = (): RuleSetRule => ({
    test: /\.(png|jpe?g|gif)$/i,
    loader: 'file-loader',
});
