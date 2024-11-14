import { relative } from 'path';
import { allowedLayers } from '../consts/index.js';
import {
    isRelative,
    isSharedLayer,
    splitPath,
    splitPathByCwd,
} from '../helpers/index.js';

const pathChecker = {
    meta: {
        type: 'suggestion',
        docs: {
            description:
                'Specifies import paths in a slice if they are not relative',
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
        const alias = context.options[0]?.alias || '';

        return {
            ImportDeclaration(node) {
                const value = node.source.value;
                const importPath = alias
                    ? value.replace(`${alias}/`, '')
                    : value;

                if (isRelative(importPath)) return;

                const [importPathLayer, importPathSlice] =
                    splitPath(importPath);

                if (!allowedLayers[importPathLayer] || !importPathSlice) return;

                const [
                    currentFileLayer,
                    currentFileSlice,
                    ...currentFileOtherParts
                ] = splitPathByCwd(context.filename, context.cwd);

                if (
                    !allowedLayers[currentFileLayer] ||
                    !currentFileSlice ||
                    (isSharedLayer(currentFileLayer) &&
                        isSharedLayer(importPathLayer))
                )
                    return;

                if (
                    currentFileLayer === importPathLayer &&
                    currentFileSlice === importPathSlice
                ) {
                    context.report({
                        node,
                        message: 'Path should be relative',
                        fix(fixer) {
                            let relativeImportPath = splitPath(
                                relative(
                                    [
                                        currentFileLayer,
                                        currentFileSlice,
                                        ...currentFileOtherParts.slice(0, -1),
                                    ].join('/'),
                                    importPath,
                                ),
                            ).join('/');

                            if (!relativeImportPath.startsWith('.')) {
                                relativeImportPath = `./${relativeImportPath}`;
                            }

                            return fixer.replaceText(
                                node.source,
                                `'${relativeImportPath}'`,
                            );
                        },
                    });
                }
            },
        };
    },
};

export default pathChecker;
