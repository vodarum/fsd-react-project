const { resolve: pathResolve } = require('node:path');
const { writeFile } = require('node:fs/promises');
const { createPublicApiTemplate } = require('./templates');

module.exports = async (path) => {
    try {
        await writeFile(
            pathResolve(path, 'index.ts'),
            createPublicApiTemplate(),
        );
    } catch (e) {
        console.error(
            `Не удалось создать public api для слайса ${sliceName}`,
            e,
        );
    }
};
