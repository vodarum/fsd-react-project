import mockExports from './lib/rules/mock-exports.js';
import mockImports from './lib/rules/mock-imports.js';
import pathChecker from './lib/rules/path-checker.js';
import publicApiImports from './lib/rules/public-api-imports.js';
import testingPublicApiImports from './lib/rules/testing-public-api-imports.js';
import layerImports from './lib/rules/layer-imports.js';

const plugin = {
    meta: {
        name: 'eslint-plugin-fsd',
        version: '1.0.0',
    },
    configs: {},
    rules: {
        'path-checker': pathChecker,
        'public-api-imports': publicApiImports,
        'testing-public-api-imports': testingPublicApiImports,
        'mock-imports': mockImports,
        'mock-exports': mockExports,
        'layer-imports': layerImports,
    },
    processors: {},
};

export default plugin;
