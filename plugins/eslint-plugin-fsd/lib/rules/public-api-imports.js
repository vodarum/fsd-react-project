import { allowedLayers } from '../consts/index.js';
import {
    isEntitiesTypesCrossImport,
    isMatch,
    isRelative,
    isSharedLayer,
    splitPath,
    splitPathByCwd,
} from '../helpers/index.js';

const publicApiImports = {
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

                if (
                    !allowedLayers[importPathParts[0]] ||
                    isSharedLayer(importPathParts[0]) ||
                    isMatch(importPathParts.join('/'), ignoreImportPatterns)
                )
                    return;

                const currentFilePathParts = splitPathByCwd(
                    context.filename,
                    context.cwd,
                );

                if (
                    isEntitiesTypesCrossImport(
                        currentFilePathParts,
                        importPathParts,
                    )
                )
                    return;

                if (
                    importPathParts[2] !== 'testing' &&
                    importPathParts.length > 2
                ) {
                    context.report({
                        node,
                        message: 'Import should be done from a public API',
                        fix(fixer) {
                            return fixer.replaceText(
                                node.source,
                                `'${alias}/${importPathParts[0]}/${importPathParts[1]}'`,
                            );
                        },
                    });
                }
            },
        };
    },
};

export default publicApiImports;
