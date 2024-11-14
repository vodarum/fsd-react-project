import { allowedLayers } from '../consts/index.js';
import { isMatch, isRelative, splitPath } from '../helpers/index.js';

const testingPublicApiImports = {
    meta: {
        type: 'suggestion',
        docs: {
            description:
                'Specifies import paths if they are not from a public API',
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
        const {
            alias = '',
            testFilePatterns = [],
            ignoreImportPatterns = [],
        } = context.options[0] ?? {};

        return {
            ImportDeclaration(node) {
                const value = node.source.value;
                const importPath = alias
                    ? value.replace(`${alias}/`, '')
                    : value;

                if (
                    isRelative(importPath) ||
                    isMatch(context.filename, testFilePatterns) || // isTestFile
                    isMatch(importPath, ignoreImportPatterns) // isIgnored
                )
                    return;

                const importPathParts = splitPath(importPath);

                if (!allowedLayers[importPathParts[0]]) return;

                if (
                    importPathParts[2] === 'testing' &&
                    importPathParts.length === 3
                ) {
                    context.report({
                        node,
                        message:
                            "Import into production files shouldn't be done from a public API for tests",
                    });
                }
            },
        };
    },
};

export default testingPublicApiImports;
