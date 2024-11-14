import { allowedLayers, sortedLayers } from '../consts/index.js';
import {
    isEntitiesTypesCrossImport,
    isMatch,
    isRelative,
    isSharedLayer,
    splitPath,
    splitPathByCwd,
} from '../helpers/index.js';

const isNotUnderlyingLayer = (currentFileLayer, importedLayer) => {
    const currentFileLayerSortIdx = sortedLayers.findIndex(
        (l) => l === currentFileLayer,
    );
    const importedLayerSortIdx = sortedLayers.findIndex(
        (l) => l === importedLayer,
    );
    return currentFileLayerSortIdx <= importedLayerSortIdx;
};

const layerImports = {
    meta: {
        type: 'suggestion',
        docs: {
            description:
                'Specifies layer import if they do not comply with the methodology FSD',
        },
        fixable: 'code',
        schema: [
            {
                type: 'object',
                properties: {
                    alias: {
                        type: 'string',
                    },
                    ignoreImportPatterns: {
                        type: 'array',
                    },
                },
            },
        ],
    },
    create: function (context) {
        const { alias = '', ignoreImportPatterns = [] } =
            context.options[0] ?? {};

        return {
            ImportDeclaration(node) {
                const value = node.source.value;
                const importPath = alias
                    ? value.replace(`${alias}/`, '')
                    : value;

                if (isRelative(importPath)) return;

                const importPathParts = splitPath(importPath);

                if (!allowedLayers[importPathParts[0]]) return;

                const currentFilePathParts = splitPathByCwd(
                    context.filename,
                    context.cwd,
                );

                if (
                    !allowedLayers[currentFilePathParts[0]] ||
                    isMatch(importPathParts.join('/'), ignoreImportPatterns) ||
                    (isSharedLayer(currentFilePathParts[0]) &&
                        isSharedLayer(importPathParts[0])) ||
                    isEntitiesTypesCrossImport(
                        currentFilePathParts,
                        importPathParts,
                    )
                )
                    return;

                if (
                    isNotUnderlyingLayer(
                        currentFilePathParts[0],
                        importPathParts[0],
                    )
                ) {
                    context.report({
                        node,
                        message:
                            'Imports should only be made from underlying layers',
                    });
                }
            },
        };
    },
};

export default layerImports;
