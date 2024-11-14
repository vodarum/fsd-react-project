import { allowedLayers } from '../consts/index.js';
import { isRelative, splitPath } from '../helpers/index.js';

const mockExports = {
    meta: {
        type: 'suggestion',
        docs: {
            description:
                'Specifies exported mocks if they are in common public API',
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
        const alias = context.options[0]?.alias || '';

        return {
            ExportAllDeclaration(node) {
                const value = node.source?.value;

                if (!value) return;

                const exportPath = alias
                    ? value.replace(`${alias}/`, '')
                    : value;
                const exportPathParts = splitPath(exportPath);

                if (
                    !isRelative(exportPath) &&
                    !allowedLayers[exportPathParts[0]]
                )
                    return;

                const isExportMocks = exportPathParts.includes('__mocks__');

                if (!isExportMocks) return;

                const currentFilePathParts = splitPath(context.filename);
                const isTestingPublicAPI = /testing?\..+/.test(
                    currentFilePathParts.at(-1),
                );

                if (!isTestingPublicAPI) {
                    context.report({
                        node,
                        message:
                            'Export mocks should be done from a testing public API',
                    });
                }
            },
            ExportNamedDeclaration(node) {
                const value = node.source?.value;

                if (!value) return;

                const exportPath = alias
                    ? value.replace(`${alias}/`, '')
                    : value;
                const exportPathParts = splitPath(exportPath);

                if (
                    !isRelative(exportPath) &&
                    !allowedLayers[exportPathParts[0]]
                )
                    return;

                const isExportMocks = exportPathParts.includes('__mocks__');

                if (!isExportMocks) return;

                const currentFilePathParts = splitPath(context.filename);
                const isTestingPublicAPI = /testing?\..+/.test(
                    currentFilePathParts.at(-1),
                );

                if (!isTestingPublicAPI) {
                    context.report({
                        node,
                        message:
                            'Export mocks should be done from a testing public API',
                    });
                }
            },
        };
    },
};

export default mockExports;
