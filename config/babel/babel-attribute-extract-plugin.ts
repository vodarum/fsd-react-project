import { PluginItem } from '@babel/core';

export const babelAttributeExtractPlugin = (): PluginItem => {
    return {
        visitor: {
            Program(path, state) {
                const attrsToExtract = state.opts.attrs ?? [];

                path.traverse({
                    JSXIdentifier(path) {
                        if (attrsToExtract.includes(path.node.name)) {
                            path.parentPath.remove();
                        }
                    },
                });
            },
        },
    };
};
