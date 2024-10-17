const { resolve: pathResolve } = require('node:path');
const { mkdir, writeFile } = require('node:fs/promises');
const { toPascalCase } = require('../helpers');
const {
    createComponentTemplate,
    createStoryTemplate,
    createStyleTemplate,
    createTestTemplate,
} = require('../templates');

module.exports = async (path, layer, sliceName) => {
    try {
        const uiPath = pathResolve(path, 'ui');

        await mkdir(uiPath);

        const componentName = toPascalCase(sliceName);

        await Promise.all([
            writeFile(
                pathResolve(uiPath, 'index.module.scss'),
                createStyleTemplate(componentName),
            ),
            writeFile(
                pathResolve(uiPath, 'index.stories.tsx'),
                createStoryTemplate(layer, componentName),
            ),
            writeFile(
                pathResolve(uiPath, 'index.test.tsx'),
                createTestTemplate(componentName),
            ),
            writeFile(
                pathResolve(uiPath, 'index.tsx'),
                createComponentTemplate(componentName),
            ),
        ]);
    } catch (e) {
        console.error(
            `Не удалось создать сегмент ui для слайса ${sliceName}`,
            e,
        );
    }
};
