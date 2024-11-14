import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import pluginReact from 'eslint-plugin-react';
import pluginI18next from 'eslint-plugin-i18next';
import pluginUnusedImports from 'eslint-plugin-unused-imports';
import pluginFsd from './plugins/eslint-plugin-fsd/index.js';

export default [
    { files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'] },
    { languageOptions: { globals: globals.browser } },
    pluginJs.configs.recommended,
    ...tseslint.configs.recommended,
    pluginReact.configs.flat.recommended,
    pluginReact.configs.flat['jsx-runtime'],
    {
        plugins: {
            i18next: pluginI18next,
            'unused-imports': pluginUnusedImports,
            fsd: pluginFsd,
        },
        rules: {
            indent: [
                'error',
                4,
                {
                    SwitchCase: 1,
                },
            ],
            'i18next/no-literal-string': [
                'error',
                { markupOnly: true, ignoreAttribute: ['data-testid'] },
            ],
            'react/display-name': 'off',
            '@typescript-eslint/ban-ts-comment': 'off',
            'unused-imports/no-unused-imports': 'error',
            'fsd/path-checker': ['error', { alias: '@' }],
            'fsd/public-api-imports': [
                'error',
                {
                    alias: '@',
                    ignoreImportPatterns: [
                        '**/(error-boundary|(store|theme)-provider)',
                        '**/app/styles/index.scss',
                    ],
                },
            ],
            'fsd/testing-public-api-imports': [
                'error',
                {
                    alias: '@',
                    testFilePatterns: [
                        '**/*.test.ts',
                        '**/*.(test|stories).tsx',
                        '**/__mocks__/*.ts',
                    ],
                },
            ],
            'fsd/mock-imports': [
                'error',
                {
                    alias: '@',
                    testFilePatterns: [
                        '**/*.test.ts',
                        '**/*.(test|stories).tsx',
                    ],
                },
            ],
            'fsd/mock-exports': ['error', { alias: '@' }],
            'fsd/layer-imports': [
                'error',
                {
                    alias: '@',
                    ignoreImportPatterns: [
                        '**/store-provider',
                        '**/app/styles/index.scss',
                        '**/testing',
                    ],
                },
            ],
        },
        settings: {
            react: {
                version: 'detect',
            },
        },
    },
];
