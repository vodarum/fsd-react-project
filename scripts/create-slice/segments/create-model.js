const { resolve: pathResolve } = require('node:path');
const { mkdir, writeFile } = require('node:fs/promises');
const {
    createMocksTemplate,
    createModelPublicApiTemplate,
    createReduxSliceTemplate,
    createReduxSliceTestTemplate,
    createTypesTemplate,
} = require('../templates');

module.exports = async (path, sliceName) => {
    try {
        const modelPath = pathResolve(path, 'model');

        await mkdir(modelPath);

        const mocksPath = pathResolve(modelPath, '__mocks__');
        const slicesPath = pathResolve(modelPath, 'slices');

        await Promise.all([
            mkdir(mocksPath),
            mkdir(pathResolve(modelPath, 'selectors')),
            mkdir(pathResolve(modelPath, 'services')),
            mkdir(slicesPath),
            writeFile(
                pathResolve(modelPath, 'types.ts'),
                createTypesTemplate(sliceName),
            ),
            writeFile(
                pathResolve(modelPath, 'index.ts'),
                createModelPublicApiTemplate(sliceName),
            ),
        ]);

        await Promise.all([
            writeFile(
                pathResolve(mocksPath, 'index.ts'),
                createMocksTemplate(sliceName),
            ),
            writeFile(
                pathResolve(slicesPath, 'index.test.ts'),
                createReduxSliceTestTemplate(sliceName),
            ),
            writeFile(
                pathResolve(slicesPath, 'index.ts'),
                createReduxSliceTemplate(sliceName),
            ),
        ]);
    } catch (e) {
        console.error(
            `Не удалось создать сегмент model для слайса ${sliceName}`,
            e,
        );
    }
};
