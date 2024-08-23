import { RuleSetRule } from 'webpack';

export const buildTsLoader = (): RuleSetRule => ({
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: '/node_modules/',
});
