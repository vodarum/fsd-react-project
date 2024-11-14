import { allowedLayers } from '../consts/index.js';
import { isMatch, isRelative, splitPath } from '../helpers/index.js';

const mockImports = {
    meta: {
        type: 'suggestion',
        docs: {
            description:
                'Specifies the imported mocks if they are used in production files',
        },
        fixable: 'code',
        schema: [
            {
                type: 'object',
                properties: {
                    alias: {
                        type: 'string',
                    },
                    testFilePatterns: {
                        type: 'array',
                    },
                },
            },
        ],
    },
    create: function (context) {
        const { alias = '', testFilePatterns = [] } = context.options[0] ?? {};

        return {
            ImportDeclaration(node) {
                const value = node.source.value;
                const importPath = alias
                    ? value.replace(`${alias}/`, '')
                    : value;
                const importPathParts = splitPath(importPath);

                if (
                    !isRelative(importPath) &&
                    !allowedLayers[importPathParts[0]]
                )
                    return;

                const isImportMocks = importPathParts.includes('__mocks__');

                if (!isImportMocks) return;

                const isTestFile = isMatch(context.filename, testFilePatterns);

                if (!isTestFile) {
                    context.report({
                        node,
                        message:
                            'Import mocks into production files is prohibited',
                    });
                }
            },
        };
    },
};

export default mockImports;
